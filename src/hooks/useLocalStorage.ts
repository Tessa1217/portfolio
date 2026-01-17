"use client";
import { useSyncExternalStore } from "react";
import { type StorageTypeKey } from "@/types/storage";

export default function useStorage<T>(
  key: string,
  storageType: StorageTypeKey,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const getStorage = () => {
    if (typeof window === "undefined") {
      return null;
    }
    return storageType === "local" ? localStorage : sessionStorage;
  };

  const currentStorage = getStorage();

  const getSnapshot = () => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      if (!currentStorage) return initialValue;
      const item = currentStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const getServerSnapshot = () => initialValue;

  const subscribe = (callback: () => void) => {
    window.addEventListener("storage", callback);
    window.addEventListener(`${storageType}-storage-${key}`, callback);

    return () => {
      window.removeEventListener("storage", callback);
      window.removeEventListener(`${storageType}-storage-${key}`, callback);
    };
  };

  const storage = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setStorage = (value: T | ((prev: T) => T)) => {
    try {
      if (!currentStorage) return;
      const valueToStore = value instanceof Function ? value(storage) : value;
      currentStorage.setItem(key, JSON.stringify(valueToStore));
      window.dispatchEvent(new Event(`${storageType}-storage-${key}`));
    } catch (error) {
      console.error(`Error setting ${storageType}Storage key "${key}":`, error);
    }
  };

  return [storage, setStorage];
}

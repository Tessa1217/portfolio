"use client";
import { useSyncExternalStore } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const getSnapshot = () => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const getServerSnapshot = () => initialValue;

  const subscribe = (callback: () => void) => {
    window.addEventListener("storage", callback);
    window.addEventListener(`local-storage-${key}`, callback);

    return () => {
      window.removeEventListener("storage", callback);
      window.removeEventListener(`local-storage-${key}`, callback);
    };
  };

  const storage = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setStorage = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storage) : value;
      localStorage.setItem(key, JSON.stringify(valueToStore));
      window.dispatchEvent(new Event(`local-storage-${key}`));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storage, setStorage];
}

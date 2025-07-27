import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ProjectModalProps {
  children: React.ReactNode;
  onClose: () => void;
}
export default function ProjectModal({ children, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 z-50 w-full h-full overflow-y-auto overflow-x-hidden justify-center items-center md:inset-0"
    >
      <div className="relative p-4 w-full md:max-w-[80%] max-h-full m-auto">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <div className="flex items-center justify-end p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4 relative">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}

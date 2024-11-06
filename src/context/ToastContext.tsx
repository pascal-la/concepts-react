import { createContext, useContext, useMemo, useState } from "react";

import { Toast } from "../types/types";

import ToastContainer from "../components/toast/ToastContainer";

const DISCARD_TIMEOUT = 290;

type ToastProviderProps = {
  toasts: Toast[];
  addToast: (toast: Toast) => void;
  discardToast: (id: number) => void;
};

const ToastContext = createContext<ToastProviderProps | undefined>(undefined);

const useToastContext = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  return context;
};

const defaultToasts = [
  { id: 1, message: "Chocolate Chip" },
  { id: 2, message: "Sugar", type: "success" },
  { id: 3, message: "Oatmeal", type: "error" },
  { id: 4, message: "Gingerbread", type: "danger" },
] as Toast[];

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState(defaultToasts);

  const addToast = (toast: Toast) => {
    const { id, message, type, duration } = toast;
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  };

  const discardToast = (id: number) => {
    setTimeout(() => {
      setToasts((prev) => prev.filter((p) => p.id !== id));
    }, DISCARD_TIMEOUT);
  };

  const hasToast = toasts.length > 0;

  const value = useMemo(
    () => ({
      toasts,
      addToast,
      discardToast,
    }),
    [toasts]
  );

  return (
    <ToastContext.Provider value={value}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

export { ToastProvider, useToastContext };

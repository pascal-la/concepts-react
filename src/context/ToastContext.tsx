import { createContext, useContext, useMemo, useState } from "react";

import { ToastType } from "../types/types";

import ToastContainer from "../components/toast/ToastContainer";

const ANIMATION_DURATION = 290;

type ToastProviderProps = {
  toasts: ToastType[];
  addToast: (toast: ToastType) => void;
  onDiscardToast: (id: number) => void;
};

const ToastContext = createContext<ToastProviderProps | undefined>(undefined);

const useToastContext = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  return context;
};

const defaultToasts: ToastType[] = [
  { id: 1, message: "Chocolate Chip", duration: 2 },
  { id: 2, message: "Sugar", type: "success", duration: 5 },
  { id: 3, message: "Oatmeal", type: "error", duration: 4 },
  { id: 4, message: "Gingerbread", type: "danger", duration: 3 },
];

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastType[]>(defaultToasts);

  const addToast = (toast: ToastType) => {
    const { id, message, type, duration } = toast;
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  };

  const onDiscardToast = (id: number) => {
    setTimeout(() => {
      setToasts((prev) => prev.filter((p) => p.id !== id));
    }, ANIMATION_DURATION);
  };

  const value = useMemo(
    () => ({
      toasts,
      addToast,
      onDiscardToast,
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

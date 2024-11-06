import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { Toast } from "../types/types";

import ToastContainer from "../components/ToastContainer";

type ToastProviderProps = {
  messages: Toast[];
  addToast: (msg: string) => void;
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
  { id: 2, message: "Sugar" },
  { id: 3, message: "Oatmeal" },
  { id: 4, message: "GingerbreadGingerbread" },
];

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<Toast[]>(defaultToasts);

  const addToast = (msg: string) => {
    setMessages((prev) => [...prev, { id: Date.now(), message: msg }]);
  };

  const discardToast = (id: number) => {
    setTimeout(() => {
      setMessages((prev) => prev.filter((p) => p.id !== id));
    }, 290);
  };

  const value = useMemo(
    () => ({
      messages,
      addToast,
      discardToast,
    }),
    [messages]
  );

  return (
    <ToastContext.Provider value={value}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

export { ToastProvider, useToastContext };

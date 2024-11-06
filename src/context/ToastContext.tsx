import { createContext, useContext, useMemo, useState } from "react";

import { Toast } from "../types/types";

import ToastContainer from "../components/ToastContainer";

type ToastProviderProps = {
  messages: Toast[];
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
  const [messages, setMessages] = useState(defaultToasts);

  const addToast = (toast: Toast) => {
    setMessages((prev) => [
      ...prev,
      { id: toast.id, message: toast.message, type: toast.type },
    ]);
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

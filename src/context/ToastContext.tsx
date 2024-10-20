import { createContext, useContext, useState } from "react";

import { Toast } from "../types/types";

import ToastContainer from "../components/ToastContainer";

type ToastProviderProps = {
  messages: Toast[];
  setMessages: React.Dispatch<React.SetStateAction<Toast[]>>;
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
  const [messages, setMessages] = useState(defaultToasts);

  return (
    <ToastContext.Provider value={{ messages, setMessages }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

export { ToastProvider, useToastContext };

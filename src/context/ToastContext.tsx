import { createContext, useContext, useState } from "react";

import ToastContainer from "../components/ToastContainer";

type ToastProviderProps = {
  messages: string[];
  setMessages: React.Dispatch<React.SetStateAction<string[]>>;
};

const ToastContext = createContext<ToastProviderProps | undefined>(undefined);

const useToastContext = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  return context;
};

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<string[]>([
    "Chocolate Chip",
    "Sugar",
    "Oatmeal",
    "GingerbreadGingerbread",
  ]);

  return (
    <ToastContext.Provider value={{ messages, setMessages }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

export { ToastProvider, useToastContext };

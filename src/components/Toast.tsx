import { useToastContext } from "../context/ToastContext";
import { Toast as ToastType } from "../types/types";

type ToastProps = {
  message: ToastType;
};

const Toast = ({ message }: ToastProps) => {
  const { messages, setMessages } = useToastContext();

  const discardToast = (id: number) => {
    const filteredMessages = messages.filter((m) => m.id !== id);
    setMessages(filteredMessages);
  };

  return (
    <div className="flex justify-between p-3 min-w-60 border border-slate-900 bg-orange-300 rounded-md animate-slide-in-from-right">
      {message.message}
      <span
        className="flex items-start cursor-pointer"
        onClick={() => discardToast(message.id)}
      >
        x
      </span>
    </div>
  );
};

export default Toast;

// import { useState } from "react";
// import { twMerge } from "tailwind-merge";
import { twMerge } from "tailwind-merge";

import { useToastContext } from "../context/ToastContext";
import { Toast as ToastType } from "../types/types";

type ToastProps = {
  message: ToastType;
  type?: "success" | "error" | "danger";
};

const Toast = ({ message, type = "success" }: ToastProps) => {
  const { discardToast } = useToastContext();

  // const [discardAnimation, setDiscardAnimation] = useState<boolean>(false);

  // const discardToast = (id: number) => {
  //   // setDiscardAnimation(true);
  //   setTimeout(() => {
  //     setMessages((prev) => prev.filter((p) => p.id !== id));
  //   }, 290);
  // };

  const toastType = {
    success: "bg-emerald-300",
    error: "bg-yellow-200",
    danger: "bg-red-300",
  };

  console.log("RENDER SINGLE TOAST");

  return (
    // <div
    //   key={message.id}
    //   className={twMerge(
    //     "flex justify-between p-3 min-w-60 border border-slate-900 bg-orange-300 rounded-md animate-slide-in-from-right",
    //     discardAnimation && "animate-slide-out-to-right"
    //   )}
    // >
    <div
      className={twMerge(
        // "flex justify-between p-3 min-w-60 border border-slate-900 rounded-md animate-slide-in-from-right",
        "flex justify-between p-3 min-w-60 border border-slate-900 rounded-md",
        toastType[type]
      )}
    >
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

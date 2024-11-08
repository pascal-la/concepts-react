import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { useToastContext } from "../../context/ToastContext";
import { ToastType } from "../../types/types";

import ToastProgress from "./ToastProgress";

const TOAST_DURATION = 5;

const toastVariant = {
  success: "bg-emerald-300",
  error: "bg-yellow-200",
  danger: "bg-red-300",
};

type ToastProps = {
  toast: ToastType;
};

const Toast = ({ toast }: ToastProps) => {
  const { onDiscardToast } = useToastContext();

  const [discardAnimation, setDiscardAnimation] = useState<boolean>(false);

  const toastDuration = toast.duration || TOAST_DURATION;

  const discardToast = (id: number) => {
    setDiscardAnimation(true);
    onDiscardToast(id);
  };

  useEffect(() => {
    const timeout = setTimeout(
      () => discardToast(toast.id),
      toastDuration * 1000
    );

    return () => clearTimeout(timeout);
  }, [toast.id, toastDuration]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      key={toast.id}
      className={twMerge(
        "min-w-60 border border-slate-900 bg-sky-300 rounded-md overflow-clip animate-slide-in-from-right peer/toast",
        discardAnimation && "animate-slide-out-to-right",
        toast.type && toastVariant[toast.type]
      )}
    >
      <div className="flex justify-between p-3">
        {toast.message}
        <span
          className="flex items-start cursor-pointer"
          onClick={() => discardToast(toast.id)}
        >
          x
        </span>
      </div>
      <ToastProgress
        duration={toastDuration}
        className="peer-hover/toast:[animation-play-state:paused]"
      />
    </div>
  );
};

export default Toast;

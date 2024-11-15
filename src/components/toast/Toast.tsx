import { createElement, Fragment, useEffect, useState } from "react";
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
  const { id, type, message, element, duration, isPermanent } = toast;
  const { discardToast } = useToastContext();

  const [discardAnimation, setDiscardAnimation] = useState<boolean>(false);

  const toastDuration = isPermanent ? null : duration || TOAST_DURATION;

  const onDiscardToast = (id: number) => {
    setDiscardAnimation(true);
    discardToast(id);
  };

  useEffect(() => {
    if (toastDuration) {
      const timeout = setTimeout(
        () => onDiscardToast(id),
        toastDuration * 1000
      );

      return () => clearTimeout(timeout);
    }
  }, [id, toastDuration]); // eslint-disable-line react-hooks/exhaustive-deps

  const toastContent = () => {
    const shouldWrapInDiv = !!message && !!element;

    return createElement(
      shouldWrapInDiv ? "div" : Fragment,
      null,
      message && <span>{message}</span>,
      element
    );
  };

  return (
    <div
      key={id}
      className={twMerge(
        "min-w-60 border border-slate-900 bg-sky-300 rounded-md overflow-clip animate-slide-in-from-right peer/toast",
        discardAnimation && "animate-slide-out-to-right",
        type && toastVariant[type]
      )}
    >
      <div className="flex justify-between p-3">
        {toastContent()}
        <span
          className="flex items-start cursor-pointer"
          onClick={() => onDiscardToast(id)}
        >
          x
        </span>
      </div>
      {toastDuration && (
        <ToastProgress
          duration={toastDuration}
          className="peer-hover/toast:[animation-play-state:paused]"
        />
      )}
    </div>
  );
};

export default Toast;

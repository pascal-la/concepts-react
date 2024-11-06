import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import { useToastContext } from "../../context/ToastContext";

import Toast from "./Toast";

const ToastContainer = () => {
  const { toasts } = useToastContext();

  const [isMounted, setIsMounted] = useState(false);

  const mountingPoint = useMemo(() => {
    const div = document.createElement("div");
    div.className = "fixed top-3 right-3";
    return div;
  }, []);

  useEffect(() => {
    if (!isMounted && toasts.length > 0) {
      document.body.appendChild(mountingPoint);
      setIsMounted(true);
    }

    if (isMounted && toasts.length === 0) {
      document.body.removeChild(mountingPoint);
      setIsMounted(false);
    }
  }, [isMounted, mountingPoint, toasts.length]);

  return createPortal(
    <div className="absolute right-0 flex flex-col items-end gap-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>,
    mountingPoint
  );
};

export default ToastContainer;

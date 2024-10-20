import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

import { useToastContext } from "../context/ToastContext";

import Toast from "./Toast";

const ToastContainer = () => {
  const { messages } = useToastContext();

  const mountingPoint = useMemo(() => {
    const div = document.createElement("div");
    div.className = "fixed top-3 right-3";
    return div;
  }, []);

  useEffect(() => {
    if (mountingPoint) document.body.appendChild(mountingPoint);
    return () => {
      document.body.removeChild(mountingPoint);
    };
  }, [mountingPoint]);

  return createPortal(
    <div className="absolute right-0 flex flex-col items-end gap-2">
      {messages.map((message, i) => (
        <Toast key={i} message={message} />
      ))}
    </div>,
    mountingPoint
  );
};

export default ToastContainer;

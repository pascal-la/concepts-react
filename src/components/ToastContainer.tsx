import { useLayoutEffect, useMemo } from "react";
import { createPortal } from "react-dom";

import { useToastContext } from "../context/ToastContext";

import Toast from "./Toast";

const ToastContainer = () => {
  const { messages } = useToastContext();

  const mountingPoint = useMemo(() => {
    if (!messages.length) return null;
    return document.createElement("div");
  }, [messages]);

  useLayoutEffect(() => {
    if (messages && mountingPoint) {
      document.body.appendChild(mountingPoint);
      return () => {
        document.body.removeChild(mountingPoint);
      };
    }
  }, [messages, mountingPoint]);

  if (!mountingPoint) return null;

  return createPortal(
    <div className="fixed top-3 right-3">
      <div className="absolute right-0 flex flex-col items-end gap-2">
        {messages.map((message, i) => (
          <Toast key={i} message={message} />
        ))}
      </div>
    </div>,
    mountingPoint
  );
};

export default ToastContainer;

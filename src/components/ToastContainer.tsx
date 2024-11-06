import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import { useToastContext } from "../context/ToastContext";

import Toast from "./Toast";

const ToastContainer = () => {
  const { messages } = useToastContext();

  const [isMounted, setIsMounted] = useState(false);

  const mountingPoint = useMemo(() => {
    const div = document.createElement("div");
    div.className = "fixed top-3 right-3";
    return div;
  }, []);

  useEffect(() => {
    if (!isMounted && messages.length > 0) {
      document.body.appendChild(mountingPoint);
      setIsMounted(true);
    }

    if (isMounted && messages.length === 0) {
      document.body.removeChild(mountingPoint);
      setIsMounted(false);
    }
  }, [isMounted, messages.length, mountingPoint]);

  return createPortal(
    <div className="absolute right-0 flex flex-col items-end gap-2">
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </div>,
    mountingPoint
  );
};

export default ToastContainer;

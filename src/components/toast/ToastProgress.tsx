import { twMerge } from "tailwind-merge";

type ToastProgressProps = {
  duration: number;
  className: string;
};

const ToastProgress = ({ duration, className }: ToastProgressProps) => {
  return (
    <div
      className={twMerge(
        "bg-red-500 w-0 h-1 rounded-sm animate-decreasing",
        className
      )}
      style={{
        animationDuration: `${duration}s`,
      }}
    />
  );
};

export default ToastProgress;

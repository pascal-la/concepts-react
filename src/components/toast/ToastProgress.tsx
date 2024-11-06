type ToastProgressProps = {
  duration: number;
};

const ToastProgress = ({ duration }: ToastProgressProps) => {
  return (
    <div
      className="rounded-sm bg-red-500 w-0 h-1 animate-decreasing"
      style={{
        animationDuration: `${duration}s`,
      }}
    />
  );
};

export default ToastProgress;

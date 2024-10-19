const Toast = ({ message }: { message: string }) => {
  return (
    <span className="p-3 min-w-60 border border-slate-900 bg-orange-300 rounded-md">
      {message}
    </span>
  );
};

export default Toast;

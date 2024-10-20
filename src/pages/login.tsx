import { useToastContext } from "../context/ToastContext";

const Login = () => {
  const { messages, setMessages } = useToastContext();

  // const addToast = (e: React.MouseEvent) => {
  //   const target = e.target as HTMLElement;
  //   setMessages((prev) => [...prev, target.innerHTML]);
  // };

  const addToast = (msg: string) => {
    setMessages((prev) => [...prev, { id: messages.length + 1, message: msg }]);
  };

  const testMessages = [
    ["La famille avant l'oseille", "l'oseille avant les salopes."],
    ["Le monde est à nous", "le monde est à toi et moi."],
    ["Mes sentiments dansent", "la macarena."],
  ];

  return (
    <div>
      <h1>Login</h1>
      <div className="flex flex-col items-start gap-2">
        {testMessages.map((message, i) => (
          <div
            key={i}
            onClick={() => addToast(message[1])}
            className="p-2 border border-slate-800 rounded-md cursor-pointer"
          >
            {message[0]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;

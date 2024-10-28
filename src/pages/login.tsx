import { useToastContext } from "../context/ToastContext";

import capitalize from "../utils/capitalize";

const Login = () => {
  const { messages, setMessages } = useToastContext();

  // const addToast = (e: React.MouseEvent) => {
  //   const target = e.target as HTMLElement;
  //   setMessages((prev) => [...prev, target.innerHTML]);
  // };

  const addToast = (msg: string) => {
    const findIdMax = messages.map((m) => m.id);
    const incrementIdMax = Math.max(...findIdMax) + 1;
    setMessages((prev) => [
      ...prev,
      { id: Infinity ? messages.length + 1 : incrementIdMax, message: msg },
    ]);
  };

  const testMessages = [
    [capitalize("la famille avant l'oseille"), "l'oseille avant les salopes."],
    [capitalize("le monde est à nous"), "le monde est à toi et moi."],
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
            className="p-2 border border-slate-800 rounded-md cursor-pointer transition-all duration-100 ease-in-out hover:bg-slate-200"
          >
            {message[0]}
          </div>
        ))}
      </div>

      <article className="border border-slate-300 rounded-md p-4 ml-6 w-1/2">
        <p className="line-clamp-3">
          Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
          occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex
          occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu
          dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut
          cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure
          quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint
          voluptate sunt elit mollit officia ad enim sit consectetur enim.
        </p>
      </article>

      <div className="mx-auto p-4 @container w-1/2 border">
        <div>
          <div className="xs:block sm:hidden">XS</div>
          <div className="hidden sm:block md:hidden">SM</div>
          <div className="hidden md:block lg:hidden">MD</div>
          <div className="hidden lg:block xl:hidden">LG</div>
          <div className="hidden xl:block 2xl:hidden">XL</div>
          <div className="hidden 2xl:block">2XL</div>
        </div>
        <div>
          <div className="@xs:block @sm:hidden">XS</div>
          <div className="hidden @sm:block @md:hidden">SM</div>
          <div className="hidden @md:block @lg:hidden">MD</div>
          <div className="hidden @lg:block @xl:hidden">LG</div>
          <div className="hidden @xl:block @2xl:hidden">XL</div>
          <div className="hidden @2xl:block">2XL</div>
        </div>
        <div className="text-yellow-400 @sm:text-sky-400 @md:text-red-400 @lg:text-emerald-400 @xl:text-purple-400 @2xl:text-orange-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est
          corporis consectetur explicabo enim laboriosam dicta magnam dolorem a
          dolorum, labore reiciendis officia mollitia architecto magni, numquam
          aliquam. Vel, odio.
        </div>
      </div>

      <div className="flex gap-5 p-8">
        <div className="peer size-12 bg-red-500 rounded-full hover:bg-yellow-400 transition-all duration-200 ease-in-out" />
        <div className="size-12 bg-blue-500 rounded-full peer-hover:bg-green-500 transition-all duration-500 ease-in-out" />
      </div>

      <div className="group/main w-[30vw] mx-auto bg-purple-300">
        <div className="group/hello peer/second h-20 w-full flex flex-col items-center justify-around">
          <p className="group-hover/hello:text-white">Hello World!</p>
          <p>All this code belongs to us</p>
        </div>
        <div className="peer-hover/second:bg-red-400 w-[200px] h-[200px] bg-blue-300"></div>
        <div className="peer-hover/second:bg-yellow-400 group-hover/main:bg-green-200  w-[200px] h-[200px] bg-orange-300"></div>
      </div>
    </div>
  );
};

export default Login;

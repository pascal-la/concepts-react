import { useToastContext } from "../context/ToastContext";
import { ToastVariantType } from "../types/types";
import { capitalize } from "../utils/stringUtils";

import PageTitle from "../components/PageTitle";

const customToasts = [
  {
    text: "Permanent",
    element: (
      <div>
        <span className="text-red-500">I am a custom element</span>
        <div>And I'm staying FOREVER!!!</div>
      </div>
    ),
    isPermanent: true,
    type: "error",
  },
  {
    text: "Custom",
    element: <div className="text-blue-500">I am a custom element</div>,
    duration: 10,
    type: "success",
  },
  {
    text: "Message",
    message: "This is the message only",
    duration: 15,
    type: "danger",
  },
];

const Login = () => {
  const { addToast } = useToastContext();

  // const addToast = (e: React.MouseEvent) => {
  //   const target = e.target as HTMLElement;
  //   setMessages((prev) => [...prev, target.innerHTML]);
  // };

  // const addToast = (msg: string) => {
  // const findIdMax = messages.map((m) => m.id);
  // const incrementIdMax = Math.max(...findIdMax) + 1;
  // setMessages((prev) => [...prev, { id: Date.now(), message: msg }]);
  // };

  const toasts: any = [
    {
      text: capitalize("la famille avant l'oseille"),
      message: "l'oseille avant les salopes.",
      type: "error",
    },
    {
      text: capitalize("le monde est à nous"),
      message: "le monde est à toi et moi.",
      type: "success",
    },
    {
      text: capitalize("le monde est à nous"),
      message: "Mes sentiments dansent",
      type: "danger",
    },
  ];

  return (
    <div className="container p-2 mx-auto mt-3 grid gap-12">
      <PageTitle text="Login" />

      <div className="flex flex-col items-start gap-2">
        {[...toasts, ...customToasts].map((toast, i) => {
          return (
            <div
              key={i}
              onClick={() =>
                addToast({
                  ...toast,
                  id: toast.id || Date.now(),
                })
              }
              className="p-2 border border-slate-800 bg-emerald-200 rounded-md cursor-pointer transition-all duration-100 ease-in-out hover:opacity-60"
            >
              {toast.text}
            </div>
          );
        })}
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

      <div className="mx-auto p-4 @container w-1/2 border bg-yellow-400 sm:bg-sky-400 md:bg-red-400 lg:bg-emerald-400 xl:bg-purple-400 2xl:bg-orange-400">
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
        <div className="p-5 bg-white text-yellow-400 @sm:text-sky-400 @md:text-red-400 @lg:text-emerald-400 @xl:text-purple-400 @2xl:text-orange-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est
          corporis consectetur explicabo enim laboriosam dicta magnam dolorem a
          dolorum, labore reiciendis officia mollitia architecto magni, numquam
          aliquam. Vel, odio.
        </div>
      </div>

      <div className="flex gap-5">
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

import { createElement } from "react";
import { twMerge } from "tailwind-merge";
import { InputType } from "../../types/types";

const Input = ({
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  inputClassName,
}: InputType) => {
  const isTextArea = type === "textarea";

  const input = createElement(isTextArea ? "textarea" : "input", {
    type: !isTextArea ? type : undefined,
    id,
    name,
    value,
    onChange,
    placeholder,
    className: twMerge(
      "block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",
      inputClassName
    ),
  });

  return input;
};

export default Input;

import { twMerge } from "tailwind-merge";

import { InputWithLabelType } from "../../types/types";

import Input from "./Input";

const InputWithLabel = ({
  label,
  labelClassName,
  ...props
}: InputWithLabelType) => {
  return (
    <fieldset className="grid gap-1">
      <label
        htmlFor={props.id}
        className={twMerge(
          "block text-sm/6 font-medium text-gray-900",
          labelClassName
        )}
      >
        {label}
      </label>
      <Input {...props} />
    </fieldset>
  );
};

export default InputWithLabel;

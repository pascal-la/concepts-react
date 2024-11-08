export type ToastType = {
  id: number;
  message: string;
  type?: "success" | "error" | "danger" | undefined;
  duration?: number;
};

export type InputFieldType =
  | "text"
  | "textarea"
  | "email"
  | "password"
  | "search"
  | "number";

export type InputType = {
  type?: InputFieldType;
  id: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  inputClassName?: string;
};

export type InputWithLabelType = InputType & {
  label: string;
  labelClassName?: string;
};

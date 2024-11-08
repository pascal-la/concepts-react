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

export type InputProps = {
  type?: InputFieldType;
  id: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  rows?: number;
  className?: string;
  required?: boolean;
  disabled?: boolean;
};

export type InputWithLabelProps = Omit<InputProps, "className"> & {
  label: string;
  labelClassName?: string;
  inputClassName?: string;
};

import { ReactNode } from "react";

export type ToastVariantType = "success" | "error" | "danger";

export type ToastType = {
  id: number;
  type?: ToastVariantType;
} & (
  | { duration?: number; isPermanent?: never }
  | { duration?: never; isPermanent?: boolean }
) &
  (
    | { message: string; element?: ReactNode }
    | { message?: string; element: ReactNode }
  );

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

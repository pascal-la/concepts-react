export type Toast = {
  id: number;
  message: string;
  type?: "success" | "error" | "danger" | undefined;
  duration?: number;
};

import { toast } from "sonner";

type TToastType = "success" | "error" | "info";

export const displayToast = (
  type: TToastType,
  message: string,
  description?: string,
) => {
  return toast[type](message, { description, position: "top-center" });
};

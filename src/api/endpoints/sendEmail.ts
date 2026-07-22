import { displayToast } from "@/utils/displayToast";
import { api } from "../axiosInstance";

export const sendEmail = async (email: string) => {
  try {
    await api({
      method: "POST",
      url: "/send-email",
      data: { email },
    });
    displayToast("success", "Email uspešno poslat!");
  } catch (error) {
    displayToast("error", "Greška pri slanju email-a!");
    console.error(error);
    throw error;
  }
};

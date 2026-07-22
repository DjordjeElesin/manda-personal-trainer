import { sendEmail } from "@/api/endpoints";
import { checkIsEmailValid } from "@/utils/checkIsEmailValid";
import { useState } from "react";

const BUNDLES_SENT_KEY = "free-bundles-sent";

export const useFreeGuidesSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(
    () => sessionStorage.getItem(BUNDLES_SENT_KEY) === "true",
  );

  const onChangeEmail = (value: string) => {
    if (error) setError("");
    setEmail(value);
  };

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (loading || isSent) return;
    if (!checkIsEmailValid(email)) {
      setError("Unesite validnu email adresu.");
      return;
    }
    setLoading(true);
    try {
      await sendEmail(email);
      setIsSent(true);
      sessionStorage.setItem(BUNDLES_SENT_KEY, "true");
    } catch {
      setError("Slanje nije uspelo. Pokušaj ponovo.");
    } finally {
      setLoading(false);
    }
  };

  return { email, onChangeEmail, onSubmit, loading, error, isSent };
};

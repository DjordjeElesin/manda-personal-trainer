import { z } from "zod";

const emailSchema = z.email();

export const checkIsEmailValid = (email: string): boolean => {
  if (!email.trim()) return false;
  return emailSchema.safeParse(email).success;
};

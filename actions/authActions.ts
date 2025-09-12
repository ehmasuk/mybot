"use server";

import { signIn, signOut } from "@/auth";

export const loginAction = async (data: Record<string, any>) => {
  await signIn("credentials", data);
};
export const logoutAction = async (): Promise<void> => {
  await signOut();
};

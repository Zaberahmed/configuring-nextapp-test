"use server";

import { LoginFormSchema } from "./validation";

export type State = {
  status: "success" | "error";
  message: string;
} | null;

export const authenticate = async (prevState: State, formData: FormData): Promise<State> => {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const validatedFields = LoginFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Invalid form data",
    };
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      status: "success",
      message: `Welcome, user with ${formData.get("email")} as email and ${formData.get("password")} as password!`,
    };
  } catch (error) {
    console.error("Error");
  }
};

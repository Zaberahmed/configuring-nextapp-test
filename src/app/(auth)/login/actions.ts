"use server";

import { convertToSentenceCase } from "@utils";
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
    const res = await fetch(`${process.env.DUMMY_BASEURL}/authaccount/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rawFormData),
    });
    const data = await res.json();

    if (data?.message === "success") {
      return {
        status: "success",
        message: "Successfully logged in!",
      };
    }
    throw new Error(`${convertToSentenceCase(data?.message)}` || "Login failed!");
  } catch (error) {
    console.error("Error message:", error.message);
    return {
      status: "error",
      message: `${error.message}`,
    };
  }
};

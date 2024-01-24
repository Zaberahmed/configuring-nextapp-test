"use server";

import { convertToSentenceCase } from "@utils";
import { unstable_noStore as no_cache } from "next/cache";
import { LoginFormSchema } from "./validation";

export type State = {
  status: "success" | "error" | "validation-error";
  message: string;
  errors?: {
    email?: string[] | undefined;
    password?: string[] | undefined;
  };
} | null;

export const authenticate = async (prevState: State, formData: FormData): Promise<State> => {
  no_cache();
  const { rawFormData, validatedFields } = validateFormData(formData);
  if (!validatedFields.success) {
    return {
      status: "validation-error",
      message: "Invalid form data",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await fetch(`${process.env.DUMMY_BASEURL}/authaccount/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rawFormData),
    });
    const data = await res.json();

    if (data && data?.message === "success") {
      return {
        status: "success",
        message: "Successfully logged in!",
      };
    }
    throw new Error(convertToSentenceCase(data?.message) || "Login failed!");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      return {
        status: "error",
        message: error?.message,
      };
    } else {
      return {
        status: "error",
        message: "An unknown error occurred",
      };
    }
  }
};

const validateFormData = (formData: FormData) => {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const validatedFields = LoginFormSchema.safeParse(rawFormData);

  return { rawFormData, validatedFields };
};

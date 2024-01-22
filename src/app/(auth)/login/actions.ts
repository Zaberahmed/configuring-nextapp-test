"use server";

import { LoginFormSchema } from "./validation";

export type State =
  | {
      status: "success";
      message: string;
    }
  | {
      status: "error";
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;

export const authenticate = async (prevState: State, formData: FormData): Promise<State> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const rawFormData = Object.fromEntries(formData.entries());
    const validatedFields = LoginFormSchema.safeParse(rawFormData);

    // if (!validatedFields.success) {
    //   return {
    //     status: "error",
    //     errors: validatedFields
    //     message: "Missing Fields. Failed to Create Invoice.",
    //   };
    // }
    return {
      status: "success",
      message: `Welcome, user with ${formData.get("email")} as email and ${formData.get("")} as password!`,
    };

    console.log("form data:", formData);
  } catch (error) {}
};

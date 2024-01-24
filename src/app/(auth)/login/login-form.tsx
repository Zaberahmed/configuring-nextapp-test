"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomFlowbiteTheme, FloatingLabel } from "flowbite-react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { State, authenticate } from "./actions";
import SubmitButton from "./submit-button";
import { LoginFormFields, LoginFormSchema } from "./validation";

const LoginForm = () => {
  const [state, formAction] = useFormState<State, FormData>(authenticate, null);

  const { register } = useForm<LoginFormFields>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  if (state?.status === "success") {
    toast.success(state?.message);
  } else if (state?.status === "error" || state?.status === "validation-error") {
    toast.error(state?.message);
  }

  return (
    <main className="space-y-5 ring-1 ring-slate-200 p-4 rounded-md shadow-sm max-w-[300px]">
      <p>Login to get access</p>
      <form
        className="flex max-w-md flex-col gap-4"
        action={formAction}>
        <div className="mb-2 block">
          <FloatingLabel
            aria-live="polite"
            label={"Email"}
            variant={"outlined"}
            type="email"
            id="email"
            className="focus:border-teal-500 peer-focus:text-teal-600 "
            helperText={state?.errors?.email?.[0]}
            theme={customTheme}
            {...register("email")}
          />
        </div>

        <div className="mb-2 block">
          <FloatingLabel
            aria-live="polite"
            label={"Password"}
            variant={"outlined"}
            id="password"
            type="password"
            className="focus:border-teal-500 peer-focus:text-teal-600 "
            helperText={state?.errors?.password?.[0]}
            theme={customTheme}
            {...register("password")}
          />
        </div>

        <SubmitButton />
      </form>
    </main>
  );
};

export default LoginForm;

const customTheme: CustomFlowbiteTheme["floatingLabel"] = {
  helperText: {
    default: "mt-2 text-xs text-red-600 dark:text-gray-400 ",
    success: "mt-2 text-xs text-green-600 dark:text-green-400",
    error: "mt-2 text-xs text-yellow-600 dark:text-red-400",
  },
};

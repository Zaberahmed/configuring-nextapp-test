"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Label, TextInput } from "flowbite-react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { State, authenticate } from "./actions";
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
  } else {
    toast.error(state?.message);
  }

  return (
    <main className="space-y-5 ring-1 ring-slate-200 p-4 rounded-md shadow-sm">
      <p>Login to get access</p>
      <form
        className="flex max-w-md flex-col gap-4"
        action={formAction}>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Email"
            />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@flowbite.com"
            {...register("email")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Password"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            {...register("password")}
          />
        </div>

        <Button type="submit">Submit</Button>
        {/*Need to disable button if values are not filled or status pending*/}
      </form>
    </main>
  );
};

export default LoginForm;

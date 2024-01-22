import zod from "zod";

const passwordValidationRegex = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

export const LoginFormSchema = zod.object({
  email: zod.string().email({ message: "Please enter a valid email address" }),
  password: zod.string().regex(new RegExp(passwordValidationRegex), {
    message:
      "Password must be at least 8 characters long and include at least one letter, one digit, and one special character (@$!%*?&).",
  }),
});

export type LoginFormFields = zod.infer<typeof LoginFormSchema>;

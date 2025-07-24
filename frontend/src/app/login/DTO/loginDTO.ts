import z from "zod";

export const LoginDTO = z.object({
  email: z.string().nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .nonempty("Password is required"),
});

export type LoginSchemaDTO = z.infer<typeof LoginDTO>;

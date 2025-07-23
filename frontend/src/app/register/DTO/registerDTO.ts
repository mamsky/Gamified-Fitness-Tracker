import z from "zod";

export const registerDTO = z.object({
  name: z.string().nonempty("Full-Name is required"),
  email: z.string().nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .nonempty("Password is required"),
});

export type registerSchemaDTO = z.infer<typeof registerDTO>;

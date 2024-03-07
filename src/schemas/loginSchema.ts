import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: "email é obrigatório" }),
  password: z.string().min(1, { message: "senha é obrigatória" }),
})

export type TLoginData = z.infer<typeof loginFormSchema>;
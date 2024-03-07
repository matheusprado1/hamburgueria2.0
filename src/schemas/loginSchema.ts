import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: "E-mail é obrigatório" }),
  password: z.string().min(1, { message: "Senha é obrigatória" }),
})

export type TLoginData = z.infer<typeof loginFormSchema>;
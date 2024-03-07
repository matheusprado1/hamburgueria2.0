import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(1, { message: "nome é obrigatório" }),
  email: z.string().email({ message: "email inválido!" }).min(1, { message: "E-mail é obrigatório" }),
  password: z.string().min(1, { message: "senha é obrigatória" }),
  confirmPassword: z.string().min(1, { message: "confirme sua senha" }),
})
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  })

export type TRegisterData = z.infer<typeof registerFormSchema>;
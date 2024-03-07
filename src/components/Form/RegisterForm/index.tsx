import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerFormSchema, TRegisterData } from '../../../schemas/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../../services/api';
import { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';


const RegisterForm = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, } = useForm<TRegisterData>({
    resolver: zodResolver(registerFormSchema)
  });



  const submit: SubmitHandler<TRegisterData> = async (data) => {
    try {
      const dataToSend = { ...data, confirmPassword: undefined }
      const response = await api.post("/users", dataToSend);

      console.log(response)
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error)

      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          toast.error(error.response.data);
        } else {
          toast.error("Ocorreu um erro ao tentar se registrar.");
        }
      } else {
        toast.error("Ocorreu um erro ao tentar se registrar.");
      }
    }
  };



  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input id='nome' {...register("name")} error={errors.name?.message} />
      <Input id='email' {...register("email")} error={errors.email?.message} />
      <Input id='senha' type="password" {...register("password")} error={errors.password?.message} />
      <Input id='confirmar senha' type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  )
};

export default RegisterForm;

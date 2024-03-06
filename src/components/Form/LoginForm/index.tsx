import { SubmitHandler, useForm } from 'react-hook-form';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { TLoginData } from '../../../schemas/loginSchema';
import { loginFormSchema } from '../../../schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../../services/api';
import { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../providers/AuthContext';

const LoginForm = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm<TLoginData>({
    resolver: zodResolver(loginFormSchema)
  });

  const { setUser } = useContext(UserContext);
  const { setToken } = useAuth();

  const navigate = useNavigate();

  const submit: SubmitHandler<TLoginData> = async (data) => {
    try {

      const response = await api.post("/login", data);

      if (response.data.user && response.data.accessToken) {
        setToken(response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken)
        setUser(response.data.user);
        navigate("/shop");
      }

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input id='email' {...register("email")} />
      <Input id='senha' {...register("password")} />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  )
};

export default LoginForm;

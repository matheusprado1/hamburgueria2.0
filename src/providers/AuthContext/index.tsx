import { createContext, useContext, useState } from 'react';

// Definindo o tipo para o token
type Token = string | null;

// Definindo o tipo para o valor do contexto de autenticação
interface AuthContextValue {
  token: Token;
  setToken: React.Dispatch<React.SetStateAction<Token>>;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

// Criando o contexto de autenticação
export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// Provedor de Contexto de Autenticação
export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [token, setToken] = useState<Token>(localStorage.getItem('accessToken') || null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

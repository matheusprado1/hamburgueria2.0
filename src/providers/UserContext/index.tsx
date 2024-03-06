import React, { createContext, useState } from "react";

export interface IUser {
  id: number,
  name: string,
  email: string,
  password: string
}

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  user: IUser | null,
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>,
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null)

  return (
    <UserContext.Provider
      value={{ user, setUser }}
    >
      {children}
    </UserContext.Provider>
  )
}
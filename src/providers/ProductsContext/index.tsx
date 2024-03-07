import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { AuthContext } from "../AuthContext";
import { AxiosError } from "axios";


export interface IProduct {
  id: number,
  name: string,
  category: string,
  price: number,
  img: string
}

interface IProductListProviderProps {
  children: React.ReactNode;
}

interface IProductListContext {
  productList: IProduct[]
}

export const ProductContext = createContext({} as IProductListContext);

export const ProductProvider = ({ children }: IProductListProviderProps) => {
  const [productList, setProductList] = useState<IProduct[]>([]);

  const { token } = useContext(AuthContext) || { accessToken: '' };;

  useEffect(() => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const getProducts = async () => {
        try {
          const response = await api.get("/products");
          setProductList(response.data);
        } catch (error) {
          const currentError = error as AxiosError<string>
          console.log(currentError);
        }
      };
      getProducts();
    }
  }, [token]); // Adicionando o token como dependência do useEffect

  // useEffect(() => {
  //   console.log(currentProduct);
  // }, [currentProduct]);

  return (
    <ProductContext.Provider
      value={{ productList }}
    >
      {children}
    </ProductContext.Provider>
  )
}

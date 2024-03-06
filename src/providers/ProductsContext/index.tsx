import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { AuthContext } from "../AuthContext";


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
  productList: IProduct[],
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
          console.log(error);
        }
      };
      getProducts();
    }
  }, [token]); // Adicionando o token como dependência do useEffect


  return (
    <ProductContext.Provider
      value={{ productList }}
    >
      {children}
    </ProductContext.Provider>
  )
}

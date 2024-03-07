import { createContext, useState } from "react";
import { IProduct } from "../ProductsContext";

interface IShoppingCartProviderProps {
  children: React.ReactNode;
}

interface IShoopingCartContext {
  shoppingCart: IProduct[];
  addProductToCart: (product: IProduct) => void;
  // removeProductFromCart: (product: IProduct) => void;
}

export const ShoppingCartContext = createContext({} as IShoopingCartContext);

export const ShoppingCartProvider = ({ children }: IShoppingCartProviderProps) => {
  const [shoppingCart, setShoppingCart] = useState<IProduct[]>([]);

  const addProductToCart = (product: IProduct) => {
    if (!shoppingCart.some((cartProduct) => cartProduct.id === product.id)) {
      setShoppingCart([...shoppingCart, product])
    }
  }

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, addProductToCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
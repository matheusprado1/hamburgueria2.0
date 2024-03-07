import { createContext, useState } from "react";
import { IProduct } from "../ProductsContext";

interface IShoppingCartProviderProps {
  children: React.ReactNode;
}

interface IShoopingCartContext {
  shoppingCart: IProduct[];
  addProductToCart: (product: IProduct) => void;
  removeProductFromCart: (product: IProduct) => void;
  removeAllProductsFromCart: () => void;
}

export const ShoppingCartContext = createContext({} as IShoopingCartContext);

export const ShoppingCartProvider = ({ children }: IShoppingCartProviderProps) => {
  const [shoppingCart, setShoppingCart] = useState<IProduct[]>([]);

  const addProductToCart = (product: IProduct) => {
    setShoppingCart([...shoppingCart, product])
  }

  const removeProductFromCart = (product: IProduct) => {
    const productIndex = shoppingCart.findIndex(cartProduct => cartProduct.id === product.id);
    if (productIndex !== -1) {
      const updatedCart = [...shoppingCart];
      updatedCart.splice(productIndex, 1);
      setShoppingCart(updatedCart);
    }
  }

  const removeAllProductsFromCart = () => {
    setShoppingCart([]);
  }

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, addProductToCart, removeProductFromCart, removeAllProductsFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
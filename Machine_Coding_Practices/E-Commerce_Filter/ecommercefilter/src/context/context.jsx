import { createContext, useContext, useEffect, useReducer } from "react";
import { shoppingCartReducer } from "./reducer";

const ShoppingCart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, { products: [] });

  const fetchProducts = async () => {
    const res = await fetch(`/products.json`);
    const data = await res.json();
    if (data && data.products) {
      dispatch({ type: "FETCH_PRODUCTS", payload: data.products });
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ShoppingCart.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCart.Provider>
  );
};

export const ShoppingCartState = () => {
  return useContext(ShoppingCart);
};

export default Context;

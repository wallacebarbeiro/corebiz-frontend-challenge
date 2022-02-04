import React, { Dispatch, SetStateAction } from 'react';

interface ContextTypes {
  cart: number;
  setCart: React.Dispatch<React.SetStateAction<number>>;
}

const CartContext = React.createContext<Partial<ContextTypes>>({});

export function useCart() {
  const context = React.useContext(CartContext);
  const { cart, setCart } = context;
  return {
    cart,
    setCart
  };
}

const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = React.useState<number>(0);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

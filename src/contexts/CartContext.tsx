import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "@/hooks/use-toast";

export interface CartItem {
  id: number;
  name: string;
  price: number; // valor original en USD
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  formatoCLP: (valor: number) => string;
  tasaCambio: number | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [tasaCambio, setTasaCambio] = useState<number | null>(null);

  // 🌐 Obtener tasa actual desde exchangerate.host
  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=USD&symbols=CLP")
      .then((res) => res.json())
      .then((data) => setTasaCambio(data.rates.CLP))
      .catch(() => {
        toast({
          title: "Error al obtener tasa de cambio",
          description: "Usando tasa por defecto de 950 CLP/USD",
        });
        setTasaCambio(950); // valor de respaldo
      });
  }, []);

  // 🪙 Formateador de moneda chilena
  const formatoCLP = (valor: number) =>
    new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    }).format(valor);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        toast({
          title: "Producto actualizado",
          description: `${item.name} cantidad aumentada en el carrito`,
        });
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      toast({
        title: "Producto agregado",
        description: `${item.name} añadido al carrito`,
      });

      // 💱 Convertir a CLP usando la tasa actual (o respaldo)
      const tasa = tasaCambio ?? 950;
      const precioEnCLP = item.price * tasa;

      return [...prevItems, { ...item, price: precioEnCLP, quantity: 1 }];
    });
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast({
      title: "Producto eliminado",
      description: "Producto removido del carrito",
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Carrito limpiado",
      description: "Todos los productos han sido eliminados",
    });
  };

  // 🧮 Totales en CLP
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        formatoCLP,
        tasaCambio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

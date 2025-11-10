import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: number; // en USD
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ id, image, name, price, category, isNew }: ProductCardProps) => {
  const { addItem, tasaCambio, formatoCLP } = useCart(); // 👈 obtenemos tasa y formateador CLP

  const handleAddToCart = () => {
    addItem({ id, name, price, image });
  };

  // 💱 Convertir a CLP usando la tasa actual o valor por defecto (950)
  const tasa = tasaCambio ?? 950;
  const precioEnCLP = price * tasa;
  const precioFormateado = formatoCLP(precioEnCLP);

  return (
    <Card className="group overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-medium bg-gradient-card backdrop-blur-sm">
      <CardContent className="p-0 relative">
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-secondary text-secondary-foreground font-semibold shadow-sm">
              Nuevo
            </Badge>
          )}
          <Badge variant="outline" className="bg-background/90 backdrop-blur-md border-border/50">
            {category}
          </Badge>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-accent hover:scale-110 transition-all"
        >
          <Heart className="h-5 w-5" />
        </Button>

        <div className="aspect-square overflow-hidden bg-muted/30">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-4 p-5">
        <div className="w-full">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-2xl font-bold text-primary mt-2 font-display">
            {precioFormateado} {/* 👈 ahora en pesos chilenos */}
          </p>
        </div>

        <Button
          variant="default"
          className="w-full group/btn"
          size="lg"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-5 w-5 mr-2 group-hover/btn:scale-110 transition-transform" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

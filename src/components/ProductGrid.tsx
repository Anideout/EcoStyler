import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import monsteraImg from "@/assets/monstera.jpg";
import succulentImg from "@/assets/succulent.jpg";
import snakePlantImg from "@/assets/snake-plant.jpg";
import pothosImg from "@/assets/pothos.jpg";
import fernImg from "@/assets/fern.jpg";
import cactusImg from "@/assets/cactus.jpg";

const products = [
  {
    id: 1,
    name: "Monstera Colorida",
    price: 45.99,
    category: "Interior",
    image: monsteraImg,
    isNew: true,
    isOnSale: false,
  },
  {
    id: 2,
    name: "Suculenta Vibrante",
    price: 24.99,
    category: "Suculentas",
    image: succulentImg,
    isNew: true,
    isOnSale: true,
  },
  {
    id: 3,
    name: "Sansevieria Brillante",
    price: 32.99,
    category: "Interior",
    image: snakePlantImg,
    isNew: false,
    isOnSale: false,
  },
  {
    id: 4,
    name: "Pothos Luminoso",
    price: 28.99,
    category: "Colgantes",
    image: pothosImg,
    isNew: false,
    isOnSale: true,
  },
  {
    id: 5,
    name: "Helecho Radiante",
    price: 36.99,
    category: "Interior",
    image: fernImg,
    isNew: true,
    isOnSale: false,
  },
  {
    id: 6,
    name: "Cactus Alegre",
    price: 19.99,
    category: "Suculentas",
    image: cactusImg,
    isNew: false,
    isOnSale: true,
  },
];

interface ProductGridProps {
  searchQuery?: string;
  showOnlyOffers?: boolean;
}

const ProductGrid = ({ searchQuery, showOnlyOffers }: ProductGridProps) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    let result = products;

    if (showOnlyOffers) {
      result = result.filter((p) => p.isOnSale);
      setActiveFilter("offers");
    } else if (searchQuery) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (activeFilter !== "all") {
      result = result.filter((p) => p.category === activeFilter);
    }

    setFilteredProducts(result);
  }, [searchQuery, showOnlyOffers, activeFilter]);

  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))];

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Nuestra Colección
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Descubre plantas seleccionadas para tu estilo de vida moderno
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
            >
              {category === "all" ? "Todas" : category}
            </Button>
          ))}
          <Button
            variant={activeFilter === "offers" ? "default" : "outline"}
            onClick={() => setActiveFilter(activeFilter === "offers" ? "all" : "offers")}
          >
            Ofertas
          </Button>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No se encontraron productos
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                category={product.category}
                isNew={product.isNew}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;

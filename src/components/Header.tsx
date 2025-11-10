import { useState } from "react";
import { ShoppingCart, Leaf, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import CartDrawer from "./CartDrawer";
import SearchDialog from "./SearchDialog";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const { totalItems } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = (query: string) => {
    if (onSearch) {
      onSearch(query);
      const productsSection = document.getElementById("productos");
      productsSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Leaf className="h-9 w-9 text-primary drop-shadow-sm" />
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              EcoStyle
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Inicio
            </a>
            <a 
              href="#productos" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Productos
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre Nosotros
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} onSearch={handleSearch} />
    </>
  );
};

export default Header;

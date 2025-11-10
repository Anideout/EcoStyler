import { Leaf, Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Leaf className="h-8 w-8 text-primary drop-shadow-sm" />
              <span className="text-2xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
                EcoStyle
              </span>
            </div>
            <p className="text-muted-foreground font-light">
              Estilo natural y diseño moderno para tu espacio desde 2024.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Tienda</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Todas las Plantas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Plantas de Interior</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Suculentas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Ofertas</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Ayuda</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Guía de Cuidados</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Envíos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Devoluciones</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contacto</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Trabaja con Nosotros</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground font-light">
          <p>&copy; 2024 EcoStyle. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-plants.jpg";
import monsteraImg from "@/assets/monstera.jpg";
import fernImg from "@/assets/fern.jpg";
import Autoplay from "embla-carousel-autoplay";

interface HeroProps {
  onShowOffers?: () => void;
}

const slides = [
  {
    image: heroImage,
    title: "Estilo Natural, Diseño Moderno",
    description: "Transforma tu espacio con plantas que combinan belleza natural y estética contemporánea.",
  },
  {
    image: monsteraImg,
    title: "Vida Verde en Casa",
    description: "Crea ambientes frescos y modernos con nuestra selección curada de plantas de interior.",
  },
  {
    image: fernImg,
    title: "Simplicidad Natural",
    description: "Belleza sin esfuerzo. Plantas que se adaptan a tu estilo de vida.",
  },
];

const Hero = ({ onShowOffers }: HeroProps) => {
  const handleExploreClick = () => {
    document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOffersClick = () => {
    if (onShowOffers) {
      onShowOffers();
    }
    document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
      <Carousel
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-hero">
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-60" />
                </div>

                <div className="container relative z-10 text-center py-20">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border-2 border-primary/20 backdrop-blur-sm mb-8 animate-fade-in">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold tracking-wide text-foreground">
                      Nuevas colecciones cada semana
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in font-light leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
                    <Button variant="hero" size="lg" onClick={handleExploreClick}>
                      Explorar Catálogo
                    </Button>
                    <Button variant="outline" size="lg" onClick={handleOffersClick}>
                      Ver Ofertas
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default Hero;

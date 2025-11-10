import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showOffers, setShowOffers] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowOffers(false);
  };

  const handleShowOffers = () => {
    setShowOffers(true);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} />
      <main className="flex-1">
        <Hero onShowOffers={handleShowOffers} />
        <ProductGrid searchQuery={searchQuery} showOnlyOffers={showOffers} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

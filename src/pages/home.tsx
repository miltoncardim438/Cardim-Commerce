import { useContext, useState } from "react";
import { Banner } from "../components/Banner";
import CategoryFilter from "../components/CategoryFilter";
import type { Category } from "../types/category";
import { ProductCard } from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const { searchTerm } = useContext(CartContext);

  const [activeCategory, setActiveCategory] = useState<Category>('Todos');

  return (
    <>
      <Banner />
      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <ProductCard activeCategory={activeCategory} />
    </>
  )
}

export default Home;
import type { IProduct } from "../../types/product"
import camisaTShirt from "../../assets/image-card-shirt.jpg"
import camisaSocial from "../../assets/image-card-shirt2.jpg"
import tenis from "../../assets/image-card-tenis1.jpg"
import sapato from "../../assets/image-card-tenis2.jpg"
import chapeu from "../../assets/image-card-cap.jpg"
import calca from "../../assets/image-card-pants.jpg"
import pulseira from "../../assets/image-card-bracelet.jpg"
import { BaseCard } from "./BaseCard"
import type { Category } from "../../types/category"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProdutosList: IProduct[] = [
  {
    id: 1,
    title: "T-Shirt Confortável",
    price: 60.00,
    description: "T-shirt de algodão macio, perfeita para o dia a dia.",
    category: "Camisetas",
    image: camisaTShirt,
  },
  {
    id: 2,
    title: "Tênis Esportivo",
    price: 150.00,
    description: "Tênis leve e respirável, ideal para atividades físicas.",
    category: "Sapatos",
    image: tenis,
  },
  {
    id: 3,
    title: "Boné Estiloso",
    price: 40.00,
    description: "Boné com design moderno, perfeito para complementar seu look.",
    category: "Bonés",
    image: chapeu,
  },
  {
    id: 4,
    title: "Camiseta Social Azul",
    price: 60.00,
    description: "Camiseta com design casual, elegande e versátil para qualquer ocasião",
    category: "Camisetas",
    image: camisaSocial,
  },
  {
    id: 5,
    title: "Calça Moletom Confortável",
    price: 80.00,
    description: "Calça de moletom macia, perfeita para momentos de lazer e conforto.",
    category: "Calças",
    image: calca,
  },
  {
    id: 6,
    title: "Tênis Casual",
    price: 120.00,
    description: "Tênis casual com design clássico, ideal para o dia a dia.",
    category: "Sapatos",
    image: sapato,
  },
  {
    id: 7,
    title: "Pulseira Estilosa",
    price: 25.00,
    description: "Pulseira de ouro com detalhes brilhantes, perfeita para complementar seu visual.",
    category: "Acessórios",
    image: pulseira,
  }
]

export const ProductCard = ({ activeCategory }: { activeCategory: Category; }) => {
  const { searchTerm } = useContext(CartContext);
  
  const filteredProducts = ProdutosList.filter(product => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <BaseCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-400 py-10 w-full col-span-full">
          <p>Nenhum produto encontrado.</p>
        </div>
      )}
    </section>
  )
}
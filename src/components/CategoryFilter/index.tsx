import { useState } from "react";
import { categories, type Category } from "../../types/category";

interface CategoryFilterProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const CategoryFilter = ({ activeCategory, setActiveCategory }: CategoryFilterProps) => {

  return (
    <section className="w-full h-[50px] mt-3 flex items-center justify-center gap-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border-2 cursor-pointer ${
            activeCategory === category 
              ? 'bg-purple-600 border-purple-600 text-white'
              :'bg-transparent border-gray-700 text-gray-400 hover:border-purple-400'
          }`}
        >
          {category}
        </button>
      ))}
    </section>
  )
}

export default CategoryFilter;
import React, { useState } from 'react';
import product1 from '../Assets/explore1.png';
import product2 from '../Assets/explore2.png';
import product3 from '../Assets/explore3.png';
import product4 from '../Assets/explore4.png';
import product5 from '../Assets/explore5.png';
import product6 from '../Assets/explore6.png';

const categories = ['Cake', 'Muffins', 'Croissant', 'Bread', 'Tart', 'Favorite'];

const productsData = [
  { id: 1, image: product1, category: 'Cake' },
  { id: 2, image: product2, category: 'Cake' },
  { id: 3, image: product3, category: 'Cake' },
  { id: 4, image: product4, category: 'Cake' },
  { id: 5, image: product5, category: 'Cake' },
  { id: 6, image: product6, category: 'Cake' },
];

const CategoryNav = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex justify-center space-x-6 border-b mb-8">
      {categories.map((category) => (
        <button
          key={category}
          className={`text-lg pb-2 ${
            selectedCategory === category
              ? 'text-black border-b-4 border-red-400 font-bold'
              : 'text-gray-600'
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-20">
      {products.map((product) => (
        <div
          key={product.id}
          className="border-4 border-transparent hover:border-orange-800 rounded-lg transition duration-300 ease-in-out"
        >
          <img src={product.image} alt="Product" className="w-full h-[300px] object-cover rounded-lg" />
        </div>
      ))}
    </div>
  );
};

const ExploreMore = () => {
  const [selectedCategory, setSelectedCategory] = useState('Cake');
  const filteredProducts = productsData.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-5xl font-black text-center mb-12 font-sansita">
        Explore More
      </h1>
      
      <CategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default ExploreMore;

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [limit] = useState(9);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          count === 0 ? 0 : count * limit
        }&select=title,price,images`
      );
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Product Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-green-400 font-bold">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        {loading ? (
          <div className="text-center mt-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-100"></div>
          </div>
        ) : (
          <button
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className="mt-8 mx-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center"
          >
            Load More
            <ChevronDown className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default LoadMore;
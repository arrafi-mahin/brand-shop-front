import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const ProductByCategory = () => {
    const products = useLoaderData();
    return (
        <div className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <h2 className="text-center text-blue-950 font-bold text-5xl mb-16">Products</h2>
          
          {Array.isArray(products) && products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-red-600 text-center text-xl">
              No products available for this category.
            </p>
          )}
        </div>
      </div>

    );
};

export default ProductByCategory;
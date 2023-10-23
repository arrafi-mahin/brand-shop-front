
import Category from "../Category/Category";
import { useLoaderData } from "react-router-dom";

const Categories = () => {

    const categories = useLoaderData();

    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4">
                <h2 className="text-center text-blue-950 font-bold text-5xl mb-16">Our Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        categories.map(category => <Category key={category._id} category={category}></Category>)
                    }
                </div> 
            </div> 
        </div>
    );
};

export default Categories;
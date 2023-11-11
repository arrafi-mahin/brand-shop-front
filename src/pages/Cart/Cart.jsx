import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";



const Cart = () => {
    const { user } = useContext(AuthContext);
    const uID = user?.uid;
    //    console.log(uID)
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/cart/${uID}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="overflow-x-auto min-h-screen">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <th>Brand</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => <tr key={product._id}>
                                    <th>
                                        <label>{(index + 1)}</label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.productData.productImage} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product.productData.productName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.productData.productType}</td>
                                    <td>${product.productData.productPrice}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs"><Link to={`/product/${product.productData._id}`}>Details</Link></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
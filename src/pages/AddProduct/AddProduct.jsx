import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

const AddProduct = () => {
    const [category, setCategory] = useState();
    useEffect(() => {
        console.log('hello')
        fetch(`${import.meta.env.VITE_BASE_URL}/category`).then(res => res.json()).then(res => setCategory(res));
    }, [])
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;

        const productImage = form.productImage.value;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const productType = form.productType.value;
        const productPrice = form.productPrice.value;
        const shortDes = form.shortDes.value;
        const rating = form.rating.value;

        const newProduct = { productImage, productName, brandName, productType, productPrice, shortDes, rating }
        // send data to the server
        fetch(`${import.meta.env.VITE_BASE_URL}/product`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4">
                <h2 className="text-5xl font-extrabold mb-20 text-center text-blue-950">Add a Product</h2>
                <form id='productForm' onSubmit={handleAddProduct}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <input type="text" name="productImage" className="input input-bordered w-full bg-white" />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name="productName" className="input input-bordered w-full bg-white" />
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <select className="select select-bordered w-full bg-white" name="brandName">
                                {category?.map(item => <option key={item._id} value={item?._id}>{item?.name}</option>)}
                            </select>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Product Type</span>
                            </label>
                            <input type="text" name="productType" className="input input-bordered w-full bg-white" />
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input type="text" name="productPrice" className="input input-bordered w-full bg-white" />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" name="shortDes" className="input input-bordered w-full bg-white" />
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" className="input input-bordered w-full bg-white" />
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-block bg-blue-950" />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;
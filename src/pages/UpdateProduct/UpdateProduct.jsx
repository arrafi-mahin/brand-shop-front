import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, productImage, productName, brandName,  productType, productPrice, shortDes, rating } = product;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const productImage = form.productImage.value;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const productType = form.productType.value;
        const productPrice = form.productPrice.value;
        const shortDes = form.shortDes.value;
        const rating = form.rating.value;

        const updatedProduct = { productImage, productName, brandName,  productType, productPrice, shortDes, rating }

        console.log(updatedProduct);

        // send data to the server
        fetch(`https://fashion-and-apparel-server-9j4ezqag8-hafizas-projects.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                    })
            }
        })
    }
    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4">
                <h2 className="text-5xl font-extrabold mb-20 text-center text-blue-950">Update - {productName}</h2>
                    <form onSubmit={handleUpdateProduct}>
                        {/* form name and quantity row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input type="text" name="productImage" defaultValue={productImage} className="input input-bordered w-full bg-white" />
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" name="productName" defaultValue={productName} className="input input-bordered w-full bg-white" />
                            </div>
                        </div>
                        {/* form supplier row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <select className="select select-bordered w-full bg-white" name="brandName">
                                    <option>Levi's</option>
                                    <option>H&M</option>
                                    <option>ZARA</option>
                                    <option>Gucci</option>
                                    <option>Adidas</option>
                                    <option>Nike</option>
                                </select>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Product Type</span>
                                </label>
                                <input type="text" name="productType" defaultValue={productType} className="input input-bordered w-full bg-white" />
                            </div>
                        </div>
                        {/* form category and details row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Product Price</span>
                                </label>
                                <input type="text" name="productPrice" defaultValue={productPrice} className="input input-bordered w-full bg-white" />
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input type="text" name="shortDes" defaultValue={shortDes} className="input input-bordered w-full bg-white" />
                            </div>
                        </div>
                        {/* form Photo url row */}
                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" name="rating" defaultValue={rating} className="input input-bordered w-full bg-white" />
                            </div>
                        </div>
                        <input type="submit" value="Update Product" className="btn btn-block bg-blue-950" />

                    </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
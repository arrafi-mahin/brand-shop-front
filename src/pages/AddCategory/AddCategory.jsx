import Swal from 'sweetalert2'

const AddCategory = () => {
    const handleAddCategory = event => {
        event.preventDefault();

        const form = event.target;

        const categoryImage = form.categoryImage.value;
        const categoryName = form.categoryName.value;

        const newCategory = { categoryImage, categoryName }

        console.log(newCategory);

        // send data to the server
        fetch(`${import.meta.env.VITE_BASE_URL}/category`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCategory)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Category Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                    })
            }
        })
    }
    return (
        <div className="py-24 bg-white">
            <div className="max-w-[580px] mx-auto px-4">
                <h2 className="text-5xl font-extrabold mb-20 text-center text-blue-950">Add a Category</h2>
                    <form onSubmit={handleAddCategory}>
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text">Category Image</span>
                            </label>
                            <input type="text" name="categoryImage" className="input input-bordered w-full bg-white" />
                        </div>
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <input type="text" name="categoryName" className="input input-bordered w-full bg-white" />
                        </div>
                        <input type="submit" value="Add Category" className="btn btn-block bg-blue-950" />

                    </form>
            </div>
        </div>
    );
};

export default AddCategory;
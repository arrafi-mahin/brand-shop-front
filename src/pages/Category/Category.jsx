import { Link } from "react-router-dom";

const Category = ({category}) => {
    const { _id, image, name } = category;


    return (
        <Link to={`/category/${_id}`}>
            <div className="card bg-blue-50" data-aos="fade-up">
                <img className="rounded-t-lg m-5 max-h-40" src={image} alt="Image" />
                <div className="card-body bg-blue-950 rounded-b-lg">
                    
                    <h2 className="card-title text-xl font-semibold justify-center">{name}</h2>

                </div>
            </div>
        </Link>
    );
};

export default Category;
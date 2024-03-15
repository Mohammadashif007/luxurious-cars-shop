import { Link } from "react-router-dom";

const Car = ({car}) => {

    const {image, model, price_usd, id} = car;
    return (
        <div className="border-2">
            <img width="300px" className="h-[200px]" src={image} alt="" />
            <p className="font-bold text-2xl">{model}</p>
            <p className="font-bold">{price_usd}</p>
            <Link to={`/details/${id}`}><button className="btn btn-success">Show Details</button></Link>
        </div>
    );
};

export default Car;
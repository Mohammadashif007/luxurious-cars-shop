import { useLoaderData, useParams } from "react-router-dom";
import { saveToLocalStorage } from "../../utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const ids = useParams();
    const cars = useLoaderData();
    const {id} = ids
    
    
    if (!Array.isArray(cars)) {
        return <div>Error: Cars data is not available</div>;
    }

    const carDetails =
         cars.find((x) => x.id === +id) ;

    const {
        brand,
        model,
        country,
        top_speed,
        acceleration_0_60,
        image,
        engine,
        price_usd,
    } = carDetails;

    const addToCart = id => {
        
        saveToLocalStorage(id);
        toast('You are fucking poor!')

    }

    return (
        <div className="flex flex-col items-center">
            <img src={image} alt="" />
            <div className="flex justify-between gap-5">
                <div>
                    <p className="font-bold ">{model}</p>
                    <p className="font-bold ">{brand}</p>
                    <p className="font-bold ">{country}</p>
                    <p className="font-bold text-[20px]">{price_usd}</p>
                </div>
                <div>
                    <p>{top_speed}</p>
                    <p>{acceleration_0_60}</p>
                    <p>{engine.type}</p>
                    <div className="flex gap-5">
                        <p>{engine.displacement}</p>
                        <p>{engine.power_output}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => addToCart(id)} className="btn btn-warning">Buy Now</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Details;

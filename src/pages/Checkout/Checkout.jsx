import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../utility/localStorage";

const Checkout = () => {
    const [cars, setCars] = useState([]);

    const allCarsData = useLoaderData();
    // console.log(allCarsData);

    useEffect(() => {
        const storedId = getStoredCart();

        console.log(storedId);
        const storedCars = allCarsData.filter((car) =>
            storedId.includes("" + car.id)
        );
        setCars(storedCars);
    }, [allCarsData]);

    console.log(cars);

    return (
        <div className="w-4/5 mx-auto">
            <div>
                {cars.map((car) => (
                    <div
                        key={car.id}
                        className="flex justify-between items-center border my-3 p-2 rounded-2xl"
                    >
                        <div className="flex gap-5 items-center">
                            <img width="160px" src={car.image} alt="" />
                            <div>
                                <p>{car.brand}</p>
                                <p>{car.model}</p>
                                <p>{car.country}</p>
                                <p>{car.price_usd}</p>
                            </div>
                        </div>
                        <button className="btn btn-danger">Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Checkout;

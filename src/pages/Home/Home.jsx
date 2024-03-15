import { useEffect, useState } from "react";
import Car from "../Car/Car";

const Home = () => {
    const [cars, setCars] = useState([]);

    const url = "data.json";

    const loadData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setCars(data);
    };

    useEffect(() => {
        loadData();
    }, []);
    return <div className="w-4/5 mx-auto">
        <div className="grid lg:grid-cols-3 gap-3">
            {
                cars.map(car => <Car key={car.id} car={car}></Car>)
            }
        </div>
    </div>;
};

export default Home;

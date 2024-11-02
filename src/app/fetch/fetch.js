import React, {useState, useEffect, Suspense} from 'react';
import styles from "@/app/cars.module.css";

const Fetch = () => {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {

        fetchCars().catch(error => {
            console.error('Fetch error:', error);
            setIsLoading(false)
            setError(error.massage)
        })
    }, []);

    const fetchCars= async () => {
        const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
        // const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2016?format=json');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json()
        const responseDataArray = responseData.Results

        console.log(responseDataArray)
        setAllCars(responseDataArray)
    }


    return (
        <div>
            {/*<h2>Fetched Data:</h2>*/}
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
        </div>
    );
};

export default Fetch
'use client'

import React,{useState,useEffect} from "react";

function FetchCars(){

    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json() || [];

            const allCharacters = []
            console.log(responseData)
            // for (const people of responseData.results) {

                // console.log(people)
                // allCharacters.push({
                    // name: people.name,
                    // name: responseData[key].name,
                    // description: responseData[key].description,
                    // price: responseData[key].price,
                // })
            // }
            console.log(allCharacters)
            setCharacters(allCharacters)
            // return allCharacters
        }

        // const fetchData = async () => {
        //     try {
        //         const response = await fetch('http https://sw-api.starnavi.io/people/fgafdza');
        //
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //
        //         const data = await response.json();
        //         console.log('Fetched data:', data); // Log the fetched data here
        //     } catch (error) {
        //         console.error('Fetch error:', error);
        //     }
        // };
        //
        // fetchData();

        fetchCharacters().catch(error => {
            console.error('Fetch error:', error);
            setIsLoading(false)
            setHttpError(error.massage)
        })
    }, []);

    return(
        <React.Fragment>
            ky ky
        </React.Fragment>
    )
}
export default FetchCars
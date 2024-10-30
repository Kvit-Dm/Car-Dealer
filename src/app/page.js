'use client'

import React, {useEffect, useState} from "react";
import styles from "./cars.module.css";
export default function Home() {

    const [allCars, setAllCars] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
            // const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2016?format=json');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json()
            const responseData2 = responseData.Results

            // const responseData = await response.json().Results || [];
                console.log(responseData2)

            // const allCharacters = []

            // for (const people of responseData.results) {

            // console.log(people)
            // allCharacters.push({
            // name: people.name,
            // name: responseData[key].name,
            // description: responseData[key].description,
            // price: responseData[key].price,
            // })
            // }
            setAllCars(responseData2)

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


    return (
        <div className={styles["main-grid"]}>
            <div className={styles["side-bar"]}>Side bar</div>
            <div className={styles["header"]}>Header</div>
            <div className={styles["main-block"]}>
                {allCars.map((obj) =>{
                    return(
                        <div className={styles['car-item']}>
                            <p>{obj.MakeName || obj.Make_Name }</p>
                            <p>{'    '}</p>
                            <p>{obj.ModelName || obj.Model_Name }</p>
                        </div>
                    )
                })}
                {/*<div className={styles["main-display"]}>*/}
                {/*    <Routes>*/}
                {/*        <Route path={'dashboard'} element={<Dashboard/>}/>*/}
                {/*    </Routes>*/}
                {/*</div>*/}
            </div>
        </div>)
}

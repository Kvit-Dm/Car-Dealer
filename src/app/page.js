'use client'

import React, {useEffect, useState} from "react";
import styles from "./cars.module.css";
import FilterBlock from "@/app/FilterBlock";
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

            console.log(responseData2)

            setAllCars(responseData2)

        }


        fetchCharacters().catch(error => {
            console.error('Fetch error:', error);
            setIsLoading(false)
            setHttpError(error.massage)
        })
    }, []);


    return (
        <div className={styles["main-grid"]}>
            <div className={styles["side-bar"]}>
                <h3>Side bar</h3>
                <FilterBlock/>
            </div>
            <div className={styles["header"]}>Header</div>
            <div className={styles["main-block"]}>
                {allCars.map((obj) =>{
                    return(
                        <div key={obj.makeId} className={styles['car-item']} >
                            <p>{obj.MakeName || obj.Make_Name }</p>
                            <p>{obj.ModelName || obj.Model_Name }</p>

                        </div>
                    )
                })}
            </div>
        </div>)
}

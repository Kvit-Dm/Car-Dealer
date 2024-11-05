import styles from "@/app/cars.module.css";
import React, {useEffect, useState} from "react";
import {httpService} from "@/app/http/http";

function MainBlock() {
    const [allCars, setAllCars] = useState([]);


    useEffect(() => {

        httpService.GetMakesForVehicleType().then(res =>{
            setAllCars(res.Results)
            const loadedMeals = []

            for (const key in res){
                console.log( key , res[key])
                // loadedMeals.push({
                //     id: key,
                //     name: responseData[key].name,
                //     description: responseData[key].description,
                //     price: responseData[key].price,
                // })
            }
            console.log("Latest state:", res.Results);
        })
    }, []);

    return (
        allCars.map((obj, index) => {
            return (
                <div key={index} className={styles['car-item']}>
                    <p>{obj.MakeName || obj.Make_Name}</p>
                    <p>{obj.ModelName || obj.Model_Name}</p>

                </div>
            )
        })
    )
}

export default MainBlock;
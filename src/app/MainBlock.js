import styles from "@/app/page.module.css";
import React, {useEffect, useState} from "react";
import {httpService} from "@/app/http/http";

function MainBlock() {
    const [allCars, setAllCars] = useState([]);


    useEffect(() => {

        httpService.GetMakesForVehicleType().then(res => {
            setAllCars(res.Results)

            console.log("Latest state:", res.Results);
        })
    }, []);

    return (allCars.sort((a, b) => {
            const makeA = (a.MakeName || a.Make_Name || "").toLowerCase();
            const makeB = (b.MakeName || b.Make_Name || "").toLowerCase();
            return makeA.localeCompare(makeB);
        }).map((obj, index) => {
            return (<div key={index} className={styles['car-item']}>
                    <p>{obj.MakeName || obj.Make_Name}</p>
                    <p>{obj.ModelName || obj.Model_Name}</p>

                </div>)
        }))
}

export default MainBlock;
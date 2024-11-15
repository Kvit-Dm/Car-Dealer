import styles from "@/app/page.module.css";
import React, {Fragment, useEffect, useState} from "react";
import {httpService} from "@/app/http/http";


import {useDispatch, useSelector} from 'react-redux';


function MainBlock() {
    const [allCars, setAllCars] = useState([]);
    const searchCarSrt = useSelector(state => state.searchCar.value);

    useEffect(() => {
        httpService.getMakesForVehicleType().then(res => {
            setAllCars(res.Results)
            console.log("Latest state:", res.Results);
        })
    }, []);

    function carItemHandler(e){
        console.log(e,e.target.outerText)
    }

    return (
            allCars.filter((obj) =>
                searchCarSrt === '' || obj.MakeName.toLowerCase().includes(searchCarSrt.toLowerCase())
            ).sort((a, b) => {
                const makeA = (a.MakeName || a.Make_Name || "").toLowerCase();
                const makeB = (b.MakeName || b.Make_Name || "").toLowerCase();
                return makeA.localeCompare(makeB);
            }).map((obj, index) => {
                return (<div key={index} className={styles['car-item']} onClick={(e)=>carItemHandler(e)}>
                    <p>{obj.MakeName || obj.Make_Name}</p>
                    <p>{obj.ModelName || obj.Model_Name}</p>

                </div>)
            })

    )
}

export default MainBlock;
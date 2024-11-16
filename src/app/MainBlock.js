import styles from "@/app/page.module.css";
import React, {Fragment, useEffect, useState} from "react";
import {httpService} from "@/app/http/http";


import {useDispatch, useSelector} from 'react-redux';
import {isAction} from "@reduxjs/toolkit";


function MainBlock() {
    const [allCars, setAllCars] = useState([]);
    const [chosenCar, setChosenCar] = useState(NaN);
    const searchCarSrt = useSelector(state => state.searchCar.value);

    function ListModifier(arr) {
        return arr.map((e) => {
            e.isActive = false;
            return e
        })
    }

    useEffect(() => {
        httpService.getMakesForVehicleType().then(res => {

            setAllCars(ListModifier(res.Results))
            console.log("ListArr", ListModifier(res.Results));
        })
    }, []);

    function carItemHandler(e, obj) {
        setChosenCar(obj)
        console.log(e, e.target.outerText)
    }

    return (
        allCars.filter((obj) =>
            searchCarSrt === '' || obj.MakeName.toLowerCase().includes(searchCarSrt.toLowerCase())
        ).sort((a, b) => {
            const makeA = (a.MakeName || a.Make_Name || "").toLowerCase();
            const makeB = (b.MakeName || b.Make_Name || "").toLowerCase();
            return makeA.localeCompare(makeB);
        }).map((obj, index) => {
            return (
                <div key={index} className={styles['car-item']} onClick={(e) => carItemHandler(e, obj, index)}>

                    <p>{obj.MakeName || obj.Make_Name}</p>
                    <p>{obj.ModelName || obj.Model_Name}</p>

                </div>)
        })

    )
}

export default MainBlock;
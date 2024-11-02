import styles from "@/app/cars.module.css";
import React, {useState} from "react";

function MainBlock(){

    const [allCars, setAllCars] = useState([]);


    return(
        allCars.map((obj,index) =>{
                return(
                    <div key={index} className={styles['car-item']} >
                        <p>{obj.MakeName || obj.Make_Name }</p>
                        <p>{obj.ModelName || obj.Model_Name }</p>

                    </div>
                )
            })
    )
}

export default MainBlock;
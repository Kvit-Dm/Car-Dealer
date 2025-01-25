import styles from '@/app/page.module.css';
import React, {Fragment, useEffect, useState} from 'react';
import {httpService} from '@/app/http/http';
import {setDisplayToFalse} from '@/redux/filterDataSlice'
import {useDispatch, useSelector} from 'react-redux';
import {setCarMakes, clearCarMakes} from '@/redux/CarMakesSlice';


function MainBlock() {

    const [allCars, setAllCars] = useState([]);
    const [searchResult, setSearchResult] = useState(undefined);
    const searchCarSrt = useSelector((state) => state.searchCar.value);
    const chosenCar = useSelector((state) => state.chooseCarMakes.value);

    const filterData = useSelector((state) => state.filterData.value);

    const dispatch = useDispatch();

    useEffect(() => {
        httpService.getMakesForVehicleType().then((res) => {
            setAllCars(res.Results);
            // console.log("ListArr", res.Results);
        });
    }, []);

    function renderResult (){
            console.log('research will be called')
            httpService
                .getFetchVehicleData(filterData.searchId, filterData.searchYear)
                .then((res) => {
                    setSearchResult(res.Results);
                    console.log('res', res.Results);
                });
            dispatch(setDisplayToFalse())
    }

    function carItemHandler(e, obj) {
        if (chosenCar === obj) {
            dispatch(clearCarMakes());
            return;
        }
        dispatch(setCarMakes(obj));
        // console.log(e, e.target.outerText)
    }
    if (filterData.toggleDisplayResult === true) { renderResult ()}
    return (
        <React.Fragment>
            {allCars.filter(
                (obj) =>
                    searchCarSrt === '' ||
                    obj.MakeName.toLowerCase().includes(searchCarSrt.toLowerCase())
            )
                .sort((a, b) => {
                    const makeA = (a.MakeName || a.Make_Name || '').toLowerCase();
                    const makeB = (b.MakeName || b.Make_Name || '').toLowerCase();
                    return makeA.localeCompare(makeB);
                })
                .map((obj, index) => {
                        return (
                            <div
                                key={index}
                                className={`${styles['car-item']}`}
                                onClick={(e) => carItemHandler(e, obj)}
                            >
                                {chosenCar === obj && <p>&#9989;</p>}
                                <p>{obj.MakeName || obj.Make_Name}</p>
                                <p>{obj.ModelName || obj.Model_Name}</p>
                            </div>
                        );
                    }
                )

            }
            <pre>{JSON.stringify(searchResult, null, 2)}</pre>
        </React.Fragment>


    )
}

export default MainBlock;

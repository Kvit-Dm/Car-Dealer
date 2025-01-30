import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


import styles from './FilterBlock.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {setFilterData} from '@/redux/filterDataSlice'
import {setSearchCar} from '@/redux/searchCarSlice';
import {httpService} from '@/app/http/http';

export default function FilterBlock() {

    const [searchValue, setSearchValue] = useState('');
    const [searchYear, setSearchYear] = useState(2024);
    const chosenCar = useSelector((state) => state.chooseCarMakes.value);
    // const researchtoggle = useSelector((state) => state.chooseCarMakes.value);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.searchValue) setSearchNameHandler(localStorage.searchValue)
        if (localStorage.searchYear) setSearchYearHandler(localStorage.searchYear)
    }, []);

    function setSearchNameHandler(str) {
        setSearchValue(str);
        dispatch(setSearchCar(str));
        localStorage.searchValue = str;
    }

    function setSearchYearHandler(str) {
        setSearchYear(str);
        if (str) localStorage.searchYear = str;
    }


    function NextBtnHandler() {
        if (chosenCar) {
            console.log(chosenCar.MakeId, searchYear);

            dispatch(setFilterData({
                searchId: chosenCar.MakeId,
                searchYear: searchYear,
                toggleDisplayResult: true,
            }));

        }
    }

    function NextBtnStyles() {
        if (chosenCar) {
            return `${styles['next-btn']} ${styles['next-btn-active']}`;
        }
        return `${styles['next-btn']} `;
    }

    function SearchNameInputStyles() {
        if (chosenCar) {
            return `${styles['next-btn']} ${styles['next-btn-active']}`;
        }
        return `${styles['next-btn']} `;
    }
    return (
        <React.Fragment>
            <p>{`Year ${searchYear}`} </p>
            <div className={styles['search-year-block']}>
                <Slider
                    reverse={true}
                    className={styles['year-slider']}
                    min={2015}
                    max={2024}
                    value={searchYear}
                    onChange={(e) => setSearchYearHandler(e)}
                ></Slider>
            </div>
            <div>
                <h4>Model</h4>
                <div>
          <textarea
              className={styles['']}
              value={searchValue}
              placeholder={'Search'}
              onChange={(e) => setSearchNameHandler(e.target.value)}
          />
                    <button></button>
                </div>
            </div>
            <button className={NextBtnStyles()} onClick={() => NextBtnHandler()}>
                Next
            </button>
            <Link href="/result/makeId/year">link</Link>

        </React.Fragment>
    );
}

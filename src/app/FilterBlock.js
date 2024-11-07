import React, {useState} from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Link from "next/link";
import styles from './FilterBlock.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {setSearchCar, clearSearchCar} from '../redux/searchCarSlice'


export default function FilterBlock() {

    const [searchValue, setSearchValue] = useState('');
    const [searchYear, setSearchYear] = useState(2024);
    const dispatch = useDispatch();
    // const searchValue = useSelector((state) => state.searchCar.value);

    function setSearchHandler(str) {
        setSearchValue(str)
        dispatch(setSearchCar(str))
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
                    defaultValue={searchYear}
                    onChange={e => setSearchYear(e)}
                >
                </Slider>
            </div>


            <div>
                <h4>Model</h4>
                <div>
                    <textarea
                        value={searchValue}
                        placeholder={"Search"}
                        onChange={e => setSearchHandler(e.target.value)}/>
                    <button>
                        {/*<FontAwesomeIcon icon={faSearch}/>*/}
                    </button>
                </div>

            </div>
            <Link href={'/'}></Link>
            <button className={styles['next-btn']}>Next</button>

        </React.Fragment>
    )
}
import React, {useState} from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Link from "next/link";
import styles from './FilterBlock.module.css'


export default function FilterBlock() {

    const [searchValue, setSearchValue] = useState('');
    const [searchYear, setSearchYear] = useState(2024);

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
                    <textarea value={searchValue} placeholder={"Search"}
                              onChange={e => setSearchValue(e.target.value)}/>
                    <button>
                        {/*<FontAwesomeIcon icon={faSearch}/>*/}
                    </button>
                </div>

            </div>
            <Link href={'/'}></Link>
            <button >Next</button>

        </React.Fragment>
    )
}
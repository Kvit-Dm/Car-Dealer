'use client'

import React, {Suspense, useEffect, useState, lazy} from "react";
import styles from "./cars.module.css";
import FilterBlock from "@/app/FilterBlock";
const MainBlock = lazy(()=> import('./MainBlock'));

export default function Home() {
    return (
        <div className={styles["main-grid"]}>
            <div className={styles["side-bar"]}>
                <h3>Side bar</h3>
                <FilterBlock/>
            </div>
            <div className={styles["header"]}>Header</div>
            <div className={styles["main-block"]}>
                <Suspense fallback={<h2>Loading...</h2>}>
                <MainBlock/>
                </Suspense>
            </div>
        </div>)
}

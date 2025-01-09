'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import React, { Suspense, useEffect, useState, lazy } from 'react';
import styles from './page.module.css';
import FilterBlock from '@/app/FilterBlock';

const MainBlock = lazy(() => import('./MainBlock'));

export default function Home() {
  return (
    <Provider store={store}>
      <div className={styles['main-grid']}>
        <div className={styles['side-bar']}>
          <h3>Filters</h3>
          <FilterBlock />
        </div>
        <div className={styles['header']}>
          <h1>Car Dealer</h1>
        </div>
        <div className={styles['main-block']}>
          <Suspense fallback={<Loading />}>
            {/*<AlwaysLoadingComponent/>*/}
            <MainBlock />
          </Suspense>
        </div>
      </div>
    </Provider>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const AlwaysLoadingComponent: React.FC = () => {
  // Simulate an infinite loading state by throwing a Promise
  throw new Promise(() => {});
};

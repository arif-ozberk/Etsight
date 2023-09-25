import React, { useContext } from 'react'

// Styles
import styles from "../styles/HomePage.module.scss";

// Context
import { mainContext } from '../context/mainContext';


const HomePage = () => {

    const { handleThemeSwtichButton } = useContext(mainContext);

    return (
        <div className={`${styles.container} h-screen bg-slate-200 dark:bg-slate-800`}>
            <h1 className={`${styles.heading} text-7xl 2xl:text-5xl xl:text-3xl lg:text-xl md:text-lg sm:text-base xs:text-sm text-slate-800 dark:text-slate-200`}>Home Page</h1>
            <p className='text-emerald-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, asperiores?</p>
            <button className='bg-blue-300 px-5 py-2 text-xl rounded-full' onClick={handleThemeSwtichButton}>switch</button>
        </div>
    );
}

export default HomePage;
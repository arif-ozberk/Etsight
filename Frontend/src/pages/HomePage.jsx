import React from 'react'

// Styles
import styles from "../styles/HomePage.module.scss";


const HomePage = () => {
    return (
        <div className={`${styles.container}`}>
            <h1 className={`${styles.heading} text-7xl 2xl:text-5xl xl:text-3xl lg:text-xl md:text-lg sm:text-base xs:text-sm text-red-500`}>Home Page</h1>
            <p className='text-emerald-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, asperiores?</p>
        </div>
    );
}

export default HomePage;
import React, { useContext } from 'react'

// Styles
import styles from "../styles/HomePage.module.scss";

// Components
import ThemeSwitchButton from '../components/shared_components/ThemeSwitchButton';

// Context
import { mainContext } from '../context/mainContext';


const HomePage = () => {

    const {  } = useContext(mainContext);

    return (
        <div className={`${styles.container} primary-background-theme`}>
            <h1 className='primary-text-theme'>Home Page</h1>
            <p className='secondary-text-theme'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, corrupti?</p>
            <ThemeSwitchButton />
        </div>
    );
}

export default HomePage;
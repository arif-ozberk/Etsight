import React, { useContext } from 'react';

// Styles
import styles from "../../styles/shared_components/Buttons.module.scss";

// Context
import { mainContext } from '../../context/mainContext';


const ThemeSwitchButton = () => {

    const { theme, setTheme } = useContext(mainContext);


    const handleThemeSwitchButton = () => {
        theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    }


    return (
        <button className={`${styles.themeSwitchButton}`} onClick={handleThemeSwitchButton}>
            switch
        </button>
    );
}
 
export default ThemeSwitchButton;
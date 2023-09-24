import React, {useEffect} from 'react';

export const useThemeInitialize = (theme, setTheme) => {

    useEffect(() => {
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", theme);
        }
        else {
            setTheme(localStorage.getItem("theme"));
        }
    }, []);
}


export const useThemeSwitcher = (theme) => {

    useEffect(() => {
        localStorage.setItem("theme", theme);
        theme === "dark" ?
            document.documentElement.classList.add("dark") :
            document.documentElement.classList.remove("dark");
    }, [theme]);
}
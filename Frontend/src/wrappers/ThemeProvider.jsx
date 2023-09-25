import React, { useContext } from 'react';

// Context
import { mainContext } from '../context/mainContext';

const ThemeProvider = ({ children }) => {

    const { theme } = useContext(mainContext);

    return (
        <div className={theme}>
            {children}
        </div>
    );
}
 
export default ThemeProvider;
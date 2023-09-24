import React, { useState, useEffect } from 'react';

// React Router
import { RouterProvider } from "react-router-dom";

// Routes
import { router } from './Routes/routes';

// Hooks
import { useThemeInitialize, useThemeSwitcher } from './hooks/themeSwitch';


function App() {
	const [theme, setTheme] = useState("light");

	// Theme Switcher Hooks
	useThemeInitialize(theme, setTheme);
	useThemeSwitcher(theme);


	const handleThemeSwtichButton = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	}


	return (
		<>
			<button className='bg-blue-300 px-5 py-2 text-xl rounded-full' onClick={handleThemeSwtichButton}>switch</button>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

import React, { useState, useEffect } from 'react';

// React Router
import { RouterProvider } from "react-router-dom";

// Routes
import { router } from './Routes/routes';

// Hooks
import { useThemeInitialize, useThemeSwitcher } from './hooks/themeSwitch';

// Context
import { mainContext } from './context/mainContext';


function App() {
	const [theme, setTheme] = useState("light");
	const [isSidebarOpen, setSidebarIsOpen] = useState(true);

	// Theme Switcher Hooks
	useThemeInitialize(theme, setTheme);
	useThemeSwitcher(theme);


	const handleThemeSwtichButton = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	}


	return (
		<mainContext.Provider value={{handleThemeSwtichButton, theme, isSidebarOpen, setSidebarIsOpen}}>
			<RouterProvider router={router} />
		</mainContext.Provider>
	);
}

export default App;

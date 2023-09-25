import React, { useState, useEffect } from 'react';

// Styles
import "./styles/globals.scss";

// React Router
import { RouterProvider } from "react-router-dom";

// Routes
import { router } from './Routes/routes';

// Hooks
import { useThemeInitialize, useThemeSwitcher } from './hooks/themeSwitch';

// Wrappers
import ThemeProvider from './wrappers/ThemeProvider';

// Context
import { mainContext } from './context/mainContext';


function App() {
	const [theme, setTheme] = useState("light-theme");
	const [isSidebarOpen, setSidebarIsOpen] = useState(true);

	// Theme Switcher Hooks
	useThemeInitialize(theme, setTheme);
	useThemeSwitcher(theme);


	return (
		<mainContext.Provider value={{ theme, setTheme, isSidebarOpen, setSidebarIsOpen }}>
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		</mainContext.Provider>
	);
}

export default App;

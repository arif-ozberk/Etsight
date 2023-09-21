import React, { useState } from 'react';

// React Router
import { RouterProvider } from "react-router-dom";

// Routes
import { router } from './Routes/routes';


function App() {

	return (
		<RouterProvider router={router} />
	)
}

export default App;

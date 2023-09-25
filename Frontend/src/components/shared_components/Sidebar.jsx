import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

// Styles
import styles from "../../styles/shared_components/Sidebar.module.scss";

// Context
import { mainContext } from '../../context/mainContext';


const Sidebar = () => {

	const { isSidebarOpen, setSidebarIsOpen } = useContext(mainContext);


	return (
		<>
			<div>
				Sidebar
			</div>

			<Outlet />
		</>
		
	);
}

export default Sidebar;
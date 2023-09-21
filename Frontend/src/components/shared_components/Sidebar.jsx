import React from 'react'
import { Link, Outlet } from 'react-router-dom';


const Sidebar = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/profile">Profile</Link>

			<Outlet />
		</div>
	);
}

export default Sidebar;
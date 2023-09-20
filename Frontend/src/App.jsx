import React, { useState } from 'react';


function App() {

	const [users, setUsers] = useState([]);


	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:5000/api/users");
			if(!response.ok) throw Error("Error...");
			const userData = await response.json();
			console.log(userData);
			setUsers(userData);
		}
		catch(err) {
			console.log(err);
		}
	}


	const buttonHandler = () => {
		fetchData();
	}


	return (
		<div>
			Hello World
			<button onClick={buttonHandler}>Fetch</button>
			{users.map((user, index) => (
				<div key={index}>
					<h2>{user.name}</h2>
					<p>{user.age}</p>
				</div>
			))}
		</div>
	)
}

export default App;

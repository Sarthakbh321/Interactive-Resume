import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const [interactive, setInteractive] = useState(true);

	const handleSwitch = (event) => {
		setInteractive(event.target.checked);
	};

	return (
		<div className="App">
			<Navbar interactive={interactive} handleSwitch={handleSwitch} />
			<Title interactive={interactive} />
			<h1>About Me</h1>
		</div>
	);
}

export default App;

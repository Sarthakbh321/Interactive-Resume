import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./components/Title";
import Navbar from "./components/Navbar/Navbar";
import About from "./sections/About";

function App() {
	const [interactive, setInteractive] = useState(true);

	useEffect(() => {
		let inter = localStorage.getItem("interactive");

		if (inter === null) {
			setInteractive(true);
		} else {
			if (inter === "true") {
				setInteractive(true);
			} else {
				setInteractive(false);
			}
		}
	}, []);

	const handleSwitch = (event) => {
		setInteractive(event.target.checked);

		localStorage.setItem("interactive", event.target.checked);
	};

	return (
		<div className="App">
			<Navbar interactive={interactive} handleSwitch={handleSwitch} />
			<Title interactive={interactive} />
			<About />
		</div>
	);
}

export default App;

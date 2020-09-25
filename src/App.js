import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./components/Title";
import Navbar from "./components/Navbar/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import { Container } from "@material-ui/core";
import Divider from "./components/Divider/Divider";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

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
			<Container>
				<About interactive={interactive} />
				<Divider />
				<Skills interactive={interactive} />
				<Divider />
				<Projects interactive={interactive} />
				<Divider />
				<Contact interactive={interactive} />
			</Container>
		</div>
	);
}

export default App;

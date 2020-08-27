import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import SwitchMode from "./components/SwitchMode";

function App() {
	const [interactive, setInteractive] = useState(true);

	const handleSwitch = (event) => {
		setInteractive(event.target.checked);
	};

	return (
		<div className="App">
			<div className="nav-bar">
				<SwitchMode
					interactive={interactive}
					handleSwitch={handleSwitch}
				/>
			</div>
			<Title interactive={interactive} />
			<h1>Section 2</h1>
		</div>
	);
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import Resume from "./pages/Resume/Resume";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/resume" element={<Resume />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

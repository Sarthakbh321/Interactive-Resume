/* eslint-disable react/prop-types */
import React from "react";
import SwitchMode from "./SwitchMode";
import "./SwitchMode.css";

function Navbar(props) {
	return (
		<div className="nav-bar">
			<SwitchMode
				interactive={props.interactive}
				handleSwitch={props.handleSwitch}
			/>
		</div>
	);
}

export default Navbar;

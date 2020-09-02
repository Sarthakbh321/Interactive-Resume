/* eslint-disable react/prop-types */
import React from "react";
import "./Panel.css";

function Panel(props) {
	return (
		<div hidden={props.index !== props.value} className="skill-panel">
			{props.children}
		</div>
	);
}

export default Panel;

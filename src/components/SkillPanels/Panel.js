/* eslint-disable react/prop-types */
import React from "react";

function Panel(props) {
	return <div hidden={props.index !== props.value}>{props.children}</div>;
}

export default Panel;

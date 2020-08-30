/* eslint-disable react/prop-types */
import React from "react";
import "./SwitchMode.css";
import { FormControlLabel, Switch } from "@material-ui/core";

function SwitchMode(props) {
	return (
		<FormControlLabel
			control={
				<Switch
					checked={props.interactive}
					name="interactive"
					onChange={props.handleSwitch}
					style={{
						color: props.interactive ? "red" : "rgb(230, 230, 230)",
					}}
				/>
			}
			label="Interactive"
			className={props.navState === 0 ? "text-white" : "text-black"}
		/>
	);
}

export default SwitchMode;

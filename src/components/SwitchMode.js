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
				/>
			}
			label="Interactive"
			color="white"
		/>
	);
}

export default SwitchMode;

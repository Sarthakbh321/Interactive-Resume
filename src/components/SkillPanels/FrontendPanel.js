/* eslint-disable react/prop-types */
import React from "react";
import "./Panel.css";
import { Grid } from "@material-ui/core";

function FrontendPanel() {
	return (
		<div style={{ flexGrow: 1 }}>
			<Grid container spacing={3}>
				<Grid item xs={6} sm={3}>
					Hello
				</Grid>
				<Grid item xs={6} sm={3}>
					Hello
				</Grid>
				<Grid item xs={6} sm={3}>
					Hello
				</Grid>
				<Grid item xs={6} sm={3}>
					Hello
				</Grid>
				<Grid item xs={6} sm={3}>
					Hello
				</Grid>
				<Grid item xs={6} sm={3}>
					Hello
				</Grid>
			</Grid>
		</div>
	);
}

export default FrontendPanel;

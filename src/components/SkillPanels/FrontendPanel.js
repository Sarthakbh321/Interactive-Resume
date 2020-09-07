/* eslint-disable react/prop-types */
import React from "react";
import "./Panel.css";
import { Grid } from "@material-ui/core";
import SkillImage from "./SkillImage";

function FrontendPanel() {
	return (
		<div style={{ flexGrow: 1 }}>
			<Grid container spacing={3}>
				<Grid item xs={6} sm={3}>
					<SkillImage src="html" name="HTML" />
				</Grid>
				<Grid item xs={6} sm={3}>
					<SkillImage src="css" name="CSS" />
				</Grid>
				<Grid item xs={6} sm={3}>
					<SkillImage src="js" name="Javascript" />
				</Grid>
				<Grid item xs={6} sm={3}>
					<SkillImage src="bootstrap" name="Bootstrap" />
				</Grid>
				<Grid item xs={6} sm={3}>
					<SkillImage src="react" name="React" />
				</Grid>
				<Grid item xs={6} sm={3}>
					<SkillImage src="redux" name="Redux" />
				</Grid>
			</Grid>
		</div>
	);
}

export default FrontendPanel;

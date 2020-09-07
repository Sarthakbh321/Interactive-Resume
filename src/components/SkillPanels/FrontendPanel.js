/* eslint-disable react/prop-types */
import React from "react";
import "./Panel.css";
import { Grid } from "@material-ui/core";
import SkillImage from "./SkillImage";

function FrontendPanel() {
	return (
		<div style={{ flexGrow: 1 }}>
			<Grid container spacing={3}>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="html" name="HTML" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="css" name="CSS" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="js" name="Javascript" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="bootstrap" name="Bootstrap" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="react" name="React" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="redux" name="Redux" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="react" name="React Native" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="vue" name="Vue.js" />
				</Grid>
			</Grid>
		</div>
	);
}

export default FrontendPanel;

/* eslint-disable react/prop-types */
import React from "react";
import "./Panel.css";
import { Grid } from "@material-ui/core";
import SkillImage from "./SkillImage";

function FrontendPanel() {
	return (
		<div style={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="html.svg" name="HTML" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="css.svg" name="CSS" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="js.svg" name="Javascript" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="bootstrap.svg" name="Bootstrap" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="react.svg" name="React" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="redux.svg" name="Redux" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="react.svg" name="React Native" />
				</Grid>
				<Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="vue.svg" name="Vue.js" />
				</Grid>
				{/* <Grid item xs={6} sm={3} className="skill-item">
					<SkillImage src="motion.png" name="Framer Motion" />
				</Grid> */}
			</Grid>
		</div>
	);
}

export default FrontendPanel;

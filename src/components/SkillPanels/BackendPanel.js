/* eslint-disable react/prop-types */
import React from "react";
import { Grid } from "@material-ui/core";
import SkillImage from "./SkillImage";
import "./Panel.css";

function BackendPanel() {
	return (
		<div style={{ flexGrow: 1 }}>
			<Grid container spacing={2} className="grid-container">
				<Grid item xs={6} sm={4} className="skill-item">
					<SkillImage src="node.svg" name="NodeJS" />
				</Grid>
				<Grid item xs={6} sm={4} className="skill-item">
					<SkillImage src="express.svg" name="ExpressJS" />
				</Grid>
				<Grid item xs={6} sm={4} className="skill-item">
					<SkillImage src="mongodb.svg" name="MongoDB" />
				</Grid>
				<Grid item xs={6} sm={4} className="skill-item">
					<SkillImage src="firebase.svg" name="Firebase" />
				</Grid>
			</Grid>
		</div>
	);
}

export default BackendPanel;

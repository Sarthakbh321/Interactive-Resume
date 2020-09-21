/* eslint-disable react/prop-types */
import React from "react";
import { Grid } from "@material-ui/core";
import SkillImage from "./SkillImage";
import "./Panel.css";

function CompetitivePanel() {
	return (
		<div style={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={6} sm={4} className="skill-item">
					<SkillImage src="python.svg" name="Python" />
				</Grid>
				<Grid item xs={6} sm={4} className="skill-item">
					<SkillImage src="cpp.svg" name="C++" />
				</Grid>
				<Grid item xs={6} sm={4} className="skill-item">
					<SkillImage src="java.svg" name="Java" />
				</Grid>
			</Grid>
		</div>
	);
}

export default CompetitivePanel;

import React from "react";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import "./Projects.css";
import { Grid } from "@material-ui/core";

function Projects() {
	return (
		<div className="section-style">
			<h1 className="section-head">Projects</h1>
			<div className="projects-list">
				<Grid conatiner spacing={0} className="grid-list">
					<ProjectTile name="Quizzie" src="quizzie.png" big={false} />
				</Grid>
			</div>
		</div>
	);
}

export default Projects;

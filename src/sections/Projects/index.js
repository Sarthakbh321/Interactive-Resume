import React from "react";
import { GridList } from "@material-ui/core";

function Projects() {
	return (
		<div className="section-style">
			<h1 className="section-head">Projects</h1>
			<div className="projects-list">
				<GridList spacing={0}></GridList>
			</div>
		</div>
	);
}

export default Projects;

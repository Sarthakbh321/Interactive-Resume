/* eslint-disable react/prop-types */
import React from "react";
import { Card, CardMedia, CardContent } from "@material-ui/core";

function ProjectTile({ name, src }) {
	return (
		<Card className="project-tile">
			<CardMedia image={`/assets/${src}`} title={name} />
			<CardContent>
				<p>Quizzie is a open-source</p>
			</CardContent>
		</Card>
	);
}

export default ProjectTile;

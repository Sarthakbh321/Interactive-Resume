/* eslint-disable react/prop-types */
import React from "react";
import "../../sections/Projects/Projects.css";
import { Card, CardMedia, CardContent, CardHeader } from "@material-ui/core";

function ProjectTile({ name, src, desc }) {
	return (
		<Card className="project-tile" elevation={3}>
			<CardHeader title={name} className="project-title" />
			<CardMedia
				image={`./assets/${src}`}
				title={name}
				style={{ height: 0, paddingTop: "56%" }}
			/>
			<CardContent>
				<p>{desc}</p>
			</CardContent>
		</Card>
	);
}

export default ProjectTile;

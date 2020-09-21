/* eslint-disable react/prop-types */
import React from "react";
import "../../sections/Projects/Projects.css";
import {
	Card,
	CardMedia,
	CardContent,
	CardHeader,
	CardActions,
	Button,
} from "@material-ui/core";

function ProjectTile({ name, src, desc, tech }) {
	return (
		<Card className="project-tile" elevation={3}>
			<CardHeader title={name} className="project-title" />
			<CardMedia
				image={`./assets/${src}`}
				title={name}
				style={{ height: 0, paddingTop: "56%" }}
			/>
			<CardContent>
				<p style={{ textAlign: "justify" }}>{desc}</p>
				<p>
					<span className="do-font">TECH STACK: </span>
					{tech}
				</p>
			</CardContent>
			<CardActions disableSpacing>
				<Button variant="contained">Go to website</Button>
			</CardActions>
		</Card>
	);
}

export default ProjectTile;

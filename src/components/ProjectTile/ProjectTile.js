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
	IconButton,
} from "@material-ui/core";

function ProjectTile({ name, src, desc, tech, link, git }) {
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
					<span className="blue-color">{tech} </span>
				</p>
			</CardContent>
			<CardActions disableSpacing className="action-bar">
				<a
					href={link}
					style={{ textDecoration: "none" }}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button
						variant="contained"
						className="project-link-btn"
						disabled={link === undefined ? true : false}
						onClick={() => console.log(link)}
					>
						Go to website
					</Button>
				</a>
				<a href={git} target="_blank" rel="noopener noreferrer">
					<IconButton>
						<img
							src="./icons/github.svg"
							width={20}
							height={20}
							className="git-icon"
							alt={`${name} project`}
						/>
					</IconButton>
				</a>
			</CardActions>
		</Card>
	);
}

export default ProjectTile;

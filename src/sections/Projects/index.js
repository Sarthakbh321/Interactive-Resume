import React, { useRef } from "react";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import "./Projects.css";
import { Grid } from "@material-ui/core";
import projects from "../../data/Projects";

function Projects({ interactive }) {
	const handleModal = () => {
		console.log("sdds");
	};

	const dragRef = useRef(null);

	return (
		<div className="section-style">
			<h1 className="section-head">Projects</h1>
			<div className="projects-list" ref={dragRef}>
				<Grid container spacing={2} className="project-grid-list">
					{projects.map((project) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							onClick={handleModal}
							key={projects.id}
						>
							<ProjectTile
								name={project.name}
								src={project.src}
								desc={project.description}
								tech={project.tech}
								link={project.link}
								git={project.git}
								interactive={interactive}
								dragref={dragRef}
							/>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default Projects;

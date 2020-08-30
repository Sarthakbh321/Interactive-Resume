import React from "react";
import "./About.css";
import { Container, Grid } from "@material-ui/core";

function About() {
	return (
		<Container className="about-section">
			<h1 className="about-head">About Me</h1>
			<div className="about-content">
				<Grid container className="about-grid">
					<Grid item sm={12} md={6} className="about-text-div">
						Hello! I am Sarthak Bharadwaj, currently a 2nd year
						student in Vellore Institute of Technology, Vellore.
						From very early on in my life, I have been interested in
						technology and computers. Hence, I am currently pursuing
						this interest as a Computer Science student. <br />{" "}
						<br />
						My technical interests know no bounds! I am good at
						Frontend Development, Competititve Programming, also
						know something about App Development and Backend
						Development.
					</Grid>
					<Grid item xs={12} sm={6} className="profile-img-div">
						<img src="profile.jpeg" height={350} alt="my face" />
					</Grid>
				</Grid>
			</div>
		</Container>
	);
}

export default About;

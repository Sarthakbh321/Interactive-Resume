import React from "react";
import "./About.css";
import { Container, Grid } from "@material-ui/core";

function About() {
	return (
		<Container className="about-section">
			<h1 className="about-head">About Me</h1>
			<div className="about-content">
				<Grid container sm={12} md={6}></Grid>
			</div>
		</Container>
	);
}

export default About;

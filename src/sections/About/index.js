/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { Grid } from "@material-ui/core";
import Fade from "react-reveal";
import { motion } from "framer-motion";
import "./About.css";

function About(props) {
	const ref = useRef();

	return (
		<div className="section-style">
			<h1 className="section-head">About Me</h1>
			<div className="about-content" ref={ref}>
				<Grid container className="about-grid">
					<Grid item sm={12} md={6} className="about-text-div">
						<Fade left>
							<motion.p
								drag={props.interactive}
								dragConstraints={ref}
								className="z-index1"
							>
								Hello! I am Sarthak Bharadwaj, currently a 2nd
								year student in Vellore Institute of Technology,
								Vellore. From very early on in my life, I have
								been interested in technology and computers.
								Hence, I am currently pursuing this interest as
								a Computer Science student. <br /> <br />
								My technical interests know no bound! I am good
								at Frontend Development, Competititve
								Programming, also know something about App
								Development and Backend Development.
							</motion.p>
						</Fade>
					</Grid>
					<Grid item sm={12} md={6} className="profile-img-div">
						<motion.img
							drag={props.interactive}
							dragConstraints={ref}
							src="profile.jpeg"
							alt="my face"
						/>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default About;

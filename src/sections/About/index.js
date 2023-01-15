/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { Grid } from "@material-ui/core";
import Fade from "react-reveal";
import { motion } from "framer-motion";
import "./About.css";
import { GetApp } from "@material-ui/icons";
import { Link } from "react-router-dom";

function About(props) {
	const ref = useRef();

	return (
		<div className="section-style">
			<motion.h1 className="section-head">
				<span role="img" aria-label="student emoji">
					👨‍🎓
				</span>
				About Me
			</motion.h1>
			<div className="about-content" ref={ref}>
				<Grid container className="about-grid">
					<Grid item sm={12} md={6} className="about-text-div">
						<Fade left>
							<motion.p
								drag={props.interactive}
								dragConstraints={ref}
								className={
									props.interactive
										? "z-index1 grabbable"
										: "z-index1"
								}
							>
								Hello! I am{" "}
								<span className="blue-color">
									Sarthak Bharadwaj
								</span>
								, currently a 3rd year student in{" "}
								<span className="blue-color">
									Vellore Institute of Technology, Vellore
								</span>
								. From very early on in my life, I have been
								interested in technology and computers. Hence, I
								am currently pursuing this interest as a
								Computer Science student. <br /> <br />
								My technical interests know no bounds! I am good
								at{" "}
								<span className="blue-color">
									Frontend Development, Competititve
									Programming
								</span>
								, also experienced in{" "}
								<span className="blue-color">
									App Development and Backend Development
								</span>
								.
							</motion.p>
							<div className="btn-container">
								<Link
									to="/resume"
									style={{ textDecoration: "none" }}
								>
									<motion.button
										className="cv-btn"
										drag={props.interactive}
										dragConstraints={ref}
									>
										<GetApp className="down-icon" />
										Download CV
									</motion.button>
								</Link>
							</div>
						</Fade>
					</Grid>
					{/* <Grid
						item
						sm={12}
						md={6}
						className={
							props.interactive
								? "profile-img-div grabbable"
								: "profile-img-div"
						}
					>
						<motion.img
							drag={props.interactive}
							dragConstraints={ref}
							src="profile.jpeg"
							alt="my face"
							className={props.interactive ? "grabbable" : null}
						/>
					</Grid> */}
				</Grid>
			</div>
		</div>
	);
}

export default About;

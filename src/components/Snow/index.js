import React from "react";
import "./particles.css";
import Particles from "react-particles-js";

function Snow() {
	return (
		<div className="particles">
			<Particles
				params={{
					particles: {
						number: {
							value: 250,
							density: {
								enable: false,
							},
						},
						size: {
							value: 2,
							random: true,
						},
						move: {
							direction: "bottom",
							out_mode: "out",
						},
						line_linked: {
							enable: false,
						},
					},
					interactivity: {
						events: {
							onclick: {
								enable: true,
								mode: "remove",
							},
						},
						modes: {
							remove: {
								particles_nb: 10,
							},
						},
					},
				}}
			/>
		</div>
	);
}

export default Snow;

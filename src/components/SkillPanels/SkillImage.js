/* eslint-disable react/prop-types */
import React from "react";
import { withWidth, isWidthDown } from "@material-ui/core";
import { Zoom } from "react-reveal";

function SkillImage({ name, src, width }) {
	let size = 120;

	if (isWidthDown("xs", width)) {
		size = 60;
		console.log(width);
	}

	return (
		<Zoom>
			<img
				src={`icons/${src}`}
				width={size}
				height={size}
				alt={`${name} logo`}
			/>{" "}
			<br />
			<span className="skill-tag">{name}</span>
		</Zoom>
	);
}

export default withWidth()(SkillImage);

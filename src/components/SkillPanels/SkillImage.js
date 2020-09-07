/* eslint-disable react/prop-types */
import React from "react";
import { withWidth, isWidthDown } from "@material-ui/core";

function SkillImage({ name, src, width }) {
	let size = 120;

	if (isWidthDown("xs", width)) {
		size = 60;
		console.log(width);
	}

	return (
		<>
			<img
				src={`icons/${src}.svg`}
				width={size}
				height={size}
				alt={`${name} logo`}
			/>{" "}
			<br />
			<span className="skill-tag">{name}</span>
		</>
	);
}

export default withWidth()(SkillImage);

/* eslint-disable react/prop-types */
import React from "react";

function SkillImage({ name, src }) {
	return (
		<>
			<img
				src={`icons/${src}.svg`}
				width={120}
				height={120}
				alt={`${name} logo`}
			/>{" "}
			<br />
			<span className="skill-tag">{name}</span>
		</>
	);
}

export default SkillImage;

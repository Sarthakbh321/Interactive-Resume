/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import "./title.css";
import { motion } from "framer-motion";
import Snow from "../Snow";

function Title(props) {
	const dragRef = useRef(null);

	return (
		<div className="title-section" ref={dragRef}>
			<div className="title-container">
				<motion.h1
					className="title-text"
					drag={props.interactive}
					dragConstraints={dragRef}
				>
					Sarthak <br /> Bharadwaj
				</motion.h1>
			</div>
			<div className="title-container">
				<motion.h4
					className="subtitle-text"
					drag={props.interactive}
					dragConstraints={dragRef}
				>
					Student, Developer & Learner
				</motion.h4>
			</div>
			<Snow />
		</div>
	);
}

export default Title;

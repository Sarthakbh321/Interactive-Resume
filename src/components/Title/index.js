/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import "./title.css";
import { motion } from "framer-motion";
import Snow from "../Snow";
import ScrollIcon from "../Scroll_Icon/ScrollIcon";

function Title(props) {
	const dragRef = useRef(null);

	return (
		<div className="title-section" ref={dragRef}>
			<div className="title-container">
				<motion.h1
					className={
						props.interactive
							? "title-text grabbable"
							: "title-text"
					}
					drag={props.interactive}
					dragConstraints={dragRef}
				>
					Sarthak <br /> Bharadwaj
				</motion.h1>
			</div>
			<div className="title-container">
				<motion.h4
					className={
						props.interactive
							? "subtitle-text grabbable"
							: "subtitle-text"
					}
					drag={props.interactive}
					dragConstraints={dragRef}
				>
					Student, Developer & Learner
				</motion.h4>
			</div>
			<motion.img
				src="astronaut.svg"
				className="astro-img grabbable"
				drag
				dragConstraints={dragRef}
			/>
			<div className="scroll-div">
				<ScrollIcon constraint={dragRef} />
			</div>
			<Snow />
		</div>
	);
}

export default Title;

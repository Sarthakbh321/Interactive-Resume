import React, { useRef } from "react";
import "./title.css";
import { motion } from "framer-motion";
import Snow from "../Snow";

function Title() {
	const dragRef = useRef(null);

	return (
		<div className="title-section" ref={dragRef}>
			<motion.div className="title-text" drag dragConstraints={dragRef}>
				Sarthak <br /> Bharadwaj
			</motion.div>

			{/* <motion.div
				className="subtitle-text"
				drag
				dragConstraints={dragRef}
			>
				Student, Developer & Learner
			</motion.div> */}
			<Snow />
		</div>
	);
}

export default Title;

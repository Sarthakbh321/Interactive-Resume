import React, { useRef } from "react";
import "./title.css";
import { motion } from "framer-motion";

function Title() {
	const dragRef = useRef(null);

	return (
		<div className="title-section" ref={dragRef}>
			<motion.div className="title-text" drag dragConstraints={dragRef}>
				Sarthak <br /> Bharadwaj
			</motion.div>
		</div>
	);
}

export default Title;

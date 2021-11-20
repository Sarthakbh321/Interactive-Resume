import React from "react";
import WorkCard from "../../components/WorkCard";

function index() {
	return (
		<div className="section-style">
			<h1 className="section-head contact-head">
				Experience{" "}
				<span role="img" aria-label="wave emoji">
					👋
				</span>
			</h1>
			<div>
				<WorkCard />
			</div>
		</div>
	);
}

export default index;

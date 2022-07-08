import React from "react";

const Resume = () => {
	// useEffect(() => {
	// 	window.location = "/resume.pdf";
	// }, []);

	return (
		<div className="resume-page">
			<object
				data="/resume.pdf"
				type="application/pdf"
				width="100%"
				height="100%"
			>
				<p>
					<a href="/resume.pdf">Download the CV</a>
				</p>
			</object>
		</div>
	);
};

export default Resume;

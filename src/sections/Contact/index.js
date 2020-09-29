import React from "react";
import "./Contact.css";

function Contact() {
	return (
		<div className="section-style">
			<h1 className="section-head contact-head">Contact</h1>
			<div className="contact-section">
				<p className="img-text">
					<a
						href="mailto:sarthakbh321@gmail.com"
						className="blue-color"
					>
						sarthakbh321@gmail.com
					</a>{" "}
					<img src="./icons/gmail.svg" width={40} height={40} />
				</p>
				<p className="img-text">
					<a
						href="https://www.linkedin.com/in/sarthak-bharadwaj-8552b5110/"
						className="blue-color"
					>
						Sarthak Bharadwaj
					</a>{" "}
					<img src="./icons/linkedin.svg" width={40} height={40} />
				</p>
			</div>
		</div>
	);
}

export default Contact;

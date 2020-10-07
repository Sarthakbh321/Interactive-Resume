import React from "react";
import "./Contact.css";
import { Grid } from "@material-ui/core";

function Contact() {
	return (
		<div className="section-style">
			<h1 className="section-head contact-head">
				Contact{" "}
				<span role="img" aria-label="wave emoji">
					👋
				</span>
			</h1>
			<Grid container>
				<Grid item xs={12} sm={6} className="contact-desc">
					<p className="contact-text">
						Thanks for visiting my portfolio! If you liked it, you
						can star it on Github if you want. The repo can be found{" "}
						<a
							style={{ textDecoration: "none" }}
							className="blue-color"
							href="https://github.com/Sarthakbh321/Interactive-Resume"
							target="_blank"
							rel="noopener noreferrer"
						>
							here
						</a>
						.
					</p>
				</Grid>
				<Grid item xs={12} sm={6}>
					<div className="contact-section">
						<p className="img-text">
							<a
								href="https://github.com/Sarthakbh321"
								className="blue-color"
								target="_blank"
								rel="noopener noreferrer"
							>
								@Sarthakbh321
							</a>
							<img
								src="./icons/github.svg"
								width={40}
								height={40}
								alt="github icon"
							/>
						</p>
						<p className="img-text">
							<a
								href="mailto:sarthakbh321@gmail.com"
								className="blue-color"
							>
								sarthakbh321@gmail.com
							</a>{" "}
							<img
								src="./icons/gmail.svg"
								width={40}
								height={40}
								alt="gmail icon"
							/>
						</p>
						<p className="img-text">
							<a
								href="https://www.linkedin.com/in/sarthak-bharadwaj-8552b5110/"
								className="blue-color"
								target="_blank"
								rel="noopener noreferrer"
							>
								Sarthak Bharadwaj
							</a>{" "}
							<img
								src="./icons/linkedin.svg"
								width={40}
								height={40}
								alt="linkedin icon"
							/>
						</p>
						<p className="img-text">
							<a
								href="https://www.instagram.com/sarthak_bharadwaj_/"
								className="blue-color"
								target="_blank"
								rel="noopener noreferrer"
							>
								@sarthak_bharadwaj_
							</a>{" "}
							<img
								src="./icons/instagram.svg"
								width={40}
								height={40}
								alt="instagram icon"
							/>
						</p>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Contact;

import { Container, Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Title from "../../components/Title";
import About from "../../sections/About";
import Contact from "../../sections/Contact";
import Projects from "../../sections/Projects";
import Skills from "../../sections/Skills";

const Main = () => {
	const [interactive, setInteractive] = useState(false);

	const handleSwitch = (event) => {
		setInteractive(event.target.checked);

		localStorage.setItem("interactive", event.target.checked);
	};

	useEffect(() => {
		let inter = localStorage.getItem("interactive");

		if (inter === null) {
			setInteractive(true);
		} else {
			if (inter === "true") {
				setInteractive(true);
			} else {
				setInteractive(false);
			}
		}
	}, []);

	return (
		<>
			<Navbar interactive={interactive} handleSwitch={handleSwitch} />
			<Title interactive={interactive} />
			<Container>
				<About interactive={interactive} />
				<Divider />
				{/* <Experience interactive={interactive} />
					<Divider /> */}
				<Skills interactive={interactive} />
				<Divider />
				<Projects interactive={interactive} />
				<Divider />
				<Contact interactive={interactive} />
			</Container>
			<Footer />
		</>
	);
};

export default Main;

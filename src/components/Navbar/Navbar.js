/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import SwitchMode from "./SwitchMode";
import "./SwitchMode.css";
import "./Navbar.css";
import {
	CssBaseline,
	AppBar,
	Toolbar,
	useScrollTrigger,
} from "@material-ui/core";

function Navbar(props) {
	let listener = null;

	const [navState, setNavState] = useState(0);

	useEffect(() => {
		// eslint-disable-next-line
		listener = document.addEventListener("scroll", (e) => {
			var scrolled = document.scrollingElement.scrollTop;
			if (scrolled >= 120) {
				setNavState(1);
			} else {
				setNavState(0);
			}
		});

		return () => {
			document.removeEventListener("scroll", listener);
		};
	}, [navState]);

	return (
		<div>
			<CssBaseline />
			<ElevationScroll {...props}>
				<AppBar
					className="nav-bar"
					style={{
						backgroundColor:
							navState === 0 ? "transparent" : "white",
						transition: "all .3s ease",
					}}
				>
					<Toolbar className="toolbar">
						<div
							className="nav-title"
							style={{
								color: navState === 0 ? "transparent" : "black",
							}}
						>
							Sarthak Bharadwaj |
						</div>
						<div>
							<SwitchMode
								navState={navState}
								interactive={props.interactive}
								handleSwitch={props.handleSwitch}
							/>
						</div>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
		</div>
	);
}

function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 120,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 2 : 0,
	});
}

// ElevationScroll.propTypes = {
// 	children: PropTypes.element.isRequired,
// };

export default Navbar;

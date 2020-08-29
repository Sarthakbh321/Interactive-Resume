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
				<AppBar>
					<Toolbar>
						<SwitchMode
							interactive={props.interactive}
							handleSwitch={props.handleSwitch}
						/>
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
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

// ElevationScroll.propTypes = {
// 	children: PropTypes.element.isRequired,
// };

export default Navbar;

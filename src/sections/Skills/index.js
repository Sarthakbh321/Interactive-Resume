import React, { useState } from "react";
import "./Skills.css";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import FrontendPanel from "../../components/SkillPanels/FrontendPanel";
import Panel from "../../components/SkillPanels/Panel";
import CompetitivePanel from "../../components/SkillPanels/CompetitivePanel";

function Skills() {
	const [tab, setTab] = useState(0);

	const handleTabChange = (event, i) => {
		setTab(i);
	};

	return (
		<div className="section-style skill-section">
			<h1 className="section-head skill-head">My Skills</h1>
			<AppBar position="static" elevation={3} className="skill-bar">
				<Tabs
					value={tab}
					onChange={handleTabChange}
					variant="fullWidth"
					indicatorColor="primary"
				>
					<Tab label="Frontend" />
					<Tab label="Competitive" />
				</Tabs>
			</AppBar>
			<Panel index={0} value={tab}>
				<FrontendPanel />
			</Panel>
			<Panel index={1} value={tab}>
				<CompetitivePanel />
			</Panel>
		</div>
	);
}

export default Skills;

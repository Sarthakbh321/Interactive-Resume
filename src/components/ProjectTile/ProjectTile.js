/* eslint-disable react/prop-types */
import React from "react";
import { GridListTile, GridListTileBar } from "@material-ui/core";

function ProjectTile({ name, big, src }) {
	return (
		<GridListTile key={name} cols={big ? 2 : 1} rows={big ? 2 : 1}>
			<img src={src} alt={name} />
			<GridListTileBar title={name} />
		</GridListTile>
	);
}

export default ProjectTile;

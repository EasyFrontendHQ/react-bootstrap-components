import React, { Fragment } from "react";
import EPGrid1 from "./epGrid/EPGrid1";
import EPGrid2 from "./epGrid/EPGrid2";
import EPGrid3 from "./epGrid/EPGrid3";
import EPGrid4 from "./epGrid/EPGrid4";
import EPGrid5 from "./epGrid/EPGrid5";

const EPGrid = () => {
	return (
		<Fragment>
			<EPGrid1 />
			<br />
			<EPGrid2 />
			<br />
			<EPGrid3 />
			<br />
			<EPGrid4 />
			<br />
			<EPGrid5 />
			<br />
		</Fragment>
	);
};

export default EPGrid;

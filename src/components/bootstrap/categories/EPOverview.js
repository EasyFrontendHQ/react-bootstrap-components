import React, { Fragment } from "react";
import EPOverview1 from "./epOverview/EPOverview1";
import EPOverview2 from "./epOverview/EPOverview2";
import EPOverview3 from "./epOverview/EPOverview3";
import EPOverview4 from "./epOverview/EPOverview4";

const EPOverview = () => {
	return (
		<Fragment>
			<EPOverview1 />
			<br />
			<EPOverview2 />
			<br />
			<EPOverview3 />
			<br />
			<EPOverview4 />
			<br />
		</Fragment>
	);
};

export default EPOverview;

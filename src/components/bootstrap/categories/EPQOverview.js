import React, { Fragment } from "react";
import EPQOverview1 from "./epqOverview/EPQOverview1";
import EPQOverview2 from "./epqOverview/EPQOverview2";
import EPQOverview3 from "./epqOverview/EPQOverview3";
import EPQOverview4 from "./epqOverview/EPQOverview4";
import EPQOverview5 from "./epqOverview/EPQOverview5";

const EPQOverview = () => {
	return (
		<Fragment>
			<EPQOverview1 />
			<br />
			<EPQOverview2 />
			<br />
			<EPQOverview3 />
			<br />
			<EPQOverview4 />
			<br />
			<EPQOverview5 />
			<br />
		</Fragment>
	);
};

export default EPQOverview;

import React, { Fragment } from "react";
import CallToAction1 from "./callToActions/CallToAction1";
import CallToAction2 from "./callToActions/CallToAction2";
import CallToAction3 from "./callToActions/CallToAction3";
import CallToAction4 from "./callToActions/CallToAction4";
import CallToAction5 from "./callToActions/CallToAction5";

const CallToActions = () => {
	return (
		<Fragment>
			<CallToAction1 />
			<br />
			<CallToAction2 />
			<br />
			<CallToAction3 />
			<br />
			<CallToAction4 />
			<br />
			<CallToAction5 />
			<br />
		</Fragment>
	);
};

export default CallToActions;

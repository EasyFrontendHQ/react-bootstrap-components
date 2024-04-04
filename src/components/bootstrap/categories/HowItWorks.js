import React, { Fragment } from "react";
import HowItWorks1 from "./howItWorks/HowItWorks1";
import HowItWorks2 from "./howItWorks/HowItWorks2";
import HowItWorks3 from "./howItWorks/HowItWorks3";
import HowItWorks4 from "./howItWorks/HowItWorks4";

const HowItWorks = () => {
	return (
		<Fragment>
			<HowItWorks1 />
			<br />
			<HowItWorks2 />
			<br />
			<HowItWorks3 />
			<br />
			<HowItWorks4 />
		</Fragment>
	);
};

export default HowItWorks;

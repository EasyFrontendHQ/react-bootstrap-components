import React, { Fragment } from "react";
import EPSpecification1 from "./epSpecification/EPSpecification1";
import EPSpecification2 from "./epSpecification/EPSpecification2";
import EPSpecification3 from "./epSpecification/EPSpecification3";

const EPSpecification = () => {
	return (
		<Fragment>
			<EPSpecification1 />
			<br />
			<EPSpecification2 />
			<br />
			<EPSpecification3 />
		</Fragment>
	);
};

export default EPSpecification;

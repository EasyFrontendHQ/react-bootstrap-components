import React, { Fragment } from "react";
import Service1 from "./services/Service1";
import Service2 from "./services/Service2";
import Service3 from "./services/Service3";
import Service4 from "./services/Service4";
import Service5 from "./services/Service5";

const Services = () => {
	return (
		<Fragment>
			<Service1 />
			<br />
			<Service2 />
			<br />
			<Service3 />
			<br />
			<Service4 />
			<br />
			<Service5 />
			<br />
		</Fragment>
	);
};

export default Services;

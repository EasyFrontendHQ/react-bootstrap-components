import React, { Fragment } from "react";
import EPOrder1 from "./epOrder/EPOrder1";
import EPOrder2 from "./epOrder/EPOrder2";
import EPOrder3 from "./epOrder/EPOrder3";
import EPOrder4 from "./epOrder/EPOrder4";
import EPOrder5 from "./epOrder/EPOrder5";

const EPOrder = () => {
	return (
		<Fragment>
			<EPOrder1 />
			<br />
			<EPOrder2 />
			<br />
			<EPOrder3 />
			<br />
			<EPOrder4 />
			<br />
			<EPOrder5 />
			<br />
		</Fragment>
	);
};

export default EPOrder;

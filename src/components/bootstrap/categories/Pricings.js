import React, { Fragment } from "react";
import Pricing1 from "./pricings/Pricing1";
import Pricing2 from "./pricings/Pricing2";
import Pricing3 from "./pricings/Pricing3";
import Pricing4 from "./pricings/Pricing4";
import Pricing5 from "./pricings/Pricing5";

const Pricings = () => {
	return (
		<Fragment>
			<Pricing1 />
			<br />
			<Pricing2 />
			<br />
			<Pricing3 />
			<br />
			<Pricing4 />
			<br />
			<Pricing5 />
			<br />
		</Fragment>
	);
};

export default Pricings;

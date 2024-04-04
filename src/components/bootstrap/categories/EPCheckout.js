import React, { Fragment } from "react";
import EPCheckout1 from "./epCheckout/EPCheckout1";
import EPCheckout2 from "./epCheckout/EPCheckout2";
import EPCheckout3 from "./epCheckout/EPCheckout3";
import EPCheckout4 from "./epCheckout/EPCheckout4";
import EPCheckout5 from "./epCheckout/EPCheckout5";

const EPCheckout = () => {
	return (
		<Fragment>
			<EPCheckout1 />
			<br />
			<EPCheckout2 />
			<br />
			<EPCheckout3 />
			<br />
			<EPCheckout4 />
			<br />
			<EPCheckout5 />
			<br />
		</Fragment>
	);
};

export default EPCheckout;

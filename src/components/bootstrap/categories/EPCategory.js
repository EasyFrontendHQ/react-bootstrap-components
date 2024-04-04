import React, { Fragment } from "react";
import EPCategory1 from "./ecommerceCategory/EPCategory1";
import EPCategory2 from "./ecommerceCategory/EPCategory2";
import EPCategory3 from "./ecommerceCategory/EPCategory3";
import EPCategory4 from "./ecommerceCategory/EPCategory4";
import EPCategory5 from "./ecommerceCategory/EPCategory5";

const EPCategory = () => {
	return (
		<Fragment>
			<EPCategory1 />
			<br />
			<EPCategory2 />
			<br />
			<EPCategory3 />
			<br />
			<EPCategory4 />
			<br />
			<EPCategory5 />
			<br />
		</Fragment>
	);
};

export default EPCategory;

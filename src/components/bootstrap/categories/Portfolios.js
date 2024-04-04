import React, { Fragment } from "react";
import Portfolio1 from "./portfolios/Portfolio1";
import Portfolio2 from "./portfolios/Portfolio2";
import Portfolio3 from "./portfolios/Portfolio3";
import Portfolio4 from "./portfolios/Portfolio4";
import Portfolio5 from "./portfolios/Portfolio5";

const Portfolios = () => {
	return (
		<Fragment>
			<Portfolio1 />
			<br />
			<Portfolio2 />
			<br />
			<Portfolio3 />
			<br />
			<Portfolio4 />
			<br />
			<Portfolio5 />
			<br />
		</Fragment>
	);
};

export default Portfolios;

import React, { Fragment } from "react";
import EPReview1 from "./epReview/EPReview1";
import EPReview2 from "./epReview/EPReview2";
import EPReview3 from "./epReview/EPReview3";
import EPReview4 from "./epReview/EPReview4";
import EPReview5 from "./epReview/EPReview5";

const EPReview = () => {
	return (
		<Fragment>
			<EPReview1 />
			<br />
			<EPReview2 />
			<br />
			<EPReview3 />
			<br />
			<EPReview4 />
			<br />
			<EPReview5 />
			<br />
		</Fragment>
	);
};

export default EPReview;

import React, { Fragment } from "react";
import HttpCodes2 from "./httpCodes/HttpCodes2";
import HttpCodes3 from "./httpCodes/HttpCodes3";
import HttpCodes1 from "./httpCodes/HttpCodes1";
import HttpCodes4 from "./httpCodes/HttpCodes4";
import HttpCodes5 from "./httpCodes/HttpCodes5";

const HttpCodes = () => {
	return (
		<Fragment>
			<HttpCodes1 />
			<br />
			<HttpCodes2 />
			<br />
			<HttpCodes3 />
			<br />
			<HttpCodes4 />
			<br />
			<HttpCodes5 />
			<br />
		</Fragment>
	);
};

export default HttpCodes;

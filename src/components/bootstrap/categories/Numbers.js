import React, { Fragment } from "react";
import Numbers1 from "./numbers/Numbers1";
import Numbers2 from "./numbers/Numbers2";
import Numbers3 from "./numbers/Numbers3";
import Numbers4 from "./numbers/Numbers4";
import Numbers5 from "./numbers/Numbers5";

const Numbers = () => {
	return (
		<Fragment>
			<Numbers1 />
			<br />
			<Numbers2 />
			<br />
			<Numbers3 />
			<br />
			<Numbers4 />
			<br />
			<Numbers5 />
			<br />
		</Fragment>
	);
};

export default Numbers;

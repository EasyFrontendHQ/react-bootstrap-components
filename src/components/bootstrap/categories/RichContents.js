import React, { Fragment } from "react";
import RichContents1 from "./richContents/RichContents1";
import RichContents2 from "./richContents/RichContents2";
import RichContents3 from "./richContents/RichContents3";

const RichContents = () => {
	return (
		<Fragment>
			<RichContents1 />
			<br />
			<RichContents2 />
			<br />
			<RichContents3 />
		</Fragment>
	);
};

export default RichContents;

import React, { Fragment } from "react";
import HeroHeader1 from "./heroHeader/HeroHeader1";
import HeroHeader2 from "./heroHeader/HeroHeader2";
import HeroHeader3 from "./heroHeader/HeroHeader3";
import HeroHeader4 from "./heroHeader/HeroHeader4";
import HeroHeader5 from "./heroHeader/HeroHeader5";

const HeroHeaders = () => {
	return (
		<Fragment>
			<HeroHeader1 />
			<br />
			<HeroHeader2 />
			<br />
			<HeroHeader3 />
			<br />
			<HeroHeader4 />
			<br />
			<HeroHeader5 />
			<br />
		</Fragment>
	);
};

export default HeroHeaders;

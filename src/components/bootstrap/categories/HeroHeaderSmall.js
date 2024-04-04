import React, { Fragment } from "react";
import HeroHeaderSmall1 from "./heroHeaderSmall/HeroHeaderSmall1";
import HeroHeaderSmall2 from "./heroHeaderSmall/HeroHeaderSmall2";
import HeroHeaderSmall3 from "./heroHeaderSmall/HeroHeaderSmall3";

const HeroHeaderSmall = () => {
	return (
		<Fragment>
			<HeroHeaderSmall1 />
			<br />
			<HeroHeaderSmall2 />
			<br />
			<HeroHeaderSmall3 />
			<br />
		</Fragment>
	);
};

export default HeroHeaderSmall;

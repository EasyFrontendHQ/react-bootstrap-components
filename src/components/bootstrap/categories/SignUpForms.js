import React, { Fragment } from "react";
import SignUp1 from "./signupForms/SignUp1";
import SignUp2 from "./signupForms/SignUp2";
import SignUp3 from "./signupForms/SignUp3";
import SignUp4 from "./signupForms/SignUp4";
import SignUp5 from "./signupForms/SignUp5";

const SignUpForms = () => {
	return (
		<Fragment>
			<SignUp1 />
			<br />
			<SignUp2 />
			<br />
			<SignUp3 />
			<br />
			<SignUp4 />
			<br />
			<SignUp5 />
			<br />
		</Fragment>
	);
};

export default SignUpForms;

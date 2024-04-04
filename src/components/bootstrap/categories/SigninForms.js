import React, { Fragment } from "react";
import SignIn1 from "./signinForms/SignIn1";
import SignIn2 from "./signinForms/SignIn2";
import SignIn3 from "./signinForms/SignIn3";
import SignIn4 from "./signinForms/SignIn4";
import SignIn5 from "./signinForms/SignIn5";

const SignInForms = () => {
	return (
		<Fragment>
			<SignIn1 />
			<br />
			<SignIn2 />
			<br />
			<SignIn3 />
			<br />
			<SignIn4 />
			<br />
			<SignIn5 />
			<br />
		</Fragment>
	);
};

export default SignInForms;

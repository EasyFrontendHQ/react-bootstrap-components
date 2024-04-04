import React, { Fragment, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./SignIn4.css";

/*
{
	"react": "React, { useState, Fragment }",
	"react-bootstrap": "{ Button, Card, Col, Container, Form, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-brands-svg-icons": "{ faFacebook, faGoogle }",
	"@fortawesome/free-solid-svg-icons": "{ faArrowRight }",
}
*/

const SocialLoginButton = () => (
	<Fragment>
		<Button
			variant="primary"
			className="ezy__signin4-btn w-100 d-flex align-items-center mb-3"
		>
			<span className="text-white fs-4 lh-1">
				<FontAwesomeIcon icon={faFacebook} />
			</span>
			<span className="w-100 text-center text-white">
				Continue with Facebook
			</span>
		</Button>
		<Button
			variant="danger"
			className="ezy__signin4-btn w-100 d-flex align-items-center"
		>
			<span className="text-white fs-4 lh-1">
				<FontAwesomeIcon icon={faGoogle} />
			</span>
			<span className="w-100 text-center text-white">Continue with Google</span>
		</Button>
	</Fragment>
);

const SignInForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<Form.Group className="mb-4 mt-2">
				<Form.Label>Email Address</Form.Label>
				<Form.Control type="email" placeholder="Enter Email Address" />
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-2 mt-2">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Enter Password" />
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Check
					type="checkbox"
					id="signin4-remember-me"
					label="Remember me"
				/>
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>

			<Button
				variant=""
				type="submit"
				className="ezy__signin4-btn-submit w-100"
			>
				Log In
				<span className="ms-2 text-white">
					<FontAwesomeIcon icon={faArrowRight} />
				</span>
			</Button>
			<Button variant="" type="button" className="w-100">
				Forget your password?
			</Button>
		</Form>
	);
};

const SignInFormCard = () => (
	<Card className="ezy__signin4-form-card">
		<Card.Body className="p-md-5">
			<h2 className="ezy__signin4-heading mb-3">Welcome to Easy Frontend</h2>
			<p className="mb-4 mb-md-5">
				<span className="mb-0 opacity-50 lh-1">Don't have an account?</span>
				<Button variant="link" className="py-0 text-dark text-decoration-none">
					Create account
				</Button>
			</p>

			<SignInForm />

			<div className="position-relative ezy__signin4-or-separator">
				<hr className="my-4 my-md-5" />
				<span className="px-2">Or</span>
			</div>

			<SocialLoginButton />
		</Card.Body>
	</Card>
);

const SignIn4 = () => {
	return (
		<section className="ezy__signin4 d-flex">
			<Container>
				<Row className="justify-content-between h-100">
					<Col lg={6} className="py-5">
						<Row className="align-items-center h-100 px-lg-5">
							<Col xs={12}>
								<SignInFormCard />
							</Col>
						</Row>
					</Col>
					<Col lg={6}>
						<div
							className="ezy__signin4-bg-holder d-none d-lg-block h-100"
							style={{
								backgroundImage:
									"url(https://cdn.easyfrontend.com/pictures/sign-in-up/sign3.jpg)",
							}}
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default SignIn4;

import React, { Fragment, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./SignIn5.css";

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
			className="ezy__signin5-btn w-100 d-flex align-items-center mb-3"
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
			className="ezy__signin5-btn w-100 d-flex align-items-center"
		>
			<span className="text-white fs-4 lh-1">
				<FontAwesomeIcon icon={faGoogle} />
			</span>
			<span className="w-100 text-center text-white">Continue with Google</span>
		</Button>
	</Fragment>
);

const SignInForm = () => {
	return (
		<Fragment>
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
					id="signin5-remember-me"
					label="Remember me"
				/>
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
		</Fragment>
	);
};

const SignInFormCard = () => {
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
		<Card className="ezy__signin5-form-card">
			<Card.Body className="p-md-5">
				<Row className="mb-4 mb-md-5">
					<Col md={6}>
						<h2 className="ezy__signin5-heading mb-3">
							Welcome to Easy Frontend
						</h2>
					</Col>
					<Col md={6}>
						<p className="mb-0 text-md-end">
							<span className="opacity-50 me-2">Don't have an account?</span>
							<Button
								variant="link"
								className="p-0 text-dark text-decoration-none"
							>
								Create account
							</Button>
						</p>
					</Col>
				</Row>
				<Form
					className="pe-md-4"
					noValidate
					validated={validated}
					onSubmit={handleSubmit}
				>
					<Row className="justify-content-between">
						<Col md={6} lg={5}>
							<SignInForm />
						</Col>
						<Col md={6} lg={5}>
							<Button
								variant=""
								type="submit"
								className="ezy__signin5-btn-submit w-100"
							>
								Log In
								<span className="ms-2 text-white">
									<FontAwesomeIcon icon={faArrowRight} />
								</span>
							</Button>
							<Button variant="" type="button" className="w-100">
								Forget your password?
							</Button>

							<div className="position-relative ezy__signin5-or-separator">
								<hr className="my-4 my-md-5" />
								<span className="px-2">Or</span>
							</div>

							<SocialLoginButton />
						</Col>
					</Row>
				</Form>
			</Card.Body>
		</Card>
	);
};

const SignIn5 = () => {
	return (
		<section className="ezy__signin5 d-flex">
			<Container>
				<Row className="justify-content-center align-items-center h-100">
					<Col lg={10} className="py-5">
						<SignInFormCard />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default SignIn5;

import React, { Fragment, useState } from "react";
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	InputGroup,
	Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

import "./SignUp2.css";

/*
{
	"react": "React, { Fragment, useState }",
	"react-bootstrap": "{ Button, Card, Col, Container, Form, InputGroup, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-brands-svg-icons": "{ faFacebook, faGoogle }"
}
*/

const monthList = [
	{ label: "January", value: 1 },
	{ label: "February", value: 2 },
	{ label: "March", value: 3 },
	{ label: "April", value: 4 },
	{ label: "May", value: 5 },
	{ label: "June", value: 6 },
	{ label: "July", value: 7 },
	{ label: "August", value: 8 },
	{ label: "September", value: 9 },
	{ label: "October", value: 10 },
	{ label: "November", value: 11 },
	{ label: "December", value: 12 },
];
const dayList = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
	23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const SocialLoginButton = () => (
	<Fragment>
		<Button
			variant="primary"
			className="ezy__signup2-btn w-100 d-flex align-items-center mb-3"
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
			className="ezy__signup2-btn w-100 d-flex align-items-center"
		>
			<span className="text-white fs-4 lh-1">
				<FontAwesomeIcon icon={faGoogle} />
			</span>
			<span className="w-100 text-center text-white">Continue with Google</span>
		</Button>
	</Fragment>
);

const SignUpForm = () => {
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
			<Row>
				<Col lg={6}>
					<Form.Group className="mb-4">
						<Form.Label htmlFor="signup2-first-name">First Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Your First Name"
							id="signup2-first-name"
						/>
						<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col lg={6}>
					<Form.Group className="mb-4">
						<Form.Label htmlFor="signup2-last-name">Last Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Your Last Name"
							id="signup2-last-name"
						/>
						<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col xs={12}>
					<Form.Group className="mb-4">
						<Form.Label htmlFor="email" className="mb-2">
							Birth date
						</Form.Label>
						<InputGroup>
							<Form.Select type="day">
								<option value="">Day</option>
								{dayList.map((day, i) => (
									<option value={day} key={i}>
										{day}
									</option>
								))}
							</Form.Select>
							<Form.Select type="month">
								<option value="">Month</option>
								{monthList.map(({ label, value }, i) => (
									<option value={value} key={i}>
										{label}
									</option>
								))}
							</Form.Select>
							<Form.Select type="month">
								<option value="">Year</option>
								{monthList.map(({ label, value }, i) => (
									<option value={value} key={i}>
										{label}
									</option>
								))}
							</Form.Select>
						</InputGroup>
						<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col xs={12}>
					<Form.Group className="mb-4">
						<Form.Label htmlFor="signup2-email" className="mb-2">
							Email
						</Form.Label>
						<Form.Control
							type="email"
							id="signup2-email"
							placeholder="Your Email Address"
						/>
						<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col lg={6}>
					<Form.Group className="mb-4">
						<Form.Label htmlFor="signup2-password" className="mb-2">
							Password
						</Form.Label>
						<Form.Control
							type="password"
							id="signup2-password"
							placeholder="Enter Password"
						/>
						<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col lg={6}>
					<Form.Group className="mb-4">
						<Form.Label htmlFor="signup2-confirm-password" className="mb-2">
							Confirm Password
						</Form.Label>
						<Form.Control
							type="password"
							id="signup2-confirm-password"
							placeholder="Confirm Password"
						/>
						<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
					</Form.Group>
				</Col>
			</Row>
			<Form.Group className="mb-4">
				<Form.Check
					type="checkbox"
					id="signup2-remember-me"
					label={
						<Fragment>
							I accept to the{" "}
							<a href="src/components/bootstrap/categories/signupForms/SignUp2#!">
								terms &amp; condition
							</a>
							,
							<a href="src/components/bootstrap/categories/signupForms/SignUp2#!">
								{" "}
								privacy policy
							</a>
						</Fragment>
					}
				/>
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>

			<Button
				variant=""
				type="submit"
				className="ezy__signup2-btn-submit w-100"
			>
				Sign Up
			</Button>
		</Form>
	);
};

const SignUpFormCard = () => (
	<Card className="ezy__signup2-form-card">
		<Card.Body className="p-0">
			<h2 className="ezy__signup2-heading mb-4 mb-md-5">Sign Up</h2>

			<SignUpForm />

			<div className="position-relative ezy__signup2-or-separator">
				<hr className="my-4 my-md-5" />
				<span className="px-2">Or</span>
			</div>

			<SocialLoginButton />

			<div className="text-center mt-4 mt-md-5">
				<p className="mb-0 opacity-50 lh-1">Already have an account?</p>
				<Button variant="link" className="py-0 text-dark text-decoration-none">
					Sign In
				</Button>
			</div>
		</Card.Body>
	</Card>
);

const SignUp2 = () => {
	return (
		<section className="ezy__signup2 d-flex">
			<Container>
				<Row className="justify-content-between h-100">
					<Col lg={5}>
						<div
							className="ezy__signup2-bg-holder d-none d-lg-block h-100"
							style={{
								backgroundImage:
									"url(https://cdn.easyfrontend.com/pictures/sign-in-up/sign2.jpg)",
							}}
						/>
					</Col>
					<Col lg={6} className="py-5">
						<Row className="align-items-center h-100">
							<Col xs={12}>
								<SignUpFormCard />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default SignUp2;

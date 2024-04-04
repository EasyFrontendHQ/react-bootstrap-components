import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./ContactUs3.css";

/*
{
	"react": "React, { useState }",
	"react-bootstrap": "{ Button, Card, Col, Container, Form, Row }"
}
*/

const ContactForm = () => {
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
			<Form.Group className="mb-3 mt-2">
				<Form.Control type="text" placeholder="Enter Name" />
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3 mt-2">
				<Form.Control type="email" placeholder="Enter Email" />
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Control as="textarea" rows={3} placeholder="Enter Message" />
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
			<div className="text-end">
				<Button variant="" type="submit" className="ezy__contact3-btn">
					Submit
				</Button>
			</div>
		</Form>
	);
};

const ContactFormCard = () => (
	<Card className="ezy__contact3-form-card">
		<Card.Body className="p-md-5">
			<h2 className="ezy__contact3-heading mb-3">Contact Us</h2>
			<p className="ezy__contact3-sub-heading mb-5">
				We list your menu online, help you process orders.
			</p>

			<ContactForm />
		</Card.Body>
	</Card>
);

const ContactUs3 = () => {
	return (
		<section className="ezy__contact3">
			<Container>
				<Row className="py-4">
					<Col lg={7} className="order-lg-2 mb-3 mb-lg-0">
						<div
							className="ezy__contact3-bg-holder h-100"
							style={{
								backgroundImage:
									"url(https://cdn.easyfrontend.com/pictures/contact/contact_3.png)",
							}}
						/>
					</Col>
					<Col lg={5}>
						<ContactFormCard />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ContactUs3;

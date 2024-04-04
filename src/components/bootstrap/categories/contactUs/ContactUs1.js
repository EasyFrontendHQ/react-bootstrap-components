import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./ContactUs1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Form, Row }"
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
		<Form
			className="pe-md-4"
			noValidate
			validated={validated}
			onSubmit={handleSubmit}
		>
			<Form.Group className="mb-3">
				<Form.Control type="text" placeholder="Enter Name" />
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Control type="email" placeholder="Enter Email" />
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Control as="textarea" rows={3} placeholder="Enter Message" />
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
			<div className="text-end">
				<Button variant="" type="submit" className="ezy__contact1-btn mb-3">
					Send
				</Button>
			</div>
		</Form>
	);
};

const ContactUs1 = () => {
	return (
		<section className="ezy__contact1">
			<Container className="position-relative">
				<Row className="py-5 align-items-center">
					<Col lg={6} className="mb-3 mb-lg-0">
						<img
							src="https://cdn.easyfrontend.com/pictures/contact/contact_1.png"
							alt=""
							className="img-fluid ezy__contact1-banner mx-auto"
						/>
					</Col>
					<Col lg={6} className="position-relative">
						<div className="ezy__contact1-shape" />
						<Row className="position-relative">
							<Col md={10} className="mx-auto">
								<div className="ezy__contact1-content rounded text-white my-5 py-4">
									<div className="mb-5">
										<h2 className="ezy__contact1-heading mb-3 mt-0">
											Contact Us
										</h2>
										<p className="ezy__contact1-sub-heading mb-0 text-white">
											We list your menu online, help you process orders.
										</p>
									</div>

									<ContactForm />
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ContactUs1;

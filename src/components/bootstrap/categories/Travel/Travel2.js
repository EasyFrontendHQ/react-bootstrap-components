import React from "react";
import {
	Button,
	Col,
	Container,
	Form,
	Row,
	InputGroup,
	Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlane,
	faTicketAlt,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./Travel2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Form, Row, InputGroup, Card }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faPlane, faTicketAlt, faUser,}",
}
*/

const OrderForm = () => {
	return (
		<Form action="src/components/bootstrap/categories/Travel/Travel2">
			<h5 className="fs-3 mb-3">Let's Find Your Flight</h5>
			<div className="pb-1">
				<Form.Check inline>
					<Form.Check.Input
						type="radio"
						name="ezy__travel2-radios"
						id="ezy__travel2-radios1"
						value="option1"
						checked
					/>
					<Form.Check.Label className="ms-1" htmlFor="ezy__travel2-radios1">
						Return
					</Form.Check.Label>
				</Form.Check>
				<Form.Check inline>
					<Form.Check.Input
						type="radio"
						name="ezy__travel2-radios"
						id="ezy__travel2-radios2"
						value="option2"
					/>
					<Form.Check.Label className="ms-1" htmlFor="ezy__travel2-radios2">
						One-Way
					</Form.Check.Label>
				</Form.Check>
			</div>

			<div className="mt-4">
				<Form.Group className="mb-3">
					<InputGroup className="position-relative">
						<Form.Control type="text" className="ps-5" placeholder="From" />
						<FontAwesomeIcon icon={faPlane} className="ezy__travel2-icon" />

						<hr className="ezy__travel2-hr" />

						<Form.Control type="date" placeholder="Departure Date" />
					</InputGroup>
				</Form.Group>

				<Form.Group className="mb-3">
					<InputGroup className="position-relative">
						<Form.Control type="text" className="ps-5" placeholder="From" />
						<FontAwesomeIcon icon={faPlane} className="ezy__travel2-icon" />

						<hr className="ezy__travel2-hr" />

						<Form.Control type="date" placeholder="Return Date" />
					</InputGroup>
				</Form.Group>
				<Form.Group className="mb-3">
					<InputGroup className="position-relative">
						<Form.Control
							type="text"
							className="ps-5 ezy__travel2-input-item"
							placeholder="Passenger(1 Adult)"
						/>
						<FontAwesomeIcon icon={faUser} className="ezy__travel2-icon" />
					</InputGroup>
				</Form.Group>
				<Form.Group className="mb-3">
					<InputGroup className="position-relative">
						<Form.Control
							type="text"
							className="ps-5 ezy__travel2-input-item"
							placeholder="Promotion Code"
						/>
						<FontAwesomeIcon icon={faTicketAlt} className="ezy__travel2-icon" />
					</InputGroup>
				</Form.Group>
				<div className="text-center mt-lg-5">
					<Button variant="" className="ezy__travel2-submit-btn">
						Let's Go
					</Button>
				</div>
			</div>
		</Form>
	);
};

const Travel2 = () => {
	return (
		<section
			className="ezy__travel2"
			style={{
				backgroundImage:
					"url(https://cdn.easyfrontend.com/pictures/hero/header35-img.png)",
			}}
		>
			<Container>
				<Row className="justify-content-center align-items-center">
					<Col xs={12} lg={7}>
						<h2 className="ezy__travel2-heading mb-4">Your Journey Begins</h2>
						<Row>
							<Col xs={12} lg={10}>
								<p className="ezy__travel2-sub-heading">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									posuere Nulla posuere ipsum molestie sem volutpat, non
									imperdiet leo porttitor. Nullam tortor nibh, dictum vitae
									porttitor eu, pharetra nec tellus.
								</p>
							</Col>
						</Row>
					</Col>
					<Col xs={12} lg={5} className="mt-5 mt-lg-0">
						<Card className="ezy__travel2-card rounded-0 border-0">
							<Card.Body className="p-4 p-lg-5">
								<OrderForm />
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Travel2;

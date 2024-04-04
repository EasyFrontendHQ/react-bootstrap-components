import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./BuyTicket2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Form, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faAngleRight }",
	"prop-types": "PropTypes",
}
*/

const tickets = [
	{
		label: "Day 1",
		price: "15",
		currency: "$",
		features: ["Includes breakfast, lunch and snacks during the day"],
	},
	{
		label: "Day 2",
		price: "25",
		currency: "$",
		features: ["Includes breakfast, lunch and snacks during the day"],
	},
];

const Ticket = ({ ticket }) => (
	<div className="ezy__buyticket2-item-inner-wrapper text-center">
		<div className="ezy__buyticket2-item-header px-3 py-4">
			<h3 className="ezy__buyticket2-item-title">{ticket.label}</h3>
			<div className="ezy__buyticket2-item-price">
				Ticket price only {ticket.currency}
				{ticket.price}
			</div>
		</div>
		<div className="ezy__buyticket2-item-key-features">
			<ul>
				{ticket.features.map((feature, i) => (
					<li key={i}>{feature}</li>
				))}
			</ul>
		</div>
	</div>
);

Ticket.propTypes = {
	ticket: PropTypes.object.isRequired,
};

const TicketFields = ({ ticket, index }) => (
	<Card.Body className="d-flex justify-content-between align-items-center px-md-5 py-md-4">
		<div className="d-flex">
			<Form.Check type="checkbox" name={`day_${index}`} id={`day_${index}`} />
			<label htmlFor={`day_${index}`} className="ms-2 fs-5 text-uppercase">
				{ticket.label}
			</label>
		</div>
		<Form.Group>
			<Form.Control
				name={`number-of-ticket-${index}`}
				className="ezy__buyticket2-qty px-0 text-center"
				type="text"
				data-value="15"
				required={true}
				placeholder="QTY"
			/>
		</Form.Group>
	</Card.Body>
);

TicketFields.propTypes = {
	ticket: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const Buyticket2 = () => {
	return (
		<section className="ezy__buyticket2" id="ezy__buyticket2">
			<Container>
				<Row className="section-separator">
					<Col xs={12} className="text-center text-sm-start">
						<h2 className="ezy__buyticket2-heading mb-0">Book Your Ticket</h2>
						<p className="ezy__buyticket2-sub-heading ms-sm-4">
							We have worked with hundreds of clients.
						</p>
					</Col>

					<Col xs={12} className="pricing-table pricing-table-1 mt-5">
						<Row className="justify-content-center mx-0">
							{tickets.map((ticket, i) => (
								<Col
									xs={12}
									md={6}
									className="px-0 ezy__buyticket2-item"
									key={i}
								>
									<Ticket ticket={ticket} />
								</Col>
							))}
							<Col xs={12} md={6}>
								<Card className="ezy__buyticket2-form-card rounded-0 border-0">
									{tickets.map((ticket, i) => (
										<TicketFields ticket={ticket} index={i + 1} key={i} />
									))}
									<Card.Body className="p-md-5">
										<Form.Group>
											<Form.Control
												name="name"
												className="px-0"
												type="text"
												required=""
												placeholder="Enter Your Name"
											/>
										</Form.Group>
										<Form.Group className="mt-4">
											<Form.Control
												name="email"
												className="px-0"
												type="email"
												required=""
												placeholder="Enter Your Email"
											/>
										</Form.Group>

										<div className="mt-4 mt-md-5 text-center">
											<Button variant="outline-light">
												Proceed to Checkout
												<FontAwesomeIcon icon={faAngleRight} className="ms-1" />
											</Button>
										</div>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Buyticket2;

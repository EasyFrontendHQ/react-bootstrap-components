import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCamera,
	faCannabis,
	faRandom,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./Service4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Card, Col, Container, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faCamera, faCannabis, faRandom }",
	"prop-types": "PropTypes"
}
*/

const serviceList = [
	{
		icon: faCannabis,
		title: "Product Design",
		description:
			"More off this less hello salamander lied porpoise much over tightly circa horse taped.Some quick example text to build.",
	},
	{
		icon: faRandom,
		title: "Content Marketing",
		description:
			"It’s easier to reach yours have the right savings account. It’s easier to reach your savings goals when you have the right savings account.",
	},
	{
		icon: faCamera,
		title: "Digital Strategy",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
];

const ServiceItem = ({ service }) => (
	<Card className="ezy__service4-item">
		<Card.Body className="px-lg-4 py-lg-5">
			<div className="ezy__service4-icon mb-4">
				<FontAwesomeIcon icon={service.icon} />
			</div>
			<h4 className="ezy__service4-title fs-4 mb-3">{service.title}</h4>
			<p className="ezy__service4-content mb-0">{service.description}</p>
		</Card.Body>
	</Card>
);

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
};

const Service4 = () => {
	return (
		<section className="ezy__service4">
			<Container>
				<Row className="justify-content-center mb-md-5">
					<Col lg={6} className="text-center">
						<h2 className="ezy__service4-heading mb-4">Our Services</h2>
						<p className="ezy__service4-sub-heading mb-0">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
						</p>
					</Col>
				</Row>
				<Row className="ezy__service4-card">
					{serviceList.map((service, i) => (
						<Col md={4} className="mt-5 mt-md-0" key={i}>
							<ServiceItem service={service} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Service4;

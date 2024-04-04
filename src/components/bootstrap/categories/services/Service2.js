import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCamera,
	faCannabis,
	faRandom,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./Service2.css";

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
		title: "Branding",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
	{
		icon: faRandom,
		title: "Content Marketing",
		description:
			"It’s easier to reach yours have the right savings account. It’s easier to reach your savings goals when you have the right savings account",
	},
	{
		icon: faCamera,
		title: "Web Development",
		description:
			"Sed ut in perspiciatis unde omnis iste natus error sit on i tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
	},
];

const ServiceItem = ({ service }) => (
	<Card className="ezy__service2-item">
		<Card.Body className="px-lg-4 py-lg-5">
			<div className="ezy__service2-icon mb-4">
				<FontAwesomeIcon icon={service.icon} />
			</div>
			<h4 className="ezy__service2-title fs-4 mb-3">{service.title}</h4>
			<p className="ezy__service2-content mb-0">{service.description}</p>
		</Card.Body>
	</Card>
);

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
};

const Service2 = () => {
	return (
		<section className="ezy__service2">
			<Container>
				<Row className="justify-content-center mb-md-5">
					<Col lg={6} className="text-center">
						<h2 className="ezy__service2-heading mb-4">Our Services</h2>
						<p className="ezy__service2-sub-heading mb-0">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
						</p>
					</Col>
				</Row>
				<Row className="text-center ezy__service2-card">
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

export default Service2;

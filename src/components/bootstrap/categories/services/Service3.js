import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCamera,
	faCannabis,
	faRandom,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./Service3.css";

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
		title: "SEO Analysis",
		description:
			"It’s easier to reach yours have the right savings account. It’s easier to reach your savings goals when you have the right savings account.",
	},
	{
		icon: faRandom,
		title: "Content Marketing",
		description:
			"Sed ut in perspiciatis unde omnis iste natus error sit on i tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
	},
	{
		icon: faCamera,
		title: "Photography",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
];

const ServiceItem = ({ service }) => (
	<Card className="ezy__service3-item mt-5">
		<Card.Body className="ezy__service3-icon">
			<FontAwesomeIcon icon={service.icon} />
		</Card.Body>
		<Card.Body className="px-lg-4 pt-4 pb-lg-5">
			<h4 className="ezy__service3-title fs-4 mb-3">{service.title}</h4>
			<p className="ezy__service3-content mb-0">{service.description}</p>
		</Card.Body>
	</Card>
);

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
};

const Service3 = () => {
	return (
		<section className="ezy__service3">
			<Container>
				<Row className="justify-content-center mb-md-4">
					<Col lg={6} className="text-center">
						<h2 className="ezy__service3-heading mb-4">What We Do</h2>
						<p className="ezy__service3-sub-heading mb-0">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
						</p>
					</Col>
				</Row>
				<Row className="ezy__service3-card">
					{serviceList.map((service, i) => (
						<Col md={4} className="mt-5" key={i}>
							<ServiceItem service={service} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Service3;

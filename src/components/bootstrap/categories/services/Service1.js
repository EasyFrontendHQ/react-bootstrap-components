import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCamera,
	faCannabis,
	faRandom,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./Service1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
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
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
	{
		icon: faRandom,
		title: "Content Marketing",
		description:
			"More off this less hello salamander lied porpoise much over tightly circa horse taped.Some quick example text to build.",
	},
	{
		icon: faCamera,
		title: "Digital Strategy",
		description:
			"Vitae bibendum egestas magna sit elit non. Netus volutpat felis Orci commodo mauris digital industry is booming adipiscing semper amet.",
	},
];

const ServiceItem = ({ service }) => (
	<div className="p-xl-4">
		<div className="ezy__service1-icon mb-4">
			<FontAwesomeIcon icon={service.icon} />
		</div>
		<h4 className="ezy__service1-title fs-4 mb-3">{service.title}</h4>
		<p className="ezy__service1-content mb-0">{service.description}</p>
	</div>
);

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
};

const Service1 = () => {
	return (
		<section className="ezy__service1">
			<Container>
				<Row className="justify-content-center mb-4 mb-sm-5">
					<Col lg={6} className="text-center">
						<h2 className="ezy__service1-heading mb-4">Our Services</h2>
						<p className="ezy__service1-sub-heading mb-4">
							It’s no secret that the digital industry is booming. From exciting
							Viverra tellus startups to global brands.
						</p>
					</Col>
				</Row>
				<Row className="ezy__service1-card">
					{serviceList.map((service, i) => (
						<Col md={4} key={i}>
							<ServiceItem service={service} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Service1;

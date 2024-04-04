import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Service5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Card, Col, Container, Row }",
	"prop-types": "PropTypes"
	"classnames": "classNames"
}
*/

const serviceList = [
	{
		icon: "https://cdn.easyfrontend.com/pictures/services/service_illustration_1.svg",
		title: "Web Design",
		description:
			"It’s easier to reach yours have the right savings account. It’s easier to reach your savings goals when you have the right savings account",
	},
	{
		active: true,
		icon: "https://cdn.easyfrontend.com/pictures/services/service_illustration_3.svg",
		title: "Product Rise",
		description:
			"Sed ut in perspiciatis unde omnis iste natus error sit on i tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
	},
	{
		icon: "https://cdn.easyfrontend.com/pictures/services/service_illustration_2.svg",
		title: "Data Managment",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
];

const ServiceItem = ({ service }) => (
	<Card
		className={classNames("ezy__service5-card", { active: service.active })}
	>
		<Card.Body className="px-lg-4 py-lg-5">
			<img
				className="ezy__service5-icon mb-4"
				src={service.icon}
				alt={service.title}
				width="150"
			/>
			<h4 className="ezy__service5-title fs-4 mb-3">{service.title}</h4>
			<p className="ezy__service5-content mb-0">{service.description}</p>
		</Card.Body>
	</Card>
);

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
};

const Service5 = () => {
	return (
		<section className="ezy__service5">
			<Container>
				<Row className="justify-content-center mb-md-5">
					<Col lg={6} className="text-center">
						<h2 className="ezy__service5-heading mb-4">Our Sectors of Work</h2>
						<p className="ezy__service5-sub-heading mb-0">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
						</p>
					</Col>
				</Row>
				<div className="ezy__service5-list text-center p-3">
					<Row>
						{serviceList.map((service, i) => (
							<Col md={4} className="mt-5 mt-md-0" key={i}>
								<ServiceItem service={service} />
							</Col>
						))}
					</Row>
				</div>
			</Container>
		</section>
	);
};

export default Service5;

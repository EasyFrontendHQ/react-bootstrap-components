import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import "./Careers1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
	"prop-types": "PropTypes",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faClock, faMapMarkerAlt }"
}
*/
const contents = [
	{
		title: "Front-End Developer",
		location: "Remote friendly",
		time: "Full time",
	},
	{
		title: "Back-End Developer",
		location: "Remote friendly",
		time: "Full time",
	},
];

const CareerCard = ({ content }) => {
	return (
		<Card className="ezy__careers1-card border-0 my-2">
			<Card.Body className="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 p-md-4">
				<h5 className="ezy__careers1-title mb-2 mb-md-0">{content.title}</h5>
				<div className="d-flex flex-wrap justify-content-center">
					<div className="ezy__careers1-location d-flex align-items-center my-1 mx-2 mx-sm-3">
						<FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
						<p className="ezy__careers1-details mb-0">{content.location}</p>
					</div>
					<div className="ezy__careers1-time d-flex align-items-center my-1 mx-2 mx-sm-3">
						<FontAwesomeIcon icon={faClock} className="me-2" />
						<p className="ezy__careers1-details mb-0">{content.time}</p>
					</div>
					<Button
						variant="primary"
						className="px-3 py-1 py-md-2 my-1 mx-2 mx-sm-3"
					>
						View job
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

CareerCard.propTypes = {
	content: PropTypes.object.isRequired,
};

const Careers1 = () => {
	return (
		<section className="ezy__careers1">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={8} className="text-center">
						<h1 className="ezy__careers1-heading mb-3">Join our team</h1>
						<p className="ezy__careers1-sub-heading">
							Our philosophy is simple - hire a team of diverse, passionate
							people and faster a culture that empowers you to do the best work
						</p>
					</Col>
					<Col xs={12} className="mt-5">
						{contents.map((content, i) => (
							<CareerCard content={content} key={i} />
						))}
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Careers1;

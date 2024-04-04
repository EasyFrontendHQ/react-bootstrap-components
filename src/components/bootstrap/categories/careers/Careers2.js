import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import "./Careers2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Card, Col, Container, Row }",
	"prop-types": "PropTypes",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faClock, faMapMarkerAlt }"
}
*/
const contents = [
	{
		title: "Front-End Developer",
		desc: "We are looking for a mid level front-end developer to join our team.",
		location: "Remote friendly",
		time: "Full time",
	},
	{
		title: "Back-End Developer",
		desc: "We are looking for a mid level back-end developer to join our team.",
		location: "Remote friendly",
		time: "part time",
	},
	{
		title: "UI/UX Designer",
		desc: "We are looking for a mid level back-end developer to join our team.",
		location: "Remote friendly",
		time: "Full time",
	},
	{
		title: "Product Designer",
		desc: "We are looking for a mid level back-end developer to join our team.",
		location: "Remote friendly",
		time: "Full time",
	},
	{
		title: "Project Manager",
		desc: "We are looking for a mid level back-end developer to join our team.",
		location: "Remote friendly",
		time: "part time",
	},
];

const CareerCard = ({ content }) => {
	return (
		<Card className="ezy__careers2-card border-0 mt-3">
			<Card.Body className="d-flex flex-column p-3 p-md-4">
				<h5 className="ezy__careers2-title">
					<a href="src/components/bootstrap/categories/careers/Careers2#!">
						{content.title}
					</a>
				</h5>
				<p className="ezy__careers2-sub-title">{content.desc}</p>
				<div className="d-flex">
					<div className="ezy__careers2-location d-flex align-items-center me-2 me-sm-4">
						<FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
						<p className="ezy__careers2-details mb-0">{content.location}</p>
					</div>
					<div className="ezy__careers2-time d-flex align-items-center me-2 me-sm-4">
						<FontAwesomeIcon icon={faClock} className="me-2" />
						<p className="ezy__careers2-details mb-0">{content.time}</p>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

CareerCard.propTypes = {
	content: PropTypes.object.isRequired,
};

const Careers2 = () => {
	return (
		<section className="ezy__careers2">
			<Container>
				<Row className="justify-content-between">
					<Col xs={12} md={5} className="text-center text-md-start">
						<h1 className="ezy__careers2-heading mb-3">Join our team</h1>
						<p className="ezy__careers2-sub-heading">
							Our philosophy is simple - hire a team of diverse, passionate
							people and faster a culture that empowers you to do the best work
						</p>
					</Col>
					<Col xs={12} md={6}>
						{contents.map((content, i) => (
							<CareerCard content={content} key={i} />
						))}
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Careers2;

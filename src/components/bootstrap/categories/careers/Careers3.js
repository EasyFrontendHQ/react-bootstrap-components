import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

import "./Careers3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
	"prop-types": "PropTypes",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faArrowAltCircleRight }"
}
*/
const contents = [
	{
		title: "Front-End Developer",
		desc: "We are looking for a mid level front-end developer to join our team.",
	},
	{
		title: "Back-End Developer",
		desc: "We are looking for a mid level back-end developer to join our team.",
	},
	{
		title: "UI/UX Designer",
		desc: "We are looking for a mid level back-end developer to join our team.",
	},
	{
		title: "Product Designer",
		desc: "We are looking for a mid level back-end developer to join our team.",
	},
	{
		title: "Project Manager",
		desc: "We are looking for a mid level back-end developer to join our team.",
	},
	{
		title: "Front-End Developer",
		desc: "We are looking for a mid level front-end developer to join our team.",
	},
];

const CareerCard = ({ content }) => {
	return (
		<Card className="ezy__careers3-card mt-3 mt-md-4">
			<Card.Body className="d-flex p-3 p-md-4">
				<Row className="justify-content-between">
					<Col xs={12} lg={8}>
						<h5 className="ezy__careers3-title">{content.title}</h5>
						<p className="ezy__careers3-sub-title me-0 me-lg-4">
							{content.desc}
						</p>
					</Col>
					<Col xs={12} lg={4} className="text-start text-lg-end">
						<Button variant="" className="ezy__careers3-btn p-0">
							View job
							<FontAwesomeIcon icon={faArrowAltCircleRight} className="ms-2" />
						</Button>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

CareerCard.propTypes = {
	content: PropTypes.object.isRequired,
};

const Careers3 = () => {
	return (
		<section className="ezy__careers3">
			<Container>
				<Row className="justify-content-between">
					<Col xs={12} md={5} className="text-center text-md-start">
						<h1 className="ezy__careers3-heading mb-3">Join our team</h1>
						<p className="ezy__careers3-sub-heading">
							Our philosophy is simple - hire a team of diverse, passionate
							people and faster a culture that empowers you to do the best work
						</p>
					</Col>
				</Row>
				<Row className="mt-md-4">
					{contents.map((content, i) => (
						<Col xs={12} md={6} key={i}>
							<CareerCard content={content} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Careers3;

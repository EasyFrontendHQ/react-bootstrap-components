import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

import "./Careers4.css";

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
	},
	{
		title: "Back-End Developer",
	},
	{
		title: "UI/UX Designer",
	},
	{
		title: "Product Designer",
	},
	{
		title: "Project Manager",
	},
];

const CareerCard = ({ content }) => {
	return (
		<Card className="ezy__careers4-card border-0 mt-3">
			<Card.Body className="d-flex flex-column flex-sm-row align-items-center justify-content-between p-3 p-md-4">
				<h5 className="ezy__careers4-title mb-2 mb-sm-0">{content.title}</h5>
				<Button variant="" className="ezy__careers4-btn">
					View job{" "}
					<FontAwesomeIcon icon={faArrowAltCircleRight} className="ms-2" />
				</Button>
			</Card.Body>
		</Card>
	);
};

CareerCard.propTypes = {
	content: PropTypes.object.isRequired,
};

const Careers4 = () => {
	return (
		<section className="ezy__careers4">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={5} className="text-center">
						<h1 className="ezy__careers4-heading mb-3">Join our team</h1>
						<p className="ezy__careers4-sub-heading">
							Our philosophy is simple - hire a team of diverse, passionate
							people and faster a culture that empowers you to do the best work
						</p>
					</Col>
				</Row>
				<Row className="mt-md-4 justify-content-center">
					{contents.map((content, i) => (
						<Col xs={12} md={10} key={i}>
							<CareerCard content={content} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Careers4;

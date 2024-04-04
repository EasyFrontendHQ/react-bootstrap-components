import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faComments,
	faCompass,
	faServer,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./AboutUs3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Card, Col, Container, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faComments, faCompass, faServer }",
	 "prop-types": "PropTypes"
}
*/

const aboutList = [
	{
		icon: faServer,
		title: "Flexible Learning",
		content:
			"Take classes at your own pace with on-demand videos and class workbooks.",
	},
	{
		icon: faComments,
		title: "Engaging Community",
		content:
			"Participate in student opportunities and connect with other students on the CourseCloud.",
	},
	{
		icon: faCompass,
		title: "Explore",
		content:
			"MasterClass offers full refunds up to 30 days after gift redemption.",
	},
];

const AboutItem = ({ about }) => (
	<Card className="text-center mt-4">
		<span>
			<FontAwesomeIcon icon={about.icon} className="ezy__about3-icon" />
		</span>
		<Card.Body>
			<Card.Title>{about.title}</Card.Title>
			<Card.Text>{about.content}</Card.Text>
		</Card.Body>
	</Card>
);

AboutItem.propTypes = {
	about: PropTypes.object.isRequired,
};

const AboutUs3 = () => {
	return (
		<section className="ezy__about3">
			<Container>
				<Row className="justify-content-center">
					<Col md={6} className="text-center">
						<h1 className="ezy__about3-heading">What is CourseCloud Live?</h1>
					</Col>
				</Row>
				<Row className="mt-4">
					{aboutList.map((about, i) => (
						<Col xs={12} md={4} key={i}>
							<AboutItem about={about} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default AboutUs3;

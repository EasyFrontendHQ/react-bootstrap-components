import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./HowItWorks4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Card, Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faPlay }",
    "prop-types": "PropTypes"
}
*/

const contents = [
	{
		title: "Custom Analytics",
		text: "Partner removes the hassle and confusion that comes from managing your tax burden effectively.",
	},
	{
		title: "Policy Setting",
		text: "More off this less hello salamander lied porpoise much over tightly circa horse taped.",
	},
	{
		title: "Free Enrollment",
		text: "This is a factor in the economy of a nation, and the administration takes the major choices.",
	},
	{
		title: "Shipping",
		text: "It’s no secret that the digital industry is booming. From exciting startups to global brands..",
	},
];

const ContentItem = ({ item, index }) => (
	<Card className="border-0 mb-3">
		<Card.Body className="text-center">
			<div className="ezy__howitworks4-number d-flex justify-content-center align-items-center mb-4">
				<span>{index + 1}</span>
			</div>
			<h5 className="mb-3">{item.title}</h5>
			<p className="mb-0">{item.text}</p>
		</Card.Body>
	</Card>
);

ContentItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const HowItWorks4 = () => {
	return (
		<section className="ezy__howitworks4">
			<div className="ezy__howitworks4-content-wrapper">
				<Container>
					<Row className="justify-content-center">
						<Col xs={12} md={6} className="text-center">
							<h1 className="ezy__howitworks4-heading mb-4">
								Learn the working criteria of us
							</h1>
							<p className="ezy__howitworks4-sub-heading">
								Coquettish darn pernicious foresaw therefore much amongst
								lingeringly shed much due antagonistically alongside so then
								more.
							</p>
						</Col>
					</Row>
				</Container>
			</div>

			<Container>
				<Row className="mt-5">
					{contents.map((item, i) => (
						<Col xs={12} md={6} lg={3} key={i}>
							<ContentItem index={i} item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default HowItWorks4;

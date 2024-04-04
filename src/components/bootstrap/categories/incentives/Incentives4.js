import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAward,
	faRibbon,
	faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./Incentives4.css";

/*
{
	"react": "React,
	"react-bootstrap": "{ Card, Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": {faAward, faRibbon, faShippingFast },
	"prop-types": "PropTypes",
}
*/
const incentives = [
	{
		icon: faAward,
		title: "Quality Materials",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem.",
	},
	{
		icon: faShippingFast,
		title: "Quality Materials",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem.",
	},
	{
		icon: faRibbon,
		title: "Quality Materials",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem.",
	},
];

const IncentiveItem = ({ item }) => (
	<Card className="border-0 bg-transparent">
		<Card.Body className="p-4">
			<div className="ezy__incentives4-icon">
				<FontAwesomeIcon icon={item.icon} />
			</div>
			<h3 className="mt-2 fs-4">{item.title}</h3>
			<p>{item.desc}</p>
		</Card.Body>
	</Card>
);

IncentiveItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Incentives4 = () => {
	return (
		<section className="ezy__incentives4">
			<Container>
				<Row className="justify-content-center text-center">
					<Col xs={12} md={8}>
						<h1 className="ezy__incentives4-heading mb-4">
							We built best Business for you.
						</h1>
						<p className="mb-5">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							nec consequat lorem. Maecenas elementum at diam consequat
							bibendum.
						</p>
					</Col>
				</Row>
				<Card className="ezy__incentives4-card border-0 p-4">
					<Row className="text-center">
						{incentives.map((item, i) => (
							<Col xs={12} sm={6} lg={4} className="mt-4" key={i}>
								<IncentiveItem item={item} />
							</Col>
						))}
					</Row>
				</Card>
			</Container>
		</section>
	);
};

export default Incentives4;

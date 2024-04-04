import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./Numbers5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
	"prop-types": "PropTypes"
}
*/

const cards = [
	{
		count: "754",
		title: "Completed Event",
	},
	{
		count: "19k",
		title: "Game Completed",
	},
	{
		count: "53",
		title: "Completed Fund",
	},
	{
		count: "111",
		title: "Completed Ticket",
	},
];

const CardItem = ({ item }) => (
	<>
		<h3 className="mb-3 mb-md-4">{item.count}</h3>
		<h5>{item.title}</h5>
	</>
);

CardItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Numbers5 = () => {
	return (
		<section className="ezy__numbers5">
			<Container>
				<Row className="text-center">
					{cards.map((item, i) => (
						<Col xs={12} sm={6} lg={3} className="mb-5 mb-lg-0" key={i}>
							<CardItem item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Numbers5;

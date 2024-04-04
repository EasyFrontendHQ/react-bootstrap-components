import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./Numbers2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Card, Col, Container, Row }",
	"prop-types": "PropTypes"
}
*/

const cards = [
	{
		count: "432",
		title: "Completed Event",
		detail:
			"Partner removes the hassle and confusion that comes from managing.",
	},
	{
		count: "758",
		title: "Game Completed",
		detail:
			"It’s no secret that the digital. From exciting startups to global brands.",
	},
	{
		count: "31+",
		title: "Completed Fund",
		detail: "Sed ut in perspiciatis unde omnis istema natus error sit tatem.",
	},
	{
		count: "994+",
		title: "Completed Ticket",
		detail:
			"Viverra tellus in hac habitasse platea dictumst tempor id eu nisl.",
	},
];

const CardItem = ({ item }) => (
	<Card className="border-0 mb-3">
		<Card.Body>
			<h3 className="mb-3">{item.count}</h3>
			<h5>{item.title}</h5>
			<p className="mb-0">{item.detail}</p>
		</Card.Body>
	</Card>
);

CardItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Cards = () => {
	const divider = Math.ceil(cards.length / 2);

	return (
		<>
			<div className="d-flex flex-column flex-sm-row">
				{cards.slice(0, divider).map((item, i) => (
					<CardItem item={item} key={i} />
				))}
			</div>

			<div className="d-flex flex-column flex-sm-row">
				{cards.slice(divider).map((item, i) => (
					<CardItem item={item} key={i} />
				))}
			</div>
		</>
	);
};

const Numbers2 = () => {
	return (
		<section className="ezy__numbers2">
			<Container>
				{/* heading  */}
				<Row className="justify-content-between">
					<Col xs={12} lg={6}>
						<div className="ezy__numbers2-contents-wrapper">
							<h1 className="ezy__numbers2-heading mb-3">
								Some Important Numbers
							</h1>
							<p className="ezy__numbers2-sub-heading mb-5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
								quod perferendis nihil cupiditate aliquid qui exercitationem
								labore veritatis eaque nobis libero earum.
							</p>
						</div>

						{/* cards  */}
						<Cards />
					</Col>
					<Col
						xs={12}
						lg={5}
						className="d-flex justify-content-center align-items-end"
					>
						<img
							src="https://cdn.easyfrontend.com/pictures/numbers2.jpg"
							alt=""
							className="img-fluid mt-5 mt-md-0"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Numbers2;

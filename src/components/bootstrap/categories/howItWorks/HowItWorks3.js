import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./HowItWorks3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Card, Col, Container, Row }",
    "prop-types": "PropTypes"
}
*/

const contents = [
	{
		title: "Product Design",
		text: "Partner removes the hassle and confusion that comes from managing your tax burden effectively.",
	},
	{
		title: "Customaizing",
		text: "This is a factor in the economy of a nation, and the administration takes the major choices.",
	},
	{
		title: "Policy Setting",
		text: "It’s no secret that the digital industry is booming. From exciting startups to global brands..",
	},
	{
		title: "Custom Analytics",
		text: "More off this less hello salamander lied porpoise much over tightly circa horse taped.",
	},
	{
		title: "Distribution",
		text: "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
	},
	{
		title: "Free Return",
		text: "Banking crises have developed many times banking sector as a whole.",
	},
];

const ContentItem = ({ item, index }) => (
	<Card className="border-0 mb-3">
		<Card.Body>
			<div className="ezy__howitworks3-number d-flex justify-content-center align-items-center mb-4">
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

const HowItWorks3 = () => {
	return (
		<section className="ezy__howitworks3">
			<Container>
				<Row className="align-items-center justify-content-between">
					<Col xs={12} md={5}>
						<h1 className="ezy__howitworks3-heading mb-4">
							Build and launch without problems
						</h1>
						<p className="ezy__howitworks3-sub-heading">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Perferendis sit, adipisci consectetur repellendus magni quae totam
							temporibus.
						</p>
					</Col>
					<Col xs={12} md={5}>
						<img
							src="https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg"
							alt=""
							className="img-fluid mb-5 mb-md-0"
						/>
					</Col>
				</Row>
				<Row className="mt-5">
					{contents.map((item, i) => (
						<Col xs={12} md={6} lg={4} key={i}>
							<ContentItem index={i} item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default HowItWorks3;

import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./EPFeature1.css";

/*
{
	"react": "React,
	"react-bootstrap": "{ Card, Col, Container, Row }",
	"prop-types": "PropTypes",
}
*/
const features = [
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/feature1_1.png",
		title:
			"Series overview Introduction to colors The colortbl package The xcolor package The colortab package.",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/feature1_2.png",
		title:
			"Series overview Introduction to colors The colortbl package The xcolor package The colortab package.",
	},
];

const FeatureItem = ({ item }) => (
	<Card className="border-0 mt-5">
		<Card.Body className="py-3">
			<div className="text-center mt-lg-3">
				<img src={item.img} alt="" className="img-fluid rounded" />
			</div>
			<p className="mt-3 mx-md-3">{item.title}</p>
		</Card.Body>
	</Card>
);

FeatureItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const ePFeature1 = () => {
	return (
		<section className="ezy__epfeature1">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={8} className="text-center">
						<h1 className="ezy__epfeature1-heading">Know about our product</h1>
						<p className="ezy__epfeature1-sub-heading my-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							nec consequat lorem. Maecenas elementum at diam consequat
							bibendum.
						</p>
					</Col>
				</Row>
				<Row className="row">
					{/* item */}
					{features.map((item, i) => (
						<Col xs={12} md={6} key={i}>
							<FeatureItem item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default ePFeature1;

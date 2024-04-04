import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./EPFeature4.css";

/*
{
	"react": "React,
	"react-bootstrap": "{ Col, Container, Row }",
	"prop-types": "PropTypes",
}
*/
const features = [
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/feature4_1.png",
		title:
			"Series overview Introduction to colors The colortbl package The colortab package.",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/feature4_2.png",
		title:
			"Series overview Introduction to colors The colortbl package The colortab package.",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/feature4_3.png",
		title:
			"Series overview Introduction to colors The colortbl package The colortab package.",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/feature4_4.png",
		title:
			"Series overview Introduction to colors The colortbl package The colortab package.",
	},
];

const FeatureItem = ({ item }) => (
	<div className="card border-0 mt-5">
		<div className="card-body py-3">
			<div className="text-center mt-lg-3">
				<img src={item.img} alt="" className="img-fluid rounded" />
			</div>
			<p className="mt-3 text-center text-md-start">{item.title}</p>
		</div>
	</div>
);

FeatureItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const ePFeature4 = () => {
	return (
		<section className="ezy__epfeature4">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={8} className="text-center">
						<h1 className="ezy__epfeature4-heading">Know about our product</h1>
					</Col>
				</Row>
				<Row>
					{features.map((item, i) => (
						<Col xs={12} md={6} lg={3} key={i}>
							<FeatureItem item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default ePFeature4;

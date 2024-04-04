import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./EPFeature2.css";

/*
{
	"react": "React,
	"react-bootstrap": "{ Col, Container, Row }",
	"prop-types": "PropTypes",
}
*/
const features = [
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_1.png",
		title: "Modern and New style",
		desc: "Series overview Introduction to colors The colortbl package The xcolor package The colortab package,Series overview Introduction to colors The colortbl package The xcolor package The colortab package. Series overview Introduction to colors The colortbl package The xcolor package The colortab package,Series overview Introduction to colors The colortbl package The xcolor package The colortab package.",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_2.png",
		title: "Flexible and stylish",
		desc: "Series overview Introduction to colors The colortbl package The xcolor package The colortab package,Series overview Introduction to colors The colortbl package The xcolor package The colortab package. Series overview Introduction to colors The colortbl package The xcolor package The colortab package,Series overview Introduction to colors The colortbl package The xcolor package The colortab package.",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_3.png",
		title: "Comfort and good for Health",
		desc: "Series overview Introduction to colors The colortbl package The xcolor package The colortab package,Series overview Introduction to colors The colortbl package The xcolor package The colortab package. Series overview Introduction to colors The colortbl package The xcolor package The colortab package,Series overview Introduction to colors The colortbl package The xcolor package The colortab package.",
	},
];

const FeatureItem = ({ item }) => (
	<>
		<Col xs={12} lg={5}>
			<div className="text-center">
				<img src={item.img} alt="" className="img-fluid rounded" />
			</div>
		</Col>
		<Col xs={12} lg={7}>
			<div className="d-flex flex-column justify-content-center text-center text-lg-start h-100 mt-4 mt-lg-0 ms-lg-4">
				<h2>{item.title}</h2>
				<p className="mt-3 me-lg-5">{item.desc}</p>
			</div>
		</Col>
	</>
);

FeatureItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const ePFeature2 = () => {
	return (
		<section className="ezy__epfeature2">
			<Container>
				<Row>
					{features.map((item, i) => (
						<Col xs={12} key={i}>
							<Row className="justify-content-between mt-5">
								<FeatureItem item={item} />
							</Row>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default ePFeature2;

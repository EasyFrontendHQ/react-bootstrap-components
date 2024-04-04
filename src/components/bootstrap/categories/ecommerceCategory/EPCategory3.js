import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./EPCategory3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Card, Col, Container, Row }",
	"prop-types": "PropTypes",
}
*/

const products = [
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product25.jpg",
		title: "Holiday Season",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product26.jpg",
		title: "For Him",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product35.jpg",
		title: "For Kids",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product28.jpg",
		title: "Indoors",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product29.jpg",
		title: "For Her",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product30.jpg",
		title: "Best Discounts",
	},
];

const ProductItem = ({ product }) => {
	return (
		<a href="src/components/bootstrap/categories/ecommerceCategory/EPCategory3#!">
			<Card className="ezy__epcategory3-card">
				<div className="ezy__epcategory3-card-img d-flex justify-content-center align-items-center">
					<img src={product.img} className="rounded-circle" alt="..." />
				</div>
				<Card.Body>
					<h2 className="ezy__epcategory3-title my-2">{product.title}</h2>
				</Card.Body>
			</Card>
		</a>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
};

const Epcategory3 = () => {
	return (
		<section className="ezy__epcategory3">
			<Container>
				<Row>
					<Col xs={12} className="text-center text-xl-start">
						<h2 className="ezy__epcategory3-heading ms-3">Shop By Category</h2>
					</Col>
				</Row>

				<Row className="text-center justify-content-start justify-content-xl-center mt-4 mt-md-5">
					{products.map((product, i) => (
						<Col xs={12} sm={6} md={4} lg={3} xl={2} className="mt-4" key={i}>
							<ProductItem product={product} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Epcategory3;

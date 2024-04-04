import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./EPCategory2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
	"prop-types": "PropTypes",
}
*/

const products = [
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product23.png",
		title: "Fashion",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product12.png",
		title: "Perfume",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product18.png",
		title: "Shoes",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product8.png",
		title: "Kitchen",
	},
];

const ProductItem = ({ product }) => {
	return (
		<a href="src/components/bootstrap/categories/ecommerceCategory/EPCategory2#!">
			<Card className="ezy__epcategory2-card p-5 pb-3">
				<div className="ezy__epcategory2-card-img d-flex justify-content-center align-items-center">
					<img src={product.img} alt="..." />
				</div>
				<Card.Body>
					<h2 className="ezy__epcategory2-title mt-2">{product.title}</h2>
				</Card.Body>
			</Card>
		</a>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
};

const Epcategory2 = () => {
	return (
		<section className="ezy__epcategory2">
			<Container>
				<Row className="align-items-center">
					<Col xs={8}>
						<h2 className="ezy__epcategory2-heading">Shop By Category</h2>
					</Col>
					{/* button start  */}
					<Col xs={4} className="text-end">
						<Button variant="" className="ezy__epcategory2-btn">
							See All
						</Button>
					</Col>
					{/* button end  */}
				</Row>

				<Row className="text-center justify-content-start justify-content-xl-center mt-4 mt-md-5">
					{products.map((product, i) => (
						<Col md={6} xl={3} className="mt-4" key={i}>
							<ProductItem product={product} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Epcategory2;

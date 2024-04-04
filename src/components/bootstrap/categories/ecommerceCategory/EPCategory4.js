import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./EPCategory4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
	"prop-types": "PropTypes",
}
*/

const products = [
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product10.png",
		title: "Beauty",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product5.png",
		title: "Furniture",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product24.png",
		title: "School Product",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product17.png",
		title: "Fashion",
	},
];

const ProductItem = ({ product }) => {
	return (
		<a href="src/components/bootstrap/categories/ecommerceCategory/EPCategory4#!">
			<Card className="ezy__epcategory4-card d-flex flex-column border-0 rounded-0 h-100">
				<Card.Body className="d-flex justify-content-center align-items-center p-4 h-100">
					<img src={product.img} alt="..." />
				</Card.Body>
				<Card.Body className="text-center px-3 py-4">
					<h2 className="ezy__epcategory4-title mb-0">{product.title}</h2>
				</Card.Body>
			</Card>
		</a>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
};

const Epcategory4 = () => {
	return (
		<section className="ezy__epcategory4">
			<Container>
				<h2 className="ezy__epcategory4-heading text-center">
					Product Category
				</h2>

				<Row className="text-center justify-content-start justify-content-xl-center mt-4 mt-md-5">
					{products.map((product, i) => (
						<Col xs={12} sm={6} lg={4} xl={3} className="mt-4" key={i}>
							<ProductItem product={product} />
						</Col>
					))}
					{/* button start  */}
					<div className="ezy__epcategory4-button mt-5">
						<Button variant="primary" className="ezy__epcategory4-btn">
							See All
						</Button>
					</div>
					{/* button end  */}
				</Row>
			</Container>
		</section>
	);
};

export default Epcategory4;

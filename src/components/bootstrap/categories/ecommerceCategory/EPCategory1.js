import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./EPCategory1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
	"prop-types": "PropTypes",
}
*/

const products = [
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product21.png",
		title: "Speaker",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product4.png",
		title: "School Product",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product19.png",
		title: "Furniture",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product11.png",
		title: "Water Bottle",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product14.png",
		title: "Wrist Watch",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product9.png",
		title: "Perfume",
	},
];

const ProductItem = ({ product }) => {
	return (
		<a href="src/components/bootstrap/categories/ecommerceCategory/EPCategory1#!">
			<Card className="ezy__epcategory1-card p-2">
				<div className="ezy_ecategory1-card-img d-flex justify-content-center align-items-center py-3">
					<img src={product.img} alt={product.title} />
				</div>
				<Card.Body>
					<h5 className="ezy__epcategory1-title m-0">{product.title}</h5>
				</Card.Body>
			</Card>
		</a>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
};

const Epcategory1 = () => {
	return (
		<section className="ezy__epcategory1">
			<Container>
				<h2 className="ezy__epcategory1-heading">Product Category</h2>

				<Row className="mt-4 mt-md-5 ezy__epcategory1-row">
					{products.map((product, i) => (
						<Col xs={12} sm={6} md={4} lg={3} xl={2} className="p-1" key={i}>
							<ProductItem product={product} />
						</Col>
					))}
				</Row>

				{/* button start  */}
				<div className="text-center mt-5">
					<Button variant="primary" className="ezy__epcategory1-btn">
						See All
					</Button>
				</div>
				{/* button end  */}
			</Container>
		</section>
	);
};

export default Epcategory1;

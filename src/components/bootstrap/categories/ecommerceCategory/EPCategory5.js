import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./EPCategory5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
	"prop-types": "PropTypes",
}
*/

const products = [
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product35.jpg",
		title: "Kitchen Bowl",
		quantity: "209 Product",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product34.jpg",
		title: "Dinner Set",
		quantity: "127 Product",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product27.jpg",
		title: "Wrist Watch",
		quantity: "458 Product",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product32.jpg",
		title: "Beauty Product",
		quantity: "432 Product",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product31.jpg",
		title: "Home Decoration",
		quantity: "123 Product",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product30.jpg",
		title: "Earings",
		quantity: "191 Product",
	},
];

const ProductItem = ({ product }) => {
	return (
		<a href="src/components/bootstrap/categories/ecommerceCategory/EPCategory5#!">
			<Card className="ezy__epcategory5-card">
				<img src={product.img} className="card-img-top" alt="..." />
				<Card.Body className="text-start pb-0">
					<h5 className="ezy__epcategory5-card-title m-0">{product.title}</h5>
					<p className="ezy__epcategory5-card-text">{product.quantity}</p>
				</Card.Body>
			</Card>
		</a>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
};

const Epcategory5 = () => {
	return (
		<section className="ezy__epcategory5">
			<Container>
				<Row>
					<Col>
						<h2 className="ezy__epcategory5-heading">Product Category</h2>
					</Col>
					{/* button start  */}
					<Col xs={"auto"}>
						<Button variant="" className="ezy__epcategory5-btn px-0">
							See All
						</Button>
					</Col>
					{/* button end  */}
				</Row>
				<Row className="mt-4 mt-sm-5 ezy__epcategory5-row">
					{products.map((product, i) => (
						<Col sm={6} md={4} lg={3} xl={2} className="p-2" key={i}>
							<ProductItem product={product} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Epcategory5;

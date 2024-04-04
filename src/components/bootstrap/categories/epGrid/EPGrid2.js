import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./EPGrid2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faShoppingCart, faStar }",
	"prop-types": "PropTypes"
}
*/

const products = [
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid2_1.jpg",
		title: "Autumn Cotton Linen Dress Women Loose Plus Size",
		price: "725.00",
		rating: "4.6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid2_2.jpg",
		title: "2022 Smart Watch Ultra Men Women Smartwatch",
		price: "172.00",
		rating: "4.9",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid2_3.jpg",
		title: "ROSEGAL Gothic Dresses Black High Waist",
		price: "1199.00",
		rating: "4.2",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid2_4.jpg",
		title: "Best YBT Women Belt Imitation Leather Pin Buckle Belt New",
		price: "89.00",
		rating: "4.6",
	},
];

const ProductItem = ({ product }) => {
	return (
		<Card className="ezy__epgrid2-card border-0 p-2">
			<div>
				<img src={product.img} alt="..." className="w-100" />
			</div>
			<Card.Body className="text-start px-1">
				<a href="src/components/bootstrap/categories/epGrid/EPGrid2#!">
					<h5 className="ezy__epgrid2-title">{product.title}</h5>
				</a>
				<h5 className="ezy__epgrid2-price my-2">${product.price}</h5>
				<div className="ezy__epgrid2-details d-flex justify-content-between align-items-center px-1">
					<h5 className="ezy__epgrid2-ratings">
						<FontAwesomeIcon
							icon={faStar}
							className="ezy__epgrid2-rating me-1"
						/>
						{product.rating}
					</h5>
					<a href="src/components/bootstrap/categories/epGrid/EPGrid2#!">
						<h5 className="ezy__epgrid2-cart">
							<FontAwesomeIcon icon={faShoppingCart} />
						</h5>
					</a>
				</div>
			</Card.Body>
		</Card>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
};

const Epgrid2 = () => {
	return (
		<section className="ezy__epgrid2">
			<Container>
				<h2 className="ezy__epgrid2-heading text-center">Product Category</h2>

				<Row className="ezy__epgrid2-row text-center justify-content-start justify-content-xl-center mt-5">
					{products.map((product, i) => (
						<Col sm={6} lg={4} xl={3} key={i}>
							<ProductItem product={product} />
						</Col>
					))}
				</Row>
			</Container>
			<div className="text-center">
				<div className="ezy__epgrid2-button mt-5">
					<Button variant="primary" className="ezy__epgrid2-btn" role="button">
						See All
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Epgrid2;

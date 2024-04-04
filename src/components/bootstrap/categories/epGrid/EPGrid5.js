import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faShoppingCart,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./EPGrid5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faHeart, faShoppingCart, faStar }",
	"prop-types": "PropTypes"
}
*/

const products = [
	{
		img: "https://cdn.easyfrontend.com/pictures/products/couch3.png",
		title: "Modern Lounge Chair with Ottoman Classic Designer Chair",
		price: "864.00",
		rating: "4.6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/bag3.png",
		title: "Luxury Tassel Small Messenger Bag For Women Lingge Embroidery",
		price: "390.00",
		rating: "4.6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/headphone.png",
		title: "New Classic Copper Alloy Smooth Metal Hoop Earrings For Woman",
		price: "245.00",
		rating: "4.5",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/sbag1.png",
		title: "Luxury Tassel Small Messenger Bag For Women Lingge Embroidery",
		price: "145.00",
		rating: "4.6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/tshirt2.png",
		title: "Spring Autumn Kids Thin Sweater Boys Girls Clothes Cute Dinosaur",
		price: "2120.00",
		rating: "4.6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/watch2.png",
		title: "Spring Autumn Kids Thin Sweater Boys Girls Clothes Cute Dinosaur",
		price: "2540.00",
		rating: "4.6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/shoe1.png",
		title: "LAOCHRA White Shoes For Men Sneakers Leather Korean Style",
		price: "1050.00",
		rating: "4.6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/sofa2.png",
		title: "Modern Lounge Chair with Ottoman Classic Designer Chair",
		price: "350.00",
		rating: "4.5",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/lamp4.png",
		title: "Touch Rechargeable Bud Table Lamps LED Creative Mushroom",
		price: "250.00",
		rating: "4.6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/chair2.png",
		title: "Side Chair Back Chair Fabric Upholstered Seat Chairs",
		price: "846.00",
		rating: "4.6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/perfume1.png",
		title: "Men's Perfumes Sauvage Eau De Parfum Perfumes",
		price: "825.00",
		rating: "4.5",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/glass2.png",
		title: "ZUEE Retro Small Rectangle Sunglasses Women Vintage",
		price: "135.00",
		rating: "4.6",
	},
];

const ProductItem = ({ product }) => {
	return (
		<Card className="card ezy__epgrid5-card border-0 p-2">
			<Card.Body className="ezy__epgrid5-card-img position-relative h-100">
				<a href="src/components/bootstrap/categories/epGrid/EPGrid5#!">
					<div className="ezy__epgrid5-fav-icon">
						<FontAwesomeIcon icon={faHeart} />
					</div>
				</a>
				<div className="ezy__epgrid5-card-img d-flex justify-content-center align-items-center h-100 px-4">
					<a href="src/components/bootstrap/categories/epGrid/EPGrid5#!">
						<img src={product.img} alt="..." />
					</a>
				</div>
			</Card.Body>

			<Card.Body className="text-start">
				<a href="src/components/bootstrap/categories/epGrid/EPGrid5#!">
					<h5 className="ezy__epgrid5-title">{product.title}</h5>
				</a>
				<h5 className="ezy__epgrid5-price my-2">${product.price}</h5>
				<div className="ezy__epgrid5-details d-flex justify-content-between align-items-center">
					<h5 className="ezy__epgrid5-ratings">
						<FontAwesomeIcon
							icon={faStar}
							className="ezy__epgrid5-rating me-1"
						/>
						{product.rating}
					</h5>
					<a href="src/components/bootstrap/categories/epGrid/EPGrid5#!">
						<h5 className="ezy__epgrid5-cart">
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

const Epgrid5 = () => {
	return (
		<section className="ezy__epgrid5">
			<Container>
				<h2 className="ezy__epgrid5-heading text-center">Our Products</h2>
				<Row className="ezy__epgrid5-row text-center justify-content-xl-center mt-5">
					{products.map((product, i) => (
						<Col md={6} lg={4} xl={3} className="px-2 my-3" key={i}>
							<ProductItem product={product} />{" "}
						</Col>
					))}
				</Row>
			</Container>

			<div className="text-center mt-5">
				<Button variant="" className="ezy__epgrid5-btn">
					See All
				</Button>
			</div>
		</section>
	);
};

export default Epgrid5;

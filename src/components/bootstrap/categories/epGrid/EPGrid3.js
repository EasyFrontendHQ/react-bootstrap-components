import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faShoppingCart,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./EPGrid3.css";

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
		img: "https://cdn.easyfrontend.com/pictures/products/sofa5.png",
		title: "Side Chair Back Chair Fabric Upholstered Seat",
		price: "1500.00",
		rating: "4.3",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/lamp2.png",
		title: "Touch Rechargeable Bud Table Lamps LED Creative Mushroom",
		price: "172.00",
		rating: "4.9",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/chair3.png",
		title: "Touch Rechargeable Bud Table Lamps LED Creative Mushroom",
		price: "1125.00",
		rating: "4.1",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/earings2.png",
		title: "New Classic Copper Alloy Smooth Metal Hoop Earrings",
		price: "15.00",
		rating: "4.9",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/pant2.png",
		title: "EACHIN Boys Pants Boys Pants Solid Cargo Pants Teenage Boy",
		price: "152.00",
		rating: "4.3",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/perfume3.png",
		title: "Men's Perfumes Sauvage Eau De Parfum Perfumes Long Lasting",
		price: "122.00",
		rating: "4.4",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/couch2.png",
		title: "Multi-functional leather sofa small living room moder",
		price: "125.00",
		rating: "4.8",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/watch-2.png",
		title: "Smart Watch Ultra 8 NFC Access Control Unlocking",
		price: "15.00",
		rating: "4.7",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/sbag2.png",
		title: "Luxury Tassel Small Messenger Bag For Women Lingge Embroidery",
		price: "1100.00",
		rating: "4.0",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/cap2.png",
		title: "Disney Captain America Children's Hat Baby Baseball",
		price: "152.00",
		rating: "4.1",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/glass1.png",
		title: "ZUEE Retro Small Rectangle Sunglasses Women Vintage Brand",
		price: "425.00",
		rating: "4.9",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/tshirt3.png",
		title: "Spring Autumn Kids Thin Sweater Boys Girls Clothes Cute",
		price: "157.00",
		rating: "4.2",
	},
];

const ProductItem = ({ product }) => {
	return (
		<Card className="ezy__epgrid3-card position-relative p-2">
			<a href="src/components/bootstrap/categories/epGrid/EPGrid3#!">
				<div className="ezy__epgrid3-fav-icon">
					<FontAwesomeIcon icon={faHeart} />
				</div>
			</a>
			<Card.Body>
				<div className="ezy__epgrid3-card-img d-flex justify-content-center align-items-center h-100 px-4">
					<a href="src/components/bootstrap/categories/epGrid/EPGrid3#!">
						<img src={product.img} alt="..." />
					</a>
				</div>
			</Card.Body>
			<Card.Body className="h-100 pt-0 text-start">
				<a href="src/components/bootstrap/categories/epGrid/EPGrid3#!">
					<h5 className="ezy__epgrid3-title">{product.title}</h5>
				</a>
				<h5 className="ezy__epgrid3-price my-2">${product.price}</h5>
				<div className="ezy__epgrid3-details d-flex justify-content-between align-items-center">
					<h5 className="ezy__epgrid3-ratings">
						<FontAwesomeIcon
							icon={faStar}
							className="ezy__epgrid3-rating me-1"
						/>
						{product.rating}
					</h5>
					<a href="src/components/bootstrap/categories/epGrid/EPGrid3#!">
						<h5 className="ezy__epgrid3-cart">
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

const Epgrid3 = () => {
	return (
		<section className="ezy__epgrid3">
			<Container>
				<Row className="align-items-center">
					<Col xs>
						<h2 className="ezy__epgrid3-heading">Product Category</h2>
					</Col>
					<Col xs={"auto"}>
						<Button
							variant="primary"
							className="ezy__epgrid3-btn"
							role="button"
						>
							See All
						</Button>
					</Col>
				</Row>
				<Row className="ezy__epgrid3-row text-center justify-content-xl-center mt-5">
					{products.map((product, i) => (
						<Col md={6} lg={4} xl={3} className="px-2 my-2" key={i}>
							<ProductItem product={product} />{" "}
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Epgrid3;

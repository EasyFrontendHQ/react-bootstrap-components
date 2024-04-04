import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faShoppingCart,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./EPGrid1.css";

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
		img: "https://cdn.easyfrontend.com/pictures/products/chair1.png",
		title: "Full Body Massage Chair weightless Bluetooth",
		price: "1725.00",
		rating: "4.6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/perfume1.png",
		title: "Original Brand 212 Perfume Vip Men Long Lasting",
		price: "1725.00",
		rating: "4.6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/headphone.png",
		title: "Wireless Headset Bluetooth Earphones and Headphone",
		price: "125.00",
		rating: "4.1",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/bag2.png",
		title: "Teenage Girls and Boys Backpack Schoolbag High Quality Backpacks",
		price: "116.00",
		rating: "4.0",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/lamp1.png",
		title: "Touch Rechargeable Bud Table Lamps LED Creative",
		price: "725.00",
		rating: "4.8",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/chair.png",
		title: "Side Chair Back Chair Fabric Upholstered Seat Chairs",
		price: "185.00",
		rating: "4.1",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/shoe2.png",
		title: "Size 21-30 Children Basketball Shoes Girls Boys",
		price: "1525.00",
		rating: "4.2",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/sofa3.png",
		title:
			"Solid Chair Cover Office Computer Spandex Split Seat Cover Universal",
		price: "2225.00",
		rating: "4.9",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/glass2.png",
		title: "Luxury Square Vintage Polarized Sunglasses For Men Women",
		price: "2925.00",
		rating: "3.6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/bottle3.png",
		title: "2L Water Bottle Sports Outdoor Gym Drinking Water",
		price: "175.00",
		rating: "4.5",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/sbag2.png",
		title: "Fashion Mom Shopping Bag Tote Bag Men Ladies Folding",
		price: "225.00",
		rating: "4.7",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/watch-2.png",
		title: "Smart Watch Ultra Series 8 NFC Access Control Unlocking",
		price: "180.00",
		rating: "4.9",
	},
];

const ProductItem = ({ product }) => {
	return (
		<Card className="ezy__epgrid1-card position-relative p-2">
			<a href="src/components/bootstrap/categories/epGrid/EPGrid1#!">
				<div className="ezy__epgrid1-fav-icon">
					<FontAwesomeIcon icon={faHeart} />
				</div>
			</a>
			<Card.Body>
				<div className="ezy__epgrid1-card-img d-flex justify-content-center align-items-center h-100 px-4">
					<a href="src/components/bootstrap/categories/epGrid/EPGrid1#!">
						<img src={product.img} alt="..." />
					</a>
				</div>
			</Card.Body>
			<Card.Body className="h-100 pt-0 text-start">
				<a href="src/components/bootstrap/categories/epGrid/EPGrid1#!">
					<h5 className="ezy__epgrid1-title">{product.title}</h5>
				</a>
				<h5 className="ezy__epgrid1-price my-2">${product.price}</h5>
				<div className="ezy__epgrid1-details d-flex justify-content-between align-items-center">
					<h5 className="ezy__epgrid1-ratings">
						<FontAwesomeIcon
							icon={faStar}
							className="ezy__epgrid1-rating me-1"
						/>
						{product.rating}
					</h5>
					<a
						href="src/components/bootstrap/categories/epGrid/EPGrid1#!"
						className="ezy__epgrid1-cart"
					>
						<FontAwesomeIcon icon={faShoppingCart} />
					</a>
				</div>
			</Card.Body>
		</Card>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
};

const Epgrid1 = () => {
	return (
		<section className="ezy__epgrid1">
			<Container>
				<h2 className="ezy__epgrid1-heading text-center">Our Products</h2>
				<Row className="ezy__epgrid1-row text-center justify-content-xl-center mt-5">
					{products.map((product, i) => (
						<Col md={6} lg={4} xl={3} className="px-2 my-2" key={i}>
							<ProductItem product={product} />
						</Col>
					))}
				</Row>
			</Container>

			<div className="text-center mt-5">
				<Button variant="" className="ezy__epgrid1-btn">
					See All
				</Button>
			</div>
		</section>
	);
};

export default Epgrid1;

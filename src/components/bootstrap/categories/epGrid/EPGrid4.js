import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faShoppingCart,
	faStar,
	faHeart,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

import "./EPGrid4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faShoppingCart, faStar, faHeart, faStarHalfAlt }",
	"prop-types": "PropTypes",
	"@fortawesome/free-regular-svg-icons": "{ faStar as farStar }"
}
*/

const products = [
	{
		img: "https://cdn.easyfrontend.com/pictures/products/perfume2.png",
		title: "Men's Perfumes Sauvage Eau De Parfum Perfumes Long Lasting",
		price: "1300.00",
		rating: 3.5,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/shoe1.png",
		title: "LAOCHRA White Shoes For Men Sneakers Leather Korean Style",
		price: "1751.00",
		rating: 3.5,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/sofa1.png",
		title:
			"Multi-functional leather sofa small living room modern simple smart sofa combin",
		price: "751.00",
		rating: 4.5,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/tshirt1.png",
		title: "Spring Autumn Kids Thin Sweater Boy Clothes Cute Dinosaur",
		price: "1225.00",
		rating: 3.5,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/watch3.png",
		title: "Smart Watch Ultra 8 NFC Access Control Unlocking Smartwatch Series",
		price: "1524.00",
		rating: 3.5,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/pant3.png",
		title:
			"Boys Pants Boys Pants Solid Cargo Pants Teenage Boy Multi-Pocket Trousers",
		price: "852.00",
		rating: 4,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/earings2.png",
		title: "New Classic Copper Alloy Smooth Metal Hoop Earrings For Woman",
		price: "458.00",
		rating: 3.5,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/bag1.png",
		title: "Luxury Tassel Small Messenger Bag For Women Lingge Embroidery",
		price: "754.00",
		rating: 4.5,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/cap3.png",
		title: "Disney Captain America Children's Hat Baby Baseball",
		price: "547.00",
		rating: 4,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/bottle1.png",
		title: "Touch Rechargeable Bud Table Lamps LED Creative Mushroom",
		price: "879.00",
		rating: 4.5,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/sofa5.png",
		title: "Modern Lounge Chair with Ottoman Classic Designer Chair",
		price: "684.00",
		rating: 4.5,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/products/lamp5.png",
		title: "Touch Rechargeable Bud Table Lamps LED Creative Mushroom",
		price: "245.00",
		rating: 4,
	},
];

const Rating = ({ rating }) => (
	<h5 className="ezy__epgrid4-ratings">
		{[...Array(5)].map((_, i) => {
			const index = i + 1;
			let content = "";
			if (index <= Math.floor(rating))
				content = (
					<FontAwesomeIcon icon={faStar} className="ezy__epgrid4-rating me-1" />
				);
			else if (rating > i && rating < index + 1)
				content = (
					<FontAwesomeIcon
						icon={faStarHalfAlt}
						className="ezy__epgrid4-rating me-1"
					/>
				);
			else if (index > rating)
				content = (
					<FontAwesomeIcon
						icon={farStar}
						className="ezy__epgrid4-rating me-1"
					/>
				);

			return <Fragment key={i}>{content}</Fragment>;
		})}
	</h5>
);

Rating.propTypes = {
	rating: PropTypes.number,
};

const ProductItem = ({ product }) => {
	return (
		<Card className="ezy__epgrid4-card position-relative p-2">
			<a href="src/components/bootstrap/categories/epGrid/EPGrid4#!">
				<div className="ezy__epgrid4-fav-icon">
					<FontAwesomeIcon icon={faHeart} />
				</div>
			</a>
			<Card.Body>
				<div className="ezy__epgrid4-card-img d-flex justify-content-center align-items-center h-100 px-4">
					<a href="src/components/bootstrap/categories/epGrid/EPGrid4#!">
						<img src={product.img} alt="..." />
					</a>
				</div>
			</Card.Body>
			<Card.Body className="h-100 pt-0 text-center">
				<a href="src/components/bootstrap/categories/epGrid/EPGrid4#!">
					<h5 className="ezy__epgrid4-title">{product.title}</h5>
				</a>
				<Rating rating={product.rating} />
				<h5 className="ezy__epgrid4-price my-2">${product.price}</h5>
				<a href="src/components/bootstrap/categories/epGrid/EPGrid4#!">
					<h5 className="ezy__epgrid4-cart">
						<FontAwesomeIcon icon={faShoppingCart} />
					</h5>
				</a>
			</Card.Body>
		</Card>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
};

const Epgrid4 = () => {
	return (
		<section className="ezy__epgrid4">
			<Container>
				<h2 className="ezy__epgrid4-heading text-center">Our Products</h2>
				<Row className="ezy__epgrid4-row text-center justify-content-xl-center mt-5">
					{products.map((product, i) => (
						<Col md={6} lg={4} xl={3} className="px-2 my-2" key={i}>
							<ProductItem product={product} />
						</Col>
					))}
				</Row>
			</Container>

			<div className="text-center mt-5">
				<Button variant="" className="ezy__epgrid4-btn">
					See All
				</Button>
			</div>
		</section>
	);
};

export default Epgrid4;

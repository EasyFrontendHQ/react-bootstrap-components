import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./EPRanking1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row, Card }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faShoppingCart, faStar }",
	"prop-types": "PropTypes"

}
*/
const topItemData = {
	recommended: true,
	img: "https://cdn.easyfrontend.com/pictures/watch-img.png",
	title:
		"JOYLOVE Sofa Chair Nordic Style Single Chair Designer Light Luxury Furniture Beauty",
	cart: "0",
	price: "US $186.94",
};

const rankingItemData = [
	{
		recommended: false,
		img: "https://cdn.easyfrontend.com/pictures/chair1.png",
		title:
			"JOYLOVE Sofa Chair Nordic Style Single Chair Designer Light Luxury Furniture Beauty",
		cart: "0",
		price: "US $186.94",
	},
	{
		recommended: false,
		img: "https://cdn.easyfrontend.com/pictures/chair2.png",
		title:
			"JOYLOVE Sofa Chair Nordic Style Single Chair Designer Light Luxury Furniture Beauty",
		cart: "0",
		price: "US $186.94",
	},
];

const Product = ({ product, index, isTopSelling }) => {
	return (
		<a href="src/components/bootstrap/categories/epRanking/EPRanking1#!">
			<Card className="ezy__epranking1-card border-0 p-4 position-relative">
				<div className="ezy__epranking1-badge">
					{isTopSelling ? (
						<h4 className="mb-1 fs-6">
							<FontAwesomeIcon icon={faStar} />
						</h4>
					) : (
						<h4 className="mb-1">{index + 1} </h4>
					)}
				</div>
				<Row>
					<Col xs={12} md={4}>
						<div className="d-flex align-items-center justify-content-center h-100">
							<img src={product.img} alt="" className="img-fluid" />
						</div>
					</Col>
					<Col xs={12} md={8} className="mt-4 mt-md-0">
						<div className="ezy__epranking1-card-content">
							{product.recommended && (
								<div className="ezy__epranking1-recommendation d-flex align-items-center justify-content-center">
									<FontAwesomeIcon icon={faStar} className="me-2" />
									<p className="mb-0">Recommended For You</p>
								</div>
							)}
							<h6 className="fw-normal mb-0 mt-2">{product.title}</h6>

							<div className="ezy__epranking1-cart d-flex align-items-center justify-content-center my-3">
								<div className="ezy__epranking1-cart-icon">
									<FontAwesomeIcon icon={faShoppingCart} />
								</div>
								<p className="mb-0 ms-3">
									<strong>{product.cart}</strong> adds
								</p>
							</div>

							<h5 className="fw-bold">{product.price}</h5>

							<div className="d-flex justify-content-md-end">
								<Button variant="" className="ezy__epranking1-btn fs-6 fw-bold">
									Shop Now
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Card>
		</a>
	);
};

Product.propTypes = {
	product: PropTypes.object.isRequired,
	index: PropTypes.number,
	isTopSelling: PropTypes.bool,
};

Product.defaultProps = {
	isTopSelling: false,
};

const EPRanking1 = () => {
	return (
		<section className="ezy__epranking1">
			<Container>
				<div
					className="ezy__epranking1-topbar p-4"
					style={{
						backgroundImage:
							"url(https://cdn.easyfrontend.com/pictures/abstract-bg.jpg)",
					}}
				>
					<div className="ezy__epranking1-topbar-overlay"></div>
					<Row>
						<Col xs={12} md={6}>
							<div className="ezy__epranking1-topbar-content d-flex flex-column align-items-center justify-content-center text-center h-100 px-lg-5">
								<h3 className="mb-3">
									Home furnishings for minimalists - Living Room...
								</h3>
								<h6 className="mb-3 fw-bold fs-5">Top Picks</h6>
								<span className="px-4 py-1">
									<h6 className="mb-0 fw-normal">
										Ranked by Added to Cart in the last 30 days
									</h6>
								</span>
							</div>
						</Col>
						<Col xs={12} md={6} className="mt-4 mt-md-0">
							<Product product={topItemData} isTopSelling={true} />
						</Col>
					</Row>
				</div>

				<Row className="mt-4">
					{rankingItemData.map((item, i) => (
						<Col xs={12} md={6} className="mt-4" key={i}>
							<Product product={item} index={i} isTopSelling={false} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default EPRanking1;

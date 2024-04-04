import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import PropTypes from "prop-types";

import "./EPRanking2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row, Card }",
	"prop-types": "PropTypes"

}
*/

const productData = [
	{
		label: "New trends - Hair Grips",
		followers: "594190",
		badgeText: "Top Trending",
		product: [
			{
				badge: "",
				image: "https://cdn.easyfrontend.com/pictures/chair1.png",
				price: "US $18.78",
			},
			{
				badge: "",
				image: "https://cdn.easyfrontend.com/pictures/watch-img.png",
				price: "US $18.78",
			},
			{
				badge: "",
				image: "https://cdn.easyfrontend.com/pictures/chair2.png",
				price: "US $18.78",
			},
		],
	},
	{
		label: "New trends - Hair Grips",
		followers: "594190",
		badgeText: "Top Trending",
		product: [
			{
				badge: "",
				image: "https://cdn.easyfrontend.com/pictures/watch-img.png",
				price: "US $18.78",
			},
			{
				badge: "",
				image: "https://cdn.easyfrontend.com/pictures/watch-img2.png",
				price: "US $18.78",
			},
			{
				badge: "",
				image: "https://cdn.easyfrontend.com/pictures/chair1.png",
				price: "US $18.78",
			},
		],
	},
	{
		label: "New trends - Hair Grips",
		followers: "594190",
		badgeText: "Top Trending",
		product: [
			{
				badge: "",
				image: "https://cdn.easyfrontend.com/pictures/watch-img.png",
				price: "US $18.78",
			},
			{
				badge: "",
				image: "https://cdn.easyfrontend.com/pictures/watch-img2.png",
				price: "US $18.78",
			},
			{
				badge: "",
				image: "https://cdn.easyfrontend.com/pictures/chair1.png",
				price: "US $18.78",
			},
		],
	},
	{
		label: "New trends - Hair Grips",
		followers: "594190",
		badgeText: "Top Trending",
		product: [
			{
				badge: "",
				image: "https://cdn.easyfrontend.com/pictures/chair1.png",
				price: "US $18.78",
			},
			{
				badge: "",
				image: "https://cdn.easyfrontend.com/pictures/watch-img.png",
				price: "US $18.78",
			},
			{
				badge: "",
				image: "https://cdn.easyfrontend.com/pictures/chair2.png",
				price: "US $18.78",
			},
		],
	},
];

const Product = ({ product, index }) => {
	return (
		<a href="src/components/bootstrap/categories/epRanking/EPRanking2#!">
			<Card className="ezy__epranking2-card border-0 p-4 position-relative">
				<div className="ezy__epranking2-badge-type">
					<p className="mb-0 mx-3 py-1">{product.badgeText}</p>
				</div>
				<Row>
					<Col xs={12}>
						<h4 className="fw-bold">{product.label}</h4>
						<p className="mb-0 opacity-75">{product.followers} followers</p>
					</Col>
				</Row>
				<Row>
					{product.product.map((item, i) => (
						<Col xs={12} lg={4} className="mt-4" key={i}>
							<div className="position-relative">
								<div className="ezy__epranking2-badge">
									<p className="mb-2 mx-3 py-1 fs-5">{i + 1}</p>
								</div>
								<div className="d-flex align-items-center justify-content-center h-100">
									<img src={item.image} alt="" className="img-fluid" />
								</div>
								<h5 className="mb-0 fw-bold text-center mt-2">{item.price}</h5>
							</div>
						</Col>
					))}
				</Row>
			</Card>
		</a>
	);
};

Product.propTypes = {
	product: PropTypes.object.isRequired,
	index: PropTypes.number,
};

const EPRanking2 = () => {
	return (
		<section className="ezy__epranking2">
			<Container>
				<Row className="text-center">
					<Col xs={12}>
						<h1 className="ezy__epranking2-heading">More Rankings</h1>
					</Col>
				</Row>

				<Row className="mt-4">
					{productData.map((product, i) => (
						<Col xs={12} md={6} className="mt-4" key={i}>
							<Product product={product} index={i} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default EPRanking2;

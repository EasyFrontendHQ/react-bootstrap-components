import React, { Fragment } from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faShoppingCart,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./EPList1.css";

/*
{
	"react": "React, { Fragment } ",
	"react-bootstrap": "{ Button, Col, Container, Nav, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faHeart, faShoppingCart, faStar, faStarHalfAlt }",
	"@fortawesome/free-regular-svg-icons": "{ faStar as farStar }",
    "prop-types": "PropTypes",
    "classnames": "classNames"
}
*/

const products = [
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_11_1.png",
		title:
			"2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM",
		subTitle: "Computer & Accessories",
		spec: {
			ram: "16GB RAM",
			drive: "1TB SSD Hard Drive",
			gen: "10-core Intel Xeon<",
			brand: "MAC OS",
			security: "secured",
		},
		discountPrice: "1199.5",
		realPrice: "2399",
		discount: "-50%",
		rating: 3.5,
		count: "8",
		shipping: "50",
		availibility: "Available",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_11_2.png",
		title:
			"2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM",
		subTitle: "Computer & Accessories",
		spec: {
			ram: "16GB RAM",
			drive: "1TB SSD Hard Drive",
			gen: "10-core Intel Xeon<",
			brand: "MAC OS",
			security: "secured",
		},
		discountPrice: "1199.5",
		realPrice: "2399",
		discount: "-50%",
		rating: 4.5,
		count: "8",
		shipping: "50",
		availibility: "Available",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_11_3.png",
		title:
			"2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM",
		subTitle: "Computer & Accessories",
		spec: {
			ram: "16GB RAM",
			drive: "1TB SSD Hard Drive",
			gen: "10-core Intel Xeon<",
			brand: "MAC OS",
			security: "secured",
		},
		discountPrice: "1199.5",
		realPrice: "2399",
		discount: "-50%",
		rating: 4,
		count: "8",
		shipping: "50",
		availibility: "Available",
	},
];

const Rating = ({ rating }) => (
	<span>
		{[...Array(5)].map((_, i) => {
			const index = i + 1;
			let content = "";
			if (index <= Math.floor(rating))
				content = <FontAwesomeIcon icon={faStar} />;
			else if (rating > i && rating < index + 1)
				content = <FontAwesomeIcon icon={faStarHalfAlt} />;
			else if (index > rating) content = <FontAwesomeIcon icon={farStar} />;

			return <Fragment key={i}>{content}</Fragment>;
		})}
	</span>
);

Rating.propTypes = {
	rating: PropTypes.number,
};

const specifications = [
	{
		value: "16GB RAM",
	},
	{
		value: "1TB SSD Hard Drive",
	},
	{
		value: "10-core Intel Xeon",
	},
	{
		value: "Mac OS",
	},
	{
		value: "Secured",
	},
];

const SpecificationItem = ({ item }) => <li>{item.value}</li>;

SpecificationItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const ProductItem = ({ product }) => {
	return (
		<Row>
			{/* image */}
			<Col xs={12} xl={4} className="position-relative">
				<h6 className="ezy__eproductlist1-new-text">New</h6>

				<a href="src/components/bootstrap/categories/epList/EPList1#!">
					<img
						src={product.img}
						alt="..."
						className="rounded img-fluid w-100"
					/>
				</a>
			</Col>
			<Col xs={12} lg={7} xl={5} className="pt-4 pt-xl-0 px-lg-4">
				<a href="src/components/bootstrap/categories/epList/EPList1#!">
					<h5 className="ezy__eproductlist1-title">{product.title}</h5>
				</a>
				<a href="src/components/bootstrap/categories/epList/EPList1#!">
					<h5 className="ezy__eproductlist1-sub-title">{product.subTitle}</h5>
				</a>
				<ul className="ezy__eproductlist1-specifications ps-4 pt-3">
					{specifications.map((item, i) => (
						<SpecificationItem item={item} key={i} />
					))}
				</ul>
			</Col>
			<Col xs={12} lg={5} xl={3} className="pt-4 pt-xl-0">
				<div className="mb-4">
					<h5 className="ezy__eproductlist1-discount-price">
						${product.discountPrice}
					</h5>
					<div className="ezy__eproductlist1-real-price d-flex align-items-center">
						<h5 className="text-decoration-line-through mb-0 me-1">
							${product.realPrice}
						</h5>
						<span>{product.discount}</span>
					</div>
				</div>
				<Nav className="flex-column my-3">
					<li className="mb-1">
						<div className="d-flex align-items-center ezy__eproductlist1-rating">
							<Rating rating={product.rating} />
							<span className="count ms-1">({product.count})</span>
						</div>
					</li>
					<li>
						<span className="ezy__eproductlist1-shipping">
							Shipping Cost: ${product.shipping}
						</span>
					</li>
					<li>
						<span className="ezy__eproductlist1-stock">
							Stock:{" "}
							<span className="ezy__eproductlist1-available">
								{product.availibility}
							</span>
						</span>
					</li>
				</Nav>

				{/* icons */}
				<div className="d-flex flex-column mt-4">
					<Button
						variant="outline-primary"
						className="ezy__eproductlist1-fav me-2"
					>
						<FontAwesomeIcon icon={faHeart} className="me-2" />
						<span>Favourite</span>
					</Button>
					<Button variant="primary" className="ezy__eproductlist1-cart mt-2">
						<FontAwesomeIcon icon={faShoppingCart} className="me-2" />
						<span>Add to Cart</span>
					</Button>
				</div>
			</Col>
		</Row>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
};

const Eproductlist1 = () => {
	return (
		<section className="ezy__eproductlist1">
			<Container>
				<Row>
					{products.map((product, i) => (
						<Col xs={12} className={classNames({ "mt-5": i })} key={i}>
							<ProductItem product={product} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Eproductlist1;

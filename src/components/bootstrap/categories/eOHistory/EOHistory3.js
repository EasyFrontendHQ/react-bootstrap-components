import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import "./EOHistory3.css";

/*
{
	"react": "React,
	"react-bootstrap": "{Card, Col, Container, Row, Button}",
	"prop-types": "PropTypes",
}
*/
const orders = [
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_2_1.png",
		title: "Nike Shoes",
		id: "7788965",
		status: "completed",
		price: "111",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_2_4.png",
		title: "Nike Shoes",
		id: "7788965",
		status: "inprogress",
		price: "788",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_2_3.png",
		title: "Nike Shoes",
		id: "7788965",
		status: "failed",
		price: "927",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_2_4.png",
		title: "Nike Shoes",
		id: "7788965",
		status: "completed",
		price: "313",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_2_3.png",
		title: "Nike Shoes",
		id: "7788965",
		status: "completed",
		price: "768",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_2_1.png",
		title: "Nike Shoes",
		id: "7788965",
		status: "inprogress",
		price: "520",
	},
];

const OrderItem = ({ item }) => (
	<Card className="ezy__eohistory3-card border p-2 mt-4">
		<a href="src/components/bootstrap/categories/eOHistory/EOHistory3#!">
			<img className="card-img-top img-fluid rounded" src={item.img} alt="" />
		</a>
		<Card.Body>
			<div className="d-flex justify-content-between">
				<a href="src/components/bootstrap/categories/eOHistory/EOHistory3#!">
					<h5 className="ezy__eohistory3-title">{item.title}</h5>
				</a>
				<p className="ezy__eohistory3-price">${item.price}</p>
			</div>
			<p
				className={`ezy__eohistory3-status text-center ${item.status} rounded`}
			>
				{item.status}
			</p>
			<p className="mb-0">#{item.id}</p>
		</Card.Body>
	</Card>
);

OrderItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const eOHistory3 = () => {
	return (
		<section className="ezy__eohistory3">
			<Container>
				<Card className="ezy__eohistory3-card border-0 p-4">
					<Card.Header className="text-end bg-transparent border-0">
						<Button variant="" className="ezy__eohistory3-btn border">
							View Order
						</Button>
						<Button variant="" className="ezy__eohistory3-btn border ms-2">
							View Invoice
						</Button>
					</Card.Header>
					<hr />
					<Card.Body>
						<Row>
							{/*  item  */}
							{orders.map((item, i) => (
								<Col xs={12} lg={4} key={i}>
									<OrderItem item={item} />
								</Col>
							))}
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</section>
	);
};

export default eOHistory3;

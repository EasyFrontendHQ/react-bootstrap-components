import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import "./EOHistory2.css";

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
		title: "Havit H204d Wired Headphone.",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem. Maecenas elementum at diam consequat bibendum.",
		status: "completed",
		price: "111",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_2_2.png",
		title: "Havit H204d Wired Headphone.",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem. Maecenas elementum at diam consequat bibendum.",
		status: "inprogress",
		price: "788",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_2_3.png",
		title: "Havit H204d Wired Headphone.",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem. Maecenas elementum at diam consequat bibendum.",
		status: "failed",
		price: "927",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_2_4.png",
		title: "Havit H204d Wired Headphone.",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem. Maecenas elementum at diam consequat bibendum.",
		status: "completed",
		price: "313",
	},
];

const OrderItem = ({ item }) => (
	<>
		<Col xs={12} md={3}>
			<div>
				<a href="src/components/bootstrap/categories/eOHistory/EOHistory2#!">
					<img
						src={item.img}
						alt=""
						className="img-fluid rounded mb-4 mb-md-0"
					/>
				</a>
			</div>
		</Col>
		<Col xs={12} md={7}>
			<div>
				<a href="src/components/bootstrap/categories/eOHistory/EOHistory2#!">
					<h2>{item.title}</h2>
				</a>
				<p className="opacity-75 ezy__eohistory2-details">{item.desc}</p>
				<p
					className={`ezy__eohistory2-status text-center ${item.status} rounded`}
				>
					{item.status}
				</p>
			</div>
		</Col>
		<Col xs={12} md={2}>
			<h3>${item.price}</h3>
		</Col>
	</>
);

OrderItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const eOHistory2 = () => {
	return (
		<section className="ezy__eohistory2">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12}>
						<Card className="ezy__eohistory2-card border-0 p-4">
							<Card.Header className="text-end bg-transparent border-0">
								<Button variant="" className="ezy__eohistory2-btn border">
									View Order
								</Button>
								<Button variant="" className="ezy__eohistory2-btn border ms-2">
									View Invoice
								</Button>
							</Card.Header>
							<hr />
							<Card.Body className="p-0">
								{/* item */}
								{orders.map((item, i) => (
									<Row
										className="align-items-center text-center text-md-start mt-4 mt-md-5"
										key={i}
									>
										<OrderItem item={item} />
									</Row>
								))}
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default eOHistory2;

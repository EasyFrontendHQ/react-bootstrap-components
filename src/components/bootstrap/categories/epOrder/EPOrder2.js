import React, { Fragment } from "react";
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	InputGroup,
	Row,
} from "react-bootstrap";
import PropTypes from "prop-types";

import "./EPOrder2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Form, InputGroup, Row }",
    "prop-types": "PropTypes"
}
*/

const orders = [
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/mac.jpg",
		title: "Certificate in British Sign Language (BSL) Level 1 & 2",
		price: "15.00",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/tab.jpg",
		title: "How to Improve Your Personal Skills (PDF)",
		price: "15.00",
	},
];

const payments = [
	{
		label: "Products",
		value: "Price",
	},
	{
		label: "Certificate in British Sign Language (BSL) Level 1 & 2",
		value: "£15.00",
	},
	{
		label: "How to Improve Your Personal Skills (PDF)",
		value: "£20.00",
	},
	{
		label: "Subtotal",
		value: "£35.00",
	},
	{
		label: "Total",
		value: "£35.00",
	},
];

const ProgressBar = () => {
	return (
		<Col xs={12}>
			<div className="ezy__eporder2-progress d-flex justify-content-between position-relative mb-5">
				<span className="ezy__eporder2-cart active">1</span>
				<span className="ezy__eporder2-bill">2</span>
				<span className="ezy__eporder2-completed">3</span>
			</div>
		</Col>
	);
};

const OrderItem = ({ order }) => {
	return (
		<Card className="mt-4">
			<Card.Body>
				<Row>
					{/* image */}
					<Col xs={12} md={5}>
						<a href="src/components/bootstrap/categories/epOrder/EPOrder2#!">
							<img src={order.img} alt="..." className="rounded img-fluid" />
						</a>
					</Col>
					{/* details  */}
					<Col
						xs={12}
						md={7}
						className="d-flex flex-column justify-content-center"
					>
						<a href="src/components/bootstrap/categories/epOrder/EPOrder2#!">
							<h5 className="ezy__eporder2-title">{order.title}</h5>
						</a>
						<p className="ezy__eporder2-price mb-0">$ {order.price}</p>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

OrderItem.propTypes = {
	order: PropTypes.object.isRequired,
};

const Payment = ({ item }) => (
	<Row>
		<Col xs={8}>
			<h6 className="mb-0">{item.label}</h6>
		</Col>
		<Col xs={4}>
			<p className="mb-0">{item.value}</p>
		</Col>
	</Row>
);

Payment.propTypes = {
	item: PropTypes.object.isRequired,
};

const OrderForm = () => {
	return (
		<div>
			<Form
				action="src/components/bootstrap/categories/epOrder/EPOrder2"
				className="mt-5"
			>
				<InputGroup>
					<Form.Control
						type="search"
						placeholder="Enter coupon"
						aria-label="Search"
					/>
					<Button variant="" className="ezy__eporder2-btn" type="submit">
						Apply
					</Button>
				</InputGroup>
			</Form>
			<div className="mt-4">
				<Button variant="" type="submit" className="ezy__eporder2-btn w-100">
					Proceed To Checkout
				</Button>
			</div>
		</div>
	);
};

const Eporder2 = () => {
	return (
		<section className="ezy__eporder2">
			<Container className="py-5">
				<Row className="justify-content-between">
					{/* progress bar  */}
					<ProgressBar />

					{/* courses  */}
					<Col xs={12} md={6}>
						{orders.map((order, i) => (
							<OrderItem order={order} key={i} />
						))}
					</Col>
					<Col xs={12} md={5}>
						<div className="ezy__eporder2-details p-4 p-lg-5 mt-4 rounded">
							<h4 className="mb-5">Your Order</h4>
							{payments.map((item, i) => (
								<Fragment key={i}>
									{!!i && <hr className="my-4" />}
									<Payment item={item} />
								</Fragment>
							))}

							{/* input form and button */}
							<OrderForm />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Eporder2;

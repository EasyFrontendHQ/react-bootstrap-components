import React, { useState } from "react";
import {
	Button,
	Col,
	Container,
	Form,
	Row,
	InputGroup,
	Nav,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBox,
	faChevronRight,
	faComment,
	faSearch,
	faTrash,
	faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./EPProfile2.css";

/*
{
	"react": "React, { useState }",
	"react-bootstrap": "{ Button, Col, Container, Form, Row, InputGroup, Nav }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faBox, faChevronRight, faComment, faSearch, faTrash, faUserShield }",
    "prop-types": "PropTypes",
}
*/

const navData = [
	{
		text: "All",
	},
	{
		text: "Unpaid",
	},
	{
		text: "Processing",
	},
	{
		text: "Shipped",
	},
	{
		text: "Completed",
	},
];

const orderTrack = [
	{
		text: "Order",
		value: "",
	},
	{
		text: "track",
		value: "1",
	},
];

const timeFilter = [
	{
		text: "All Time",
		value: "",
	},
	{
		text: "Last 6 months",
		value: "1",
	},
];

const products = [
	{
		type: "Awaiting Payment",
		orderDate: "Apr 22, 2022",
		orderId: "81495384112609",
		store: "TIEGOULI Store",
		img: "https://cdn.easyfrontend.com/pictures/chair2.png",
		title:
			"JOYLOVE Sofa Chair Nordic Style Single Chair Designer Light Luxury Furniture Beauty",
		price: "US $4.17",
		amount: "1",
		totalPrice: "US $ 18.75",
		payNow: true,
		addToCart: false,
		deleteBtn: false,
	},
	{
		type: "Finished",
		orderDate: "Apr 22, 2022",
		orderId: "81495384112609",
		store: "TIEGOULI Store",
		img: "https://cdn.easyfrontend.com/pictures/chair1.png",
		title:
			"JOYLOVE Sofa Chair Nordic Style Single Chair Designer Light Luxury Furniture Beauty",
		price: "US $4.17",
		amount: "1",
		totalPrice: "US $ 18.75",
		payNow: false,
		addToCart: true,
		deleteBtn: true,
	},
];

const OrderForm = () => {
	return (
		<Form action="src/components/bootstrap/categories/eProfile/EPProfile2">
			<Row className="justify-content-between mt-4">
				<Col xs={12} md={8}>
					<div className="ezy__epprofile2-searchbar d-flex">
						<InputGroup className="w-50">
							<Form.Select
								className=" ps-4"
								aria-label="Default select example"
							>
								{orderTrack.map((item, i) => (
									<option key={i} value={`${item.value}`}>
										{item.text}
									</option>
								))}
							</Form.Select>
						</InputGroup>

						<InputGroup>
							<Form.Control
								type="email"
								className="rounded-0 ps-4"
								placeholder="Email Address"
							/>
							<Button
								variant=""
								className="d-flex justify-content-center align-items-center rounded-0"
							>
								<FontAwesomeIcon icon={faSearch} />
							</Button>
						</InputGroup>
					</div>
				</Col>

				<Col xs={12} md={4} lg={3} className="mt-4 mt-md-0">
					<InputGroup>
						<Form.Select className="ps-4" aria-label="Default select example">
							{timeFilter.map((item, i) => (
								<option key={i} value={`${item.value}`}>
									{item.text}
								</option>
							))}
						</Form.Select>
					</InputGroup>
				</Col>
			</Row>
		</Form>
	);
};

const ProductItem = ({ item }) => {
	return (
		<div className="ezy__epprofile2-card p-4 mt-4">
			<Row>
				<Col xs={12}>
					<Row className="align-items-center justify-content-between">
						<Col xs={12} sm={3}>
							<h6 className="mb-0 fw-bold">{item.type}</h6>
						</Col>
						<Col xs={12} sm={8} className="text-sm-end mt-4 mt-sm-0">
							<div className="d-flex align-items-center justify-content-sm-end">
								<div className="ezy__epprofile2-order-time pe-3">
									<p className="mb-1">Order Date: {item.orderDate}</p>
									<p className="mb-1">
										Order id: {item.orderId}{" "}
										<a
											href="src/components/bootstrap/categories/eProfile/EPProfile2#!"
											className="ezy__epprofile2-copy"
										>
											Copy
										</a>
									</p>
								</div>
								<div>
									<a
										href="src/components/bootstrap/categories/eProfile/EPProfile2#!"
										className="fw-bold ms-3 ezy__epprofile2-order-details-btn text-nowrap"
									>
										Order Details
										<FontAwesomeIcon
											icon={faChevronRight}
											className="ms-sm-2"
										/>
									</a>
								</div>
							</div>
						</Col>
					</Row>
				</Col>

				<hr className="my-3" />
				<Col xs={12}>
					<Row className="justify-content-center">
						<Col xs={12}>
							<div className="d-flex align-items-center">
								<a
									href="src/components/bootstrap/categories/eProfile/EPProfile2#!"
									className="ezy__epprofile2-store text-nowrap"
								>
									<FontAwesomeIcon icon={faBox} className="me-2" />
									{item.store}
									<FontAwesomeIcon icon={faChevronRight} className="mx-2" />
								</a>
								<a
									href="src/components/bootstrap/categories/eProfile/EPProfile2#!"
									className="ezy__epprofile2-comment"
								>
									<FontAwesomeIcon icon={faComment} />
								</a>
							</div>
						</Col>
						<Col xs={12} lg={2} className="mt-3">
							<div className="d-flex justify-content-center align-items-center h-100">
								<img src={item.img} alt="" className="img-fluid" />
							</div>
						</Col>
						<Col xs={12} lg={7} className="mt-3">
							<div>
								<h6 className="fw-normal fs-6 mb-0">{item.title}</h6>
								<p className="opacity-100 my-2">
									{item.price}{" "}
									<span className="opacity-75 ms-2">*{item.amount}</span>
								</p>
								<FontAwesomeIcon icon={faUserShield} className="opacity-75" />
							</div>
						</Col>
						<Col xs={12} lg={3} className="mt-3">
							<div className="d-flex flex-column align-items-center">
								<h6 className="fw-bold fs-6 mb-0">Total: {item.totalPrice}</h6>
								{item.payNow ? (
									<Button
										variant=""
										className="ezy__epprofile2-fill-btn w-100 rounded-pill mt-2"
									>
										Pay Now
									</Button>
								) : (
									""
								)}
								{item.addToCart ? (
									<Button
										variant=""
										className="ezy__epprofile2-fill-btn w-100 rounded-pill mt-2"
									>
										Add To Cart
									</Button>
								) : (
									""
								)}
								{item.deleteBtn ? (
									<Button
										variant=""
										className="ezy__epprofile2-outline-btn w-100 rounded-pill mt-2"
									>
										Delete
									</Button>
								) : (
									""
								)}
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

ProductItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const EProfile2 = () => {
	const [value, setValue] = useState(0);
	return (
		<section className="ezy__epprofile2">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={9} className="mt-0 mt-md-4">
						<div className="ezy__epprofile2-card p-4">
							<div className="d-flex align-items-center justify-content-between">
								<Nav className="ezy__epprofile2-navigation">
									{navData.map((navItem, index) => (
										<li
											className={`p-2 ${index === value && "active"}`}
											key={index}
											onClick={() => setValue(index)}
										>
											<a href="src/components/bootstrap/categories/eProfile/EPProfile2#!">
												{navItem.text}
											</a>
										</li>
									))}
								</Nav>
								<div>
									<a
										href="src/components/bootstrap/categories/eProfile/EPProfile2#!"
										className="ezy__epprofile2-deleted-orders"
									>
										<FontAwesomeIcon icon={faTrash} className="me-2" />
										Deleted Orders
									</a>
								</div>
							</div>
							<OrderForm />
						</div>
						{products.map((item, i) => (
							<ProductItem item={item} key={i} />
						))}
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default EProfile2;

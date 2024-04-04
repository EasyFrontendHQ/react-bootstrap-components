import React, { useState } from "react";
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
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./EPCart3.css";

/*
{
	"react": "React, { useState }",
	"react-bootstrap": "{ Button, Card, Col, Container, Form, InputGroup, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faTimes }",
	"prop-types": "PropTypes"
}
*/

const productList = [
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_5.png",
		title:
			"PD-04 Carbon Fiber Insole Poron Plantar Fasciitis Arch Support Flat Feet Orthopedic Insoles Custom Orthotics",
		price: "251",
		qty: 2,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_6.png",
		title:
			"Wholesale Hexagon Pine Solid Wood Brand Women Watch Display Box Custom Logo Wooden Watch Luxury Box",
		price: "3,517",
		qty: 2,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_7.png",
		title:
			"Lks01 Men'S Suits Casual Collar Blazers Youthful Handsome Trend Slim Fit Printed Blazers Plus Size Men'S Jackets",
		price: "7,351",
		qty: 2,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio5.jpg",
		title:
			"Factory Direct Queendom Certipur-Us Luxury Comfortable Sell Top Spring Bed 'Matress' Hotel Mattress Springs",
		price: "1,782",
		qty: 2,
	},
];

const SideBar = () => {
	return (
		<Card className="ezy__epcart3-card sticky-top">
			<Card.Body className="p-md-4">
				<h6 className="mb-4 opacity-75">Order Summary</h6>

				<div className="d-flex justify-content-between align-items-center">
					<span>Sub total</span>
					<span className="fw-bold">$4,871</span>
				</div>
				<hr className="ezy__epcart3-hr" />
				<div className="d-flex justify-content-between align-items-center">
					<span>Shipping Fee</span>
					<span className="fw-bold">$99</span>
				</div>
				<hr className="ezy__epcart3-hr" />
				<div className="d-flex justify-content-between align-items-center">
					<span>Tax</span>
					<span className="fw-bold">$209</span>
				</div>
				<hr className="ezy__epcart3-hr" />
				<div className="d-flex justify-content-between align-items-center">
					<span className="fs-5 fw-bold">Total</span>
					<span className="fw-bold">$5,431</span>
				</div>
			</Card.Body>
			<Card.Body className="px-md-4 pb-md-4">
				<Button variant="" className="ezy__epcart3-btn w-100">
					BUY (0)
				</Button>
			</Card.Body>
		</Card>
	);
};

const QtyField = ({ name, value, onChange }) => {
	const qtyControl = (qty) =>
		onChange({
			target: {
				name,
				type: "radio",
				value: qty < 1 ? 1 : qty,
			},
		});

	return (
		<InputGroup className="ezy__epcart3-qty mb-3">
			<Form.Control
				type="number"
				placeholder=""
				value={value}
				onChange={(e) => qtyControl(e.target.value)}
			/>
			<InputGroup.Text className="d-flex flex-column bg-transparent p-0">
				<Button
					variant=""
					type="button"
					onClick={() => qtyControl(parseInt(value) + 1)}
				>
					+
				</Button>
				<Button
					variant=""
					type="button"
					onClick={() => qtyControl(parseInt(value) - 1)}
				>
					-
				</Button>
			</InputGroup.Text>
		</InputGroup>
	);
};

QtyField.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any,
};

const ProductItem = ({ item, index, onChange }) => {
	return (
		<Card className="ezy__epcart3-card mb-3">
			<Card.Body className="d-flex align-items-start p-md-4">
				<div className="ezy__epcart3-image me-3 me-md-4">
					<a href="src/components/bootstrap/categories/epCart/EPCart3#!">
						<img src={item.img} alt="" className="img-fluid" />
					</a>
				</div>
				<div>
					<div className="ezy__epcart3-heading mb-3">
						<a href="src/components/bootstrap/categories/epCart/EPCart3#!">
							{item.title}
						</a>
					</div>
					<div>
						<QtyField
							name={`ezy__epcart3-qty-${index}`}
							value={item.qty}
							onChange={(e) => onChange(e, index)}
						/>
						<h3 className="ezy__epcart3-price mb-0">Rs. {item.price}</h3>
					</div>
				</div>
				<div>
					<Button
						variant=""
						className="ezy__epcart3-del d-inline-flex justify-content-center align-items-center rounded-circle p-0"
					>
						<FontAwesomeIcon icon={faTimes} className="fs-6" />
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

ProductItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

const Epcart3 = () => {
	const [products, setProducts] = useState([...productList]);

	const onChange = (e, index) => {
		const { value } = e.target;

		setProducts([
			...products.slice(0, index),
			{
				...products[index],
				qty: value,
			},
			...products.slice(index + 1),
		]);
	};

	return (
		<section className="ezy__epcart3" id="ezy__epcart3">
			<Container>
				<Row>
					<Col lg={8}>
						{products.map((item, i) => (
							<ProductItem item={item} index={i} onChange={onChange} key={i} />
						))}
					</Col>
					<Col lg={4}>
						<SideBar />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Epcart3;

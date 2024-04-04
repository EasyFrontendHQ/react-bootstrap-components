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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./EPCart1.css";

/*
{
	"react": "React, { useState }",
	"react-bootstrap": "{ Button, Card, Col, Container, Form, InputGroup, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faTrashAlt }",
	"prop-types": "PropTypes"
}
*/

const productList = [
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio17.jpg",
		title:
			"Luxury Black Matte Paint Custom Laser Logo Square Wooden Gift Box Watch Men for your Luxury Brand Heren Horloge",
		price: "11,328",
		qty: 1,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio3.jpg",
		title:
			"Iron Handle 60 90 Sheets Clothes Pet Dog Cat Hair Adhesive Sticky Lint. Storage Welded Nesting Metal Foldable Logistics Steel Wire Mesh",
		price: "5,411",
		qty: 5,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio13.jpg",
		title:
			"2022 Europe And America Hot Sell Stainless Steel Hot Sell Spoon Gift Coffee Stir Spoon Gold-plated Dessert Spoon",
		price: "21,345",
		qty: 3,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_1.png",
		title:
			"3150A Withdrawable Type Indoor AC High Voltage Vacuum Circuit Breaker High Quality With Professional Manufacturer",
		price: "27,351",
		qty: 4,
	},
];

const SideBar = () => {
	return (
		<Card className="ezy__epcart1-card sticky-top">
			<Card.Body className="p-md-4">
				<h6 className="mb-4 opacity-75">Order Summary</h6>

				<div className="d-flex justify-content-between align-items-center">
					<span>Sub total</span>
					<span className="fw-bold">$2099</span>
				</div>
				<hr className="ezy__epcart1-hr" />
				<div className="d-flex justify-content-between align-items-center">
					<span>Shipping Fee</span>
					<span className="fw-bold">$99</span>
				</div>
				<hr className="ezy__epcart1-hr" />
				<div className="d-flex justify-content-between align-items-center">
					<span>Tax</span>
					<span className="fw-bold">$168</span>
				</div>
				<hr className="ezy__epcart1-hr" />
				<div className="d-flex justify-content-between align-items-center">
					<span className="fs-5 fw-bold">Total</span>
					<span className="fw-bold">$2238</span>
				</div>
			</Card.Body>
			<Card.Body className="px-md-4 pb-md-4">
				<Button className="ezy__epcart1-btn w-100">BUY (13)</Button>
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
		<InputGroup className="ezy__epcart1-qty d-inline-flex mt-3">
			<Button
				variant=""
				className="px-3 py-1 d-inline-flex justify-content-center"
				type="button"
				onClick={() => qtyControl(parseInt(value) - 1)}
			>
				-
			</Button>
			<Form.Control
				type="number"
				placeholder=""
				value={value}
				onChange={(e) => qtyControl(e.target.value)}
			/>
			<Button
				variant=""
				className="px-3 py-1 d-inline-flex justify-content-center"
				type="button"
				onClick={() => qtyControl(parseInt(value) + 1)}
			>
				+
			</Button>
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
		<Card className="ezy__epcart1-card mb-3">
			<Card.Body className="d-flex align-items-start p-md-4">
				<div className="ezy__epcart1-image me-3 me-md-4">
					<a href="src/components/bootstrap/categories/epCart/EPCart1#!">
						<img src={item.img} alt="" className="img-fluid" />
					</a>
				</div>
				<div>
					<div className="ezy__epcart1-heading mb-3">
						<a href="src/components/bootstrap/categories/epCart/EPCart1#!">
							{item.title}
						</a>
					</div>
					<div>
						<h3 className="ezy__epcart1-price mb-0">Rs. {item.price}</h3>
						<QtyField
							name={`ezy__epcart1-qty-${index}`}
							value={item.qty}
							onChange={(e) => onChange(e, index)}
						/>
					</div>
				</div>
				<div>
					<Button
						variant=""
						className="ezy__epcart1-del d-inline-flex align-items-center rounded-circle"
					>
						<FontAwesomeIcon icon={faTrashAlt} className="fs-6" />
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

const Epcart1 = () => {
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
		<section className="ezy__epcart1" id="ezy__epcart1">
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

export default Epcart1;

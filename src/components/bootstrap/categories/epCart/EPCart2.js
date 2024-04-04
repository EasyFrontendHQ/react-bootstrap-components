import React, { Fragment, useState } from "react";
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
import "./EPCart2.css";

/*
{
	"react": "React, { Fragment, useState }",
	"react-bootstrap": "{ Button, Card, Col, Container, Form, InputGroup, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faTrashAlt }",
	"prop-types": "PropTypes"
}
*/

const productList = [
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio14.jpg",
		title:
			"ABUK Home Appliance Surge Protector Voltage Brownout Plug Outlet Power Strip Surge Protector With Pass Button",
		price: "158",
		qty: 2,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio20.jpg",
		title:
			"Forsining 3d Logo Design Hollow Engraving Black Gold Case Leather Skeleton Mechanical Watches Men Luxury Brand Heren Horloge",
		price: "7,390",
		qty: 2,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio19.jpg",
		title:
			"Factory Brand Wholesale 5# Zinc Accessories Custom Hook Slider Metal #5 For Clothing garment jacket",
		price: "21,452",
		qty: 2,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio15.jpg",
		title:
			"Factory Direct Sales Stainless Steel Heat Resistant Custom Compression Spring Manufacturer Spring Steel",
		price: "17,652",
		qty: 2,
	},
];

const SideBar = () => (
	<Card className="ezy__epcart2-card sticky-top">
		<Card.Body className="p-md-4">
			<h6 className="mb-4 opacity-75">Order Summary</h6>

			<div className="d-flex justify-content-between align-items-center">
				<span>Sub total</span>
				<span className="fw-bold">$4,898</span>
			</div>
			<hr className="ezy__epcart2-hr" />
			<div className="d-flex justify-content-between align-items-center">
				<span>Shipping Fee</span>
				<span className="fw-bold">$99</span>
			</div>
			<hr className="ezy__epcart2-hr" />
			<div className="d-flex justify-content-between align-items-center">
				<span>Tax</span>
				<span className="fw-bold">$231</span>
			</div>
			<hr className="ezy__epcart2-hr" />
			<div className="d-flex justify-content-between align-items-center">
				<span className="fs-5 fw-bold">Total</span>
				<span className="fw-bold">$5,641</span>
			</div>
		</Card.Body>
		<Card.Body className="px-md-4 pb-md-4">
			<Button className="ezy__epcart2-btn w-100">BUY (0)</Button>
		</Card.Body>
	</Card>
);

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
		<InputGroup className="ezy__epcart2-qty d-inline-flex mt-3">
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
		<Card.Body className="d-flex align-items-start p-md-4">
			<div className="ezy__epcart2-image me-3 me-md-4">
				<a href="src/components/bootstrap/categories/epCart/EPCart2#!">
					<img src={item.img} alt="" className="img-fluid" />
				</a>
			</div>
			<div>
				<div className="ezy__epcart2-heading mb-3">
					<a href="src/components/bootstrap/categories/epCart/EPCart2#!">
						{item.title}
					</a>
				</div>
				<div>
					<h3 className="ezy__epcart2-price mb-0">Rs. {item.price}</h3>
					<QtyField
						name={`ezy__epcart2-qty-${index}`}
						value={item.qty}
						onChange={(e) => onChange(e, index)}
					/>
				</div>
			</div>
			<div>
				<Button
					variant=""
					className="ezy__epcart2-del d-inline-flex align-items-center rounded-circle"
				>
					<FontAwesomeIcon icon={faTrashAlt} className="fs-6" />
				</Button>
			</div>
		</Card.Body>
	);
};

ProductItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

const Epcart2 = () => {
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
		<section className="ezy__epcart2" id="ezy__epcart2">
			<Container>
				<Row>
					<Col lg={8}>
						<Card className="ezy__epcart2-card mb-3">
							{products.map((item, i) => (
								<Fragment key={i}>
									{!!i && <hr className="ezy__epcart2-hr my-0" />}
									<ProductItem
										item={item}
										index={i}
										onChange={onChange}
										key={i}
									/>
								</Fragment>
							))}
						</Card>
					</Col>
					<Col lg={4}>
						<SideBar />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Epcart2;

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
import PropTypes from "prop-types";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./EPCart5.css";

/*
{
	"react": "React, { Fragment, useState }",
	"react-bootstrap": "{ Button, Card, Col, Container, Form, InputGroup, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faTimes }",
	"prop-types": "PropTypes"
}
*/

const productList = [
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio8.jpg",
		title:
			"Lks01 Men'S Suits Casual Collar Blazers Youthful Handsome Trend Slim Fit Printed Blazers Plus Size Men'S Jackets",
		price: " 2,311",
		qty: 2,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio2.jpg",
		title:
			"Factory Direct Queendom Certipur-Us Luxury Comfortable Sell Top Spring Bed 'Matress' Hotel Mattress Springs",
		price: "34,523",
		qty: 2,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio10.jpg",
		title:
			"PD-04 Carbon Fiber Insole Poron Plantar Fasciitis Arch Support Flat Feet Orthopedic Insoles Custom Orthotics",
		price: "2,374",
		qty: 2,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio12.jpg",
		title:
			"Forsining 3d Logo Design Hollow Engraving Black Gold Case Leather Skeleton Mechanical Watches Men Luxury Brand Heren Horloge",
		price: "8,765",
		qty: 2,
	},
];

const SideBar = () => {
	return (
		<Card className="ezy__epcart5-order">
			<Card.Body className="p-md-4 p-xl-5">
				<Row>
					<Col md={6} className="pe-md-5">
						<h5 className="mb-4">Order Summary</h5>

						<div className="d-flex justify-content-between align-items-center">
							<span>Shipping Fee</span>
							<span className="fs-5 fw-bold">$234</span>
						</div>
						<hr className="ezy__epcart5-hr d-md-none" />
					</Col>
					<Col md={6} className="ps-xl-5">
						<div className="d-flex justify-content-between align-items-center">
							<span>Sub total</span>
							<span className="fs-5 fw-bold">$32,422</span>
						</div>
						<hr className="ezy__epcart5-hr" />
						<div className="d-flex justify-content-between align-items-center">
							<span>Tax</span>
							<span className="fs-5 fw-bold">$549</span>
						</div>
						<hr className="ezy__epcart5-hr" />
						<div className="d-flex justify-content-between align-items-center">
							<span className="fs-5 fw-bold">Total</span>
							<span className="fs-5 fw-bold">$45,644</span>
						</div>

						<Button variant="" className="ezy__epcart5-btn w-100 mt-4 mt-lg-5">
							BUY (0)
						</Button>
					</Col>
				</Row>
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
		<InputGroup className="ezy__epcart5-qty mb-3">
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
		<div className="d-flex align-items-start">
			<div className="ezy__epcart5-image me-3 me-md-4">
				<a href="src/components/bootstrap/categories/epCart/EPCart5#!">
					<img src={item.img} alt="" className="img-fluid" />
				</a>
			</div>
			<div>
				<div className="ezy__epcart5-heading mb-3">
					<a href="src/components/bootstrap/categories/epCart/EPCart5#!">
						{item.title}
					</a>
				</div>
				<div>
					<QtyField
						name={`ezy__epcart5-qty-${index}`}
						value={item.qty}
						onChange={(e) => onChange(e, index)}
					/>
					<h3 className="ezy__epcart5-price mb-0">Rs. {item.price}</h3>
				</div>
			</div>
			<div className="ms-3">
				<Button
					variant=""
					className="ezy__epcart5-del d-inline-flex justify-content-center align-items-center rounded-circle p-0"
				>
					<FontAwesomeIcon icon={faTimes} className="fs-6" />
				</Button>
			</div>
		</div>
	);
};

ProductItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

const Epcart5 = () => {
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
		<section className="ezy__epcart5" id="ezy__epcart5">
			<Container>
				<Row className="justify-content-center">
					<Col lg={9}>
						<Card className="ezy__epcart5-card mb-3">
							<Card.Body className="p-md-4 p-lg-5">
								{products.map((item, i) => (
									<Fragment key={i}>
										{!!i && <hr className="ezy__epcart5-hr my-3 my-md-4" />}
										<ProductItem
											item={item}
											index={i}
											onChange={onChange}
											key={i}
										/>
									</Fragment>
								))}
							</Card.Body>
							<Card.Body className="p-md-4 p-lg-5">
								<SideBar />
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Epcart5;

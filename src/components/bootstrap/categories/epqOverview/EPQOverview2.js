import React, { Fragment, useState } from "react";
import {
	Button,
	ButtonGroup,
	Col,
	Container,
	Form,
	InputGroup,
	Modal,
	Nav,
	Row,
	ToggleButton,
} from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./EPQOverview2.css";

/*
{
	"react": "React, { Fragment, useState }",
	"react-bootstrap": "{Button, ButtonGroup, Col, Container, Form, InputGroup, Row, ToggleButton}",
	"@fortawesome/free-solid-svg-icons": "{ faTimes }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"prop-types": "PropTypes",
}
*/

const product = {
	title: "Hands-Free Call, Voice Assistant - Black.",
	previews: [
		{
			previewUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone1.png",
			thumbUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone1-1.png",
		},
		{
			previewUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone1.png",
			thumbUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone1-2.png",
		},
		{
			previewUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone1.png",
			thumbUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone1-3.png",
		},
	],
	price: 4521,
	colorVariants: [
		{ label: "Multi", value: "Multi", title: "Multi" },
		{ label: "Red", value: "Red", title: "Red" },
		{ label: "Green", value: "Green", title: "Green" },
		{ label: "Blue", value: "Blue", title: "Blue" },
		{ label: "Black", value: "Black", title: "Black" },
	],
	sizeVariants: [
		{ label: "XXS", value: "SSX", title: "Extra Extra Small" },
		{ label: "XS", value: "XS", title: "Extra Small" },
		{ label: "S", value: "S", title: "Small" },
		{ label: "M", value: "M", title: "Medium" },
		{ label: "L", value: "L", title: "Large" },
		{ label: "XL", value: "XL", title: "Extra Large" },
		{ label: "XXL", value: "XXL", title: "Extra Extra Large" },
		{
			label: "XXXL",
			value: "XXXL",
			title: "Extra extra extra large",
			disabled: true,
		},
	],
};

const ProductPreviews = ({ previews }) => {
	const [index, setIndex] = useState(0);

	return (
		<Row className="justify-content-center">
			<Col lg={10}>
				<div className="d-flex">
					<div className="text-center flex-grow-1 pe-4">
						<img
							src={previews[index].previewUrl}
							alt=""
							className="img-fluid"
						/>
					</div>

					<Nav className="flex-column align-items-center ezy__epqoverview2-gallery">
						{previews.map((preview, i) => (
							<li key={i} onClick={() => setIndex(i)}>
								<img src={preview.thumbUrl} alt="" className="img-fluid" />
							</li>
						))}
					</Nav>
				</div>
			</Col>
		</Row>
	);
};

ProductPreviews.propTypes = {
	previews: PropTypes.array.isRequired,
};

const RadioButtons = ({ data, name, onChange, value, label }) => {
	const optionDetails = data.find((e) => e.value === value);

	return (
		<Fragment>
			<h5 className="ezy__epqoverview2-title mb-2">
				{label}:
				{optionDetails && (
					<span className="opacity-50 ms-1 text-capitalize">
						{optionDetails.title}
					</span>
				)}
			</h5>
			<ButtonGroup className="ezy__epqoverview2-radios d-block mb-2">
				{data.map(({ value: optionValue, label, ...rest }, i) => (
					<ToggleButton
						key={i}
						id={`${name}-${i}`}
						type="radio"
						variant=""
						name={name}
						value={optionValue}
						checked={value === optionValue}
						onChange={onChange}
						className="rounded-pill me-2 mt-1"
						{...rest}
					>
						{label}
					</ToggleButton>
				))}
			</ButtonGroup>
		</Fragment>
	);
};

RadioButtons.propTypes = {
	data: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any,
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
		<InputGroup className="ezy__epqoverview2-qty d-inline-flex mb-2">
			<Button
				variant=""
				className="px-4"
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
				className="px-4"
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

const Epqoverview2 = () => {
	const [show, setShow] = useState(false);
	const [formData, setFormData] = useState({
		color: "Multi",
		size: "XL",
		qty: 1,
	});

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const setField = (e) => {
		const { name, value, type, checked } = e.target;

		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	return (
		<Fragment>
			<section className="ezy__epqoverview2 py-5">
				<Container>
					<Button variant="primary" onClick={handleShow}>
						Product Quick Overview 2
					</Button>
				</Container>
			</section>
			<Modal
				show={show}
				onHide={handleClose}
				className="ezy__epqoverview2"
				contentClassName="overflow-hidden"
				size="lg"
				centered={true}
			>
				<Button
					variant="close"
					className="position-absolute end-0 top-0 mt-3 me-3"
					onClick={handleClose}
				>
					<FontAwesomeIcon icon={faTimes} />
				</Button>
				<Modal.Body className="p-lg-5">
					<ProductPreviews previews={product.previews} />
					<div className="mt-4 mt-lg-5">
						<Row className="mb-4">
							<Col>
								<h1 className="ezy__epqoverview2-heading mb-0 flex-grow-1">
									{product.title}
								</h1>
							</Col>
							<Col xs={12} lg="auto">
								<h3 className="ezy__epqoverview2-price mb-3 text-nowrap">
									{product.price.toLocaleString("en-US", {
										style: "currency",
										currency: "USD",
									})}
								</h3>
							</Col>
						</Row>
						<Form action="src/components/bootstrap/categories/epqOverview/EPQOverview2#">
							<div className="mb-4">
								<RadioButtons
									label="Color"
									onChange={setField}
									name="color"
									data={product.colorVariants}
									value={formData.color}
								/>
							</div>
							<div className="mb-4">
								<RadioButtons
									label="Size"
									onChange={setField}
									name="size"
									data={product.sizeVariants}
									value={formData.size}
								/>
							</div>
							<div className="mb-4">
								<h5 className="ezy__epqoverview2-title mb-2">QTY</h5>
								<QtyField onChange={setField} name="qty" value={formData.qty} />
							</div>

							<div>
								<Button
									variant=""
									className="ezy__epqoverview2-btn text-uppercase w-100 px-4 me-1"
								>
									Add To Cart
								</Button>
								<Button
									variant="link"
									className="ezy__epqoverview2-share text-decoration-none w-100 mt-1"
								>
									View Details
								</Button>
							</div>
						</Form>
					</div>
				</Modal.Body>
			</Modal>
		</Fragment>
	);
};

export default Epqoverview2;

import React, { Fragment, useState } from "react";
import {
	Button,
	ButtonGroup,
	Col,
	Container,
	Form,
	InputGroup,
	Modal,
	Row,
	ToggleButton,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./EPQOverview1.css";

/*
{
	"react": "React, { Fragment, useState }",
	"react-bootstrap": "{Button, ButtonGroup, Col, Container, Form, InputGroup, Modal, Row, ToggleButton}",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faTimes }",
	"prop-types": "PropTypes",
}
*/

const product = {
	title: "Women's Classic-Fit Long-Sleeve Full-Zip Polar Soft Fleece Jacket",
	previewUrl: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid2_1.jpg",
	price: 4576,
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

const ProductPreview = ({ product }) => {
	return (
		<div
			className="ezy__epqoverview1-bg-holder"
			style={{ backgroundImage: `url(${product.previewUrl})` }}
		/>
	);
};

ProductPreview.propTypes = {
	product: PropTypes.object.isRequired,
};

const RadioButtons = ({ data, name, onChange, value, label }) => {
	const optionDetails = data.find((e) => e.value === value);

	return (
		<Fragment>
			<h5 className="ezy__epqoverview1-title mb-2">
				{label}:
				{optionDetails && (
					<span className="opacity-50 ms-1 text-capitalize">
						{optionDetails.title}
					</span>
				)}
			</h5>
			<ButtonGroup className="ezy__epqoverview1-radios d-block mb-2">
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
		<InputGroup className="ezy__epqoverview1-qty d-inline-flex mb-2">
			<Button
				variant=""
				className="px-4"
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

const Epqoverview1 = () => {
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
			<section className="ezy__epqoverview1 py-5">
				<Container>
					<Button variant="primary" onClick={handleShow}>
						Product Quick Overview 1
					</Button>
				</Container>
			</section>
			<Modal
				show={show}
				onHide={handleClose}
				className="ezy__epqoverview1"
				contentClassName="overflow-hidden"
				size="xl"
				centered={true}
			>
				<Button
					variant="close"
					className="position-absolute end-0 top-0 mt-3 me-3"
					onClick={handleClose}
				>
					<FontAwesomeIcon icon={faTimes} />
				</Button>
				<Modal.Body className="p-0">
					<Row>
						<Col lg={6} className="position-relative">
							<ProductPreview product={product} />
						</Col>
						<Col lg={6} className="mt-4 mt-md-0">
							<div className="px-4 py-5">
								<div className="mb-4 mb-lg-5">
									<h1 className="ezy__epqoverview1-heading mb-3">
										{product.title}
									</h1>
									<h3 className="ezy__epqoverview1-price mb-0">
										{product.price.toLocaleString("en-US", {
											style: "currency",
											currency: "USD",
										})}
									</h3>
								</div>
								<Form action="src/components/bootstrap/categories/epqOverview/EPQOverview1#">
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
										<h5 className="ezy__epqoverview1-title mb-2">QTY</h5>
										<QtyField
											onChange={setField}
											name="qty"
											value={formData.qty}
										/>
									</div>

									<div>
										<Button
											variant=""
											className="ezy__epqoverview1-btn text-uppercase w-100 px-4 me-1"
										>
											Add To Cart
										</Button>
										<Button
											variant="link"
											className="ezy__epqoverview1-share text-decoration-none w-100 mt-1"
										>
											View Details
										</Button>
									</div>
								</Form>
							</div>
						</Col>
					</Row>
				</Modal.Body>
			</Modal>
		</Fragment>
	);
};

export default Epqoverview1;

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
import {
	faHeart,
	faShareAlt,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";

import "./EPQOverview5.css";

/*
{
	"react": "React, { Fragment, useState }",
	"react-bootstrap": "{Button, ButtonGroup, Col, Container, Form, InputGroup, Nav, Row, ToggleButton}",
	"@fortawesome/free-solid-svg-icons": "{ faHeart, faShareAlt, faTimes }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"prop-types": "PropTypes",
}
*/

const product = {
	title: "Switch Plug Touch Bud Table Lamps LED Creative Mushroom Lamp Makaron",
	previews: [
		{
			previewUrl: "https://cdn.easyfrontend.com/pictures/products/lamp1.png",
			thumbUrl: "https://cdn.easyfrontend.com/pictures/products/lamp1.png",
		},
		{
			previewUrl: "https://cdn.easyfrontend.com/pictures/products/lamp2.png",
			thumbUrl: "https://cdn.easyfrontend.com/pictures/products/lamp2.png",
		},
		{
			previewUrl: "https://cdn.easyfrontend.com/pictures/products/lamp3.png",
			thumbUrl: "https://cdn.easyfrontend.com/pictures/products/lamp3.png",
		},
	],
	price: 2000.41,
	colorVariants: [
		{ label: "Multi", value: "Multi", title: "Multi", color: "#ffc107" },
		{ label: "Red", value: "Red", title: "Red", color: "#3aa9f3" },
		{ label: "Green", value: "Green", title: "Green", color: "#ff7171" },
		{ label: "Blue", value: "Blue", title: "Blue", color: "#1d54ec" },
		{ label: "Black", value: "Black", title: "Black", color: "#161d25" },
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
		<div className="ezy__epqoverview5-card p-3">
			<div className="text-center flex-grow-1 py-4">
				<img src={previews[index].previewUrl} alt="" className="img-fluid" />
			</div>

			<Nav className="ezy__epqoverview5-gallery">
				{previews.map((preview, i) => (
					<li key={i} onClick={() => setIndex(i)}>
						<img src={preview.thumbUrl} alt="" className="img-fluid" />
					</li>
				))}
			</Nav>
		</div>
	);
};

ProductPreviews.propTypes = {
	previews: PropTypes.array.isRequired,
};

const ColorButtons = ({ data, name, onChange, value }) => {
	const optionDetails = data.find((e) => e.value === value);

	return (
		<Fragment>
			<h5 className="ezy__epqoverview5-title mb-2">
				Color:
				{optionDetails && (
					<span className="opacity-50 ms-1 text-capitalize">
						{optionDetails.title}
					</span>
				)}
			</h5>
			<ButtonGroup className="ezy__epqoverview5-radios d-block mb-2">
				{data.map(({ value: rowValue, label, color, ...rowRest }, i) => (
					<ToggleButton
						key={i}
						id={`ezy__epqoverview5-${name}-${i}`}
						type="radio"
						variant=""
						name={name}
						value={rowValue}
						checked={value === rowValue}
						onChange={onChange}
						className="rounded-pill me-2 mt-1"
						style={{ "--ezy-product-color": color }}
						{...rowRest}
					/>
				))}
			</ButtonGroup>
		</Fragment>
	);
};

ColorButtons.propTypes = {
	data: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any,
};

const SizeButtons = ({ data, name, onChange, value }) => {
	const optionDetails = data.find((e) => e.value === value);

	return (
		<Fragment>
			<h5 className="ezy__epqoverview5-title mb-2">
				Size:
				{optionDetails && (
					<span className="opacity-50 ms-1 text-capitalize">
						{optionDetails.title}
					</span>
				)}
			</h5>
			<ButtonGroup className="ezy__epqoverview5-radios d-block mb-2">
				{data.map(({ value: optionValue, label, ...rest }, i) => (
					<ToggleButton
						key={i}
						id={`ezy__epqoverview5-${name}-${i}`}
						type="radio"
						variant=""
						name={name}
						value={optionValue}
						checked={value === optionValue}
						onChange={onChange}
						className="rounded-pill me-2 mt-1 px-3 py-1"
						{...rest}
					>
						{label}
					</ToggleButton>
				))}
			</ButtonGroup>
		</Fragment>
	);
};

SizeButtons.propTypes = {
	data: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
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
		<InputGroup className="ezy__epqoverview5-qty d-inline-flex mb-2">
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

const Epqoverview5 = () => {
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
			<section className="ezy__epqoverview5 py-5">
				<Container>
					<Button variant="primary" onClick={handleShow}>
						Product Quick Overview 5
					</Button>
				</Container>
			</section>
			<Modal
				show={show}
				onHide={handleClose}
				className="ezy__epqoverview5"
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
					<Row className="justify-content-center">
						<Col lg={6}>
							<ProductPreviews previews={product.previews} />
						</Col>
						<Col lg={6} className="mt-4 mt-md-0">
							<div className="px-4 py-5">
								<h1 className="ezy__epqoverview5-heading mb-4 flex-grow-1">
									{product.title}
								</h1>
								<h3 className="ezy__epqoverview5-price mb-3 text-nowrap ">
									{product.price.toLocaleString("en-US", {
										style: "currency",
										currency: "USD",
									})}
								</h3>

								<Form action="src/components/bootstrap/categories/epqOverview/EPQOverview5#">
									<div className="mb-4">
										<ColorButtons
											onChange={setField}
											name="color"
											data={product.colorVariants}
											value={formData.color}
										/>
									</div>
									<div className="mb-4">
										<SizeButtons
											onChange={setField}
											name="size"
											data={product.sizeVariants}
											value={formData.size}
										/>
									</div>
									<div className="mb-4">
										<h5 className="ezy__epqoverview5-title mb-2">QTY</h5>
										<QtyField
											onChange={setField}
											name="qty"
											value={formData.qty}
										/>
									</div>

									<Row>
										<Col className="d-flex">
											<Button
												variant=""
												className="ezy__epqoverview5-btn text-nowrap text-uppercase w-100 px-4 me-2 me-lg-3"
											>
												Add To Cart
											</Button>
											<Button
												variant="link"
												className="ezy__epqoverview5-btn-outline text-nowrap text-decoration-none w-100"
											>
												View Details
											</Button>
										</Col>
										<Col xs={12} className="mt-2">
											<Button
												variant="link"
												className="ezy__epqoverview5-fav d-inline-flex align-items-center text-decoration-none"
											>
												<FontAwesomeIcon icon={faHeart} className="fs-5 me-1" />{" "}
												Add to wishlist
											</Button>
											<Button
												variant="link"
												className="ezy__epqoverview5-share d-inline-flex align-items-center text-decoration-none"
											>
												<FontAwesomeIcon
													icon={faShareAlt}
													className="fs-5 me-1"
												/>{" "}
												Share
											</Button>
										</Col>
									</Row>
								</Form>
							</div>
						</Col>
					</Row>
				</Modal.Body>
			</Modal>
		</Fragment>
	);
};

export default Epqoverview5;

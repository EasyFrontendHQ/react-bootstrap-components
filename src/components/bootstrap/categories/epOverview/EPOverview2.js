import React, { Fragment, useState } from "react";
import {
	Button,
	ButtonGroup,
	Col,
	Container,
	Form,
	InputGroup,
	Nav,
	Row,
	ToggleButton,
} from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

import "./EPOverview2.css";

/*
{
	"react": "React, { Fragment, useState }",
	"react-bootstrap": "{Button, ButtonGroup, Col, Container, Form, InputGroup, Nav, Row, ToggleButton}",
	"@fortawesome/free-solid-svg-icons": "{ faHeart, faShareAlt, faStar }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"prop-types": "PropTypes",
	 "classnames": "classNames"
}
*/

const product = {
	title: "Stitching Women Summer Shoulder Crossbody Bag",
	previews: [
		{
			previewUrl:
				"https://cdn.easyfrontend.com/pictures/products/women-bag1.jpg",
			thumbUrl: "https://cdn.easyfrontend.com/pictures/products/women-bag1.jpg",
		},
		{
			previewUrl:
				"https://cdn.easyfrontend.com/pictures/products/women-bag2.jpg",
			thumbUrl: "https://cdn.easyfrontend.com/pictures/products/women-bag2.jpg",
		},
		{
			previewUrl:
				"https://cdn.easyfrontend.com/pictures/products/women-bag3.jpg",
			thumbUrl: "https://cdn.easyfrontend.com/pictures/products/women-bag3.jpg",
		},
	],
	rating: 4.0,
	rateCount: 136,
	price: 990,
	colorVariants: [
		{ label: "Multi", value: "Multi", title: "Multi", color: "#ffc107" },
		{ label: "Red", value: "Red", title: "Red", color: "#3aa9f3" },
		{ label: "Green", value: "Green", title: "Green", color: "#ff7171" },
		{ label: "Blue", value: "Blue", title: "Blue", color: "#1d54ec" },
		{ label: "Black", value: "Black", title: "Black", color: "#161d25" },
	],
	sizeVariants: [
		{ label: "XXS", value: "SSX", title: "Extra extra small" },
		{ label: "XS", value: "XS", title: "Extra small" },
		{ label: "S", value: "S", title: "Small" },
		{ label: "M", value: "M", title: "Medium" },
		{ label: "L", value: "L", title: "Large" },
		{ label: "XL", value: "XL", title: "Extra large" },
		{ label: "XXL", value: "XXL", title: "Extra extra large" },
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
		<div className="me-lg-4">
			<div className="text-center rounded-3 overflow-hidden m-2">
				<img
					src={previews[index].previewUrl}
					alt=""
					className="ezy__epoverview2-banner img-fluid w-100"
				/>
			</div>

			<Nav className="d-flex flex-nowrap ezy__epoverview2-gallery">
				{previews.map((preview, i) => (
					<li
						className="rounded-3 overflow-hidden m-2"
						key={i}
						onClick={() => setIndex(i)}
					>
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

const ColorRadioButtons = ({ data, name, onChange, value }) => {
	const optionDetails = data.find((e) => e.value === value);

	return (
		<Fragment>
			<h5 className="ezy__epoverview2-title mb-2">
				Color:
				{optionDetails && (
					<span className="opacity-50 ms-1 text-capitalize">
						{optionDetails.title}
					</span>
				)}
			</h5>
			<ButtonGroup className="ezy__epoverview2-radios d-block mb-2">
				{data.map(({ value: rowValue, label, color, ...rowRest }, i) => (
					<ToggleButton
						key={i}
						id={`ezy__epoverview2-${name}-${i}`}
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

ColorRadioButtons.propTypes = {
	data: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any,
};

const RadioButtons = ({ data, name, onChange, value, className }) => {
	const optionDetails = data.find((e) => e.value === value);

	return (
		<Fragment>
			<h5 className="ezy__epoverview2-title mb-2">
				Size:
				{optionDetails && (
					<span className="opacity-50 ms-1 text-capitalize">
						{optionDetails.title}
					</span>
				)}
			</h5>
			<ButtonGroup className="ezy__epoverview2-radios d-block mb-2">
				{data.map(({ value: rowValue, label, color, ...rowRest }, i) => (
					<ToggleButton
						key={i}
						id={`ezy__epoverview2-${name}-${i}`}
						type="radio"
						variant=""
						name={name}
						value={rowValue}
						checked={value === rowValue}
						onChange={onChange}
						className={classNames("rounded-pill me-2 mt-1", className)}
						{...rowRest}
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
	className: PropTypes.string,
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
		<InputGroup className="ezy__epoverview2-qty d-inline-flex mb-2">
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

const Epoverview2 = () => {
	const [formData, setFormData] = useState({
		color: "Multi",
		size: "XL",
		qty: 1,
	});

	const setField = (e) => {
		const { name, value, type, checked } = e.target;

		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	return (
		<section className="ezy__epoverview2" id="ezy__epoverview2">
			<Container>
				<Row>
					<Col lg={6}>
						<ProductPreviews previews={product.previews} />
					</Col>
					<Col lg={6} className="mt-4 mt-md-0">
						<div className="mb-4 mb-lg-5">
							<h1 className="ezy__epoverview2-heading mb-3">{product.title}</h1>
							<p className="ezy__epoverview2-content fw-light mb-4">
								<span>{product.rating}</span>{" "}
								<FontAwesomeIcon icon={faStar} className="mx-2" />
								<a
									href="src/components/bootstrap/categories/epOverview/EPOverview2#!"
									className="ezy__epoverview2-review ms-1"
								>
									{product.rateCount} Reviews
								</a>{" "}
								<span className="ms-2">104 Order</span>
							</p>
							<h3 className="ezy__epoverview2-price mb-0">
								{" "}
								{product.price.toLocaleString("en-US", {
									style: "currency",
									currency: "USD",
								})}
							</h3>
						</div>

						<Form action="src/components/bootstrap/categories/epOverview/EPOverview2#">
							<div className="mb-4">
								<ColorRadioButtons
									onChange={setField}
									name="color"
									data={product.colorVariants}
									value={formData.color}
								/>
							</div>
							<div className="mb-4">
								<RadioButtons
									onChange={setField}
									name="size"
									data={product.sizeVariants}
									value={formData.size}
									className="px-3 py-1"
								/>
							</div>
							<div className="mb-4">
								<h5 className="ezy__epoverview2-title mb-2">QTY</h5>
								<QtyField onChange={setField} name="qty" value={formData.qty} />
							</div>

							<div>
								<Button
									variant=""
									type="button"
									className="ezy__epoverview2-btn text-uppercase d-inline-flex align-items-center px-3 px-sm-5 me-1"
								>
									Buy Now
								</Button>
								<Button
									variant=""
									type="button"
									className="ezy__epoverview2-btn-outline text-uppercase bg-transparent d-inline-flex align-items-center px-3 px-sm-4 me-1"
								>
									Add To Cart
								</Button>
								<Button
									variant="link"
									type="button"
									className="ezy__epoverview2-fav d-inline-flex align-items-center text-decoration-none"
								>
									<FontAwesomeIcon icon={faHeart} className="fs-5" />
								</Button>
								<Button
									variant="link"
									type="button"
									className="ezy__epoverview2-share d-inline-flex align-items-center text-decoration-none"
								>
									<FontAwesomeIcon icon={faShareAlt} className="fs-5" />
								</Button>
							</div>

							<Row className="mt-4">
								<Col xs={12} lg={10} xl={8}>
									<p className="ezy__epoverview2-content mb-0">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque nec consequat lorem. Maecenas elementum at diam
										consequat bibendum.
									</p>
								</Col>
							</Row>
						</Form>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Epoverview2;

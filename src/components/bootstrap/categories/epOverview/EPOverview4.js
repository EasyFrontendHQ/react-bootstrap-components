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

import "./EPOverview4.css";

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
	title: "Beats Headphone 2019",
	previews: [
		{
			previewUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2.png",
			thumbUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-1.png",
		},
		{
			previewUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
			thumbUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
		},
		{
			previewUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
			thumbUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
		},
	],
	rating: 5.0,
	rateCount: 1256,
	price: 27351,
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
		<div className="ezy__epoverview4-card p-3 p-sm-4 p-lg-5 me-lg-4">
			<div className="text-center mb-3 p-md-4">
				<img
					src={previews[index].previewUrl}
					alt=""
					className="img-fluid w-100"
				/>
			</div>

			<Nav className="ezy__epoverview4-gallery">
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

const ColorRadioButtons = ({ data, name, onChange, value }) => {
	const optionDetails = data.find((e) => e.value === value);

	return (
		<Fragment>
			<h5 className="ezy__epoverview4-title mb-2">
				Color:
				{optionDetails && (
					<span className="opacity-50 ms-1 text-capitalize">
						{optionDetails.title}
					</span>
				)}
			</h5>
			<ButtonGroup className="ezy__epoverview4-radios d-block mb-2">
				{data.map(({ value: rowValue, label, color, ...rowRest }, i) => (
					<ToggleButton
						key={i}
						id={`ezy__epoverview4-${name}-${i}`}
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
			<h5 className="ezy__epoverview4-title mb-2">
				Size:
				{optionDetails && (
					<span className="opacity-50 ms-1 text-capitalize">
						{optionDetails.title}
					</span>
				)}
			</h5>
			<ButtonGroup className="ezy__epoverview4-radios d-block mb-2">
				{data.map(({ value: rowValue, label, color, ...rowRest }, i) => (
					<ToggleButton
						key={i}
						id={`ezy__epoverview4-${name}-${i}`}
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
		<InputGroup className="ezy__epoverview4-qty d-inline-flex mb-2">
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

const Epoverview4 = () => {
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
		<section className="ezy__epoverview4" id="ezy__epoverview4">
			<Container>
				<Row>
					<Col lg={6}>
						<ProductPreviews previews={product.previews} />
					</Col>
					<Col lg={6} className="mt-4 mt-md-0">
						<div className="mb-4 mb-lg-5">
							<h1 className="ezy__epoverview4-heading mb-3">{product.title}</h1>
							<p className="ezy__epoverview4-content fw-light mb-4">
								<span>4.0</span>{" "}
								<FontAwesomeIcon icon={faStar} className="mx-2" />
								<a
									href="src/components/bootstrap/categories/epOverview/EPOverview4#!"
									className="ezy__epoverview4-review ms-1"
								>
									8 Reviews
								</a>{" "}
								<span className="ms-2">104 Order</span>
							</p>
							<Row className="my-4">
								<Col xs={12} lg={10} xl={8}>
									<p className="ezy__epoverview4-content mb-0">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque nec consequat lorem. Maecenas elementum at diam
										consequat bibendum.
									</p>
								</Col>
							</Row>
							<h3 className="ezy__epoverview4-price mb-0">
								Rs.{" "}
								{product.price.toLocaleString("en-US", {
									style: "currency",
									currency: "USD",
								})}
							</h3>
						</div>

						<Form action="src/components/bootstrap/categories/epOverview/EPOverview4#">
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
								<h5 className="ezy__epoverview4-title mb-2">QTY</h5>
								<QtyField onChange={setField} name="qty" value={formData.qty} />
							</div>

							<Row className="align-items-center">
								<Col md={10} className="d-flex">
									<Button
										variant=""
										type="button"
										className="ezy__epoverview4-btn text-uppercase align-items-center px-3 px-sm-5 me-1 w-100"
									>
										Buy Now
									</Button>
									<Button
										variant=""
										type="button"
										className="ezy__epoverview4-btn-outline text-uppercase bg-transparent align-items-center px-3 px-sm-4 me-1 w-100"
									>
										Add To Cart
									</Button>
								</Col>
								<Col xs={12} className="mt-3">
									<Button
										variant="link"
										type="button"
										className="ezy__epoverview4-fav d-inline-flex align-items-center text-decoration-none"
									>
										<FontAwesomeIcon icon={faHeart} className="fs-5 me-1" /> Add
										to wishlist
									</Button>
									<Button
										variant="link"
										type="button"
										className="ezy__epoverview4-share d-inline-flex align-items-center text-decoration-none"
									>
										<FontAwesomeIcon icon={faShareAlt} className="fs-5 me-1" />{" "}
										share
									</Button>
								</Col>
							</Row>
						</Form>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Epoverview4;

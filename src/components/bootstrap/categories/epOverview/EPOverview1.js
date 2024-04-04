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
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";

import "./EPOverview1.css";

/*
{
	"react": "React, { Fragment, useState }",
	"react-bootstrap": "{Button, ButtonGroup, Col, Container, Form, InputGroup, Nav, Row, ToggleButton}",
	"@fortawesome/free-solid-svg-icons": "{ faHeart, faShareAlt }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"prop-types": "PropTypes",
}
*/

const product = {
	title: "Large Lazy Inflatable Flocking Sofa",
	previews: [
		{
			previewUrl: "https://cdn.easyfrontend.com/pictures/products/sofa3.png",
			thumbUrl: "https://cdn.easyfrontend.com/pictures/products/sofa3.png",
		},
		{
			previewUrl: "https://cdn.easyfrontend.com/pictures/products/sofa2.png",
			thumbUrl: "https://cdn.easyfrontend.com/pictures/products/sofa2.png",
		},
		{
			previewUrl: "https://cdn.easyfrontend.com/pictures/products/sofa5.png",
			thumbUrl: "https://cdn.easyfrontend.com/pictures/products/sofa5.png",
		},
	],
	rating: 5.0,
	rateCount: 1256,
	price: 7230,
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
		<Fragment>
			<div className="ezy__epoverview1-shape" />

			<div className="position-relative">
				<div className="text-center mb-3 p-md-4">
					<img src={previews[index].previewUrl} alt="" className="img-fluid" />
				</div>

				<Nav className="ezy__epoverview1-gallery">
					{previews.map((preview, i) => (
						<li key={i} onClick={() => setIndex(i)}>
							<img src={preview.thumbUrl} alt="" className="img-fluid" />
						</li>
					))}
				</Nav>
			</div>
		</Fragment>
	);
};

ProductPreviews.propTypes = {
	previews: PropTypes.array.isRequired,
};

const RadioButtons = ({ data, name, onChange, value, label }) => {
	const optionDetails = data.find((e) => e.value === value);

	return (
		<Fragment>
			<h5 className="ezy__epoverview1-title mb-2">
				{label}:
				{optionDetails && (
					<span className="opacity-50 ms-1 text-capitalize">
						{optionDetails.title}
					</span>
				)}
			</h5>
			<ButtonGroup className="ezy__epoverview1-radios d-block mb-2">
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
		<InputGroup className="ezy__epoverview1-qty d-inline-flex mb-2">
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

const Epoverview1 = () => {
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
		<section className="ezy__epoverview1" id="ezy__epoverview1">
			<Container>
				<Row>
					<Col md={6} className="position-relative">
						<ProductPreviews previews={product.previews} />
					</Col>
					<Col md={6} className="mt-4 mt-md-0">
						<div className="mb-4 mb-lg-5">
							<h1 className="ezy__epoverview1-heading mb-3">{product.title}</h1>
							<p className="ezy__epoverview1-content fw-light mb-4">
								{product.rating.toFixed(1)} out of ({product.rateCount}){" "}
								<a
									href="src/components/bootstrap/categories/epOverview/EPOverview1#!"
									className="ezy__epoverview1-review ms-1"
								>
									Reviews
								</a>
							</p>
							<h3 className="ezy__epoverview1-price mb-0">
								{" "}
								{product.price.toLocaleString("en-US", {
									style: "currency",
									currency: "USD",
								})}
							</h3>
						</div>

						<Form action="src/components/bootstrap/categories/epOverview/EPOverview1#">
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
								<h5 className="ezy__epoverview1-title mb-2">QTY</h5>
								<QtyField onChange={setField} name="qty" value={formData.qty} />
							</div>

							<div>
								<Button
									variant=""
									className="ezy__epoverview1-btn text-uppercase d-inline-flex align-items-center px-4 me-1"
								>
									Add To Cart
								</Button>
								<Button
									variant=""
									className="ezy__epoverview1-btn fs-5 d-inline-flex align-items-center justify-content-center p-0 me-1"
								>
									<FontAwesomeIcon icon={faHeart} />
								</Button>
								<Button
									variant="link"
									className="ezy__epoverview1-share d-inline-flex align-items-center text-decoration-none"
								>
									<FontAwesomeIcon icon={faShareAlt} className="me-2 fs-5" />{" "}
									Share
								</Button>
							</div>

							<Row className="mt-4">
								<Col xs={12} lg={10} xl={8}>
									<p className="ezy__epoverview1-content mb-0">
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

export default Epoverview1;

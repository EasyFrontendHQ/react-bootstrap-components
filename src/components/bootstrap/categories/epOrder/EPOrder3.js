import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./EPOrder3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
    "prop-types": "PropTypes"
}
*/

const inputs = [
	{
		level: "Full Name",
		type: "text",
		placeholder: "Jon Doe",
		for: "name",
		required: true,
	},
	{
		level: "Email",
		type: "email",
		placeholder: "example@gmail.com",
		for: "email",
		required: true,
	},
	{
		level: "Country",
		type: "text",
		placeholder: "Bangladesh",
		for: "country",
		required: false,
	},
	{
		level: "Sreet Address",
		type: "text",
		placeholder: "11 Zia Uddin Road",
		for: "address",
		required: false,
	},
	{
		level: "Post Code",
		type: "number",
		placeholder: "****",
		for: "post",
		required: true,
	},
	{
		level: "Phone",
		type: "number",
		placeholder: "+88016***78",
		for: "phone",
		required: true,
	},
];

const ProgressBar = () => {
	return (
		<Col xs={12}>
			<div className="ezy__eporder3-progress d-flex justify-content-between position-relative mb-5">
				<span className="ezy__eporder3-cart active">1</span>
				<span className="ezy__eporder3-bill active">2</span>
				<span className="ezy__eporder3-completed">3</span>
			</div>
		</Col>
	);
};

const InputItem = ({ input }) => {
	return (
		<Form.Group className="mt-4">
			<Form.Label htmlFor={input.for}>
				{input.level} <span>{input.required ? "*" : ""}</span>
			</Form.Label>
			<Form.Control
				type={input.type}
				id={input.for}
				placeholder={input.placeholder}
				required
			/>
		</Form.Group>
	);
};

InputItem.propTypes = {
	input: PropTypes.object.isRequired,
};

const OrderForm = () => {
	return (
		<Form action="src/components/bootstrap/categories/epOrder/EPOrder3">
			<h4>Your Billing Details</h4>
			{inputs.map((input, i) => (
				<InputItem input={input} key={i} />
			))}
		</Form>
	);
};

const Shape = ({ ...rest }) => {
	return (
		<svg
			width="50"
			height="34"
			viewBox="0 0 50 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<g id="paypal-color-large">
				<rect
					id="card_bg"
					x="1"
					y="1"
					width="48"
					height="32"
					rx="4"
					fill="white"
					stroke="#BCBDBD"
				/>
				<g id="paypal">
					<path
						id="Path"
						d="M21.3385 26.3202L21.6885 24.1202H20.9085H17.2285L19.7885 7.86018C19.7953 7.8098 19.8202 7.76361 19.8585 7.73018C19.8987 7.69911 19.9477 7.6816 19.9985 7.68018H26.2085C28.2785 7.68018 29.6985 8.11018 30.4485 8.96018C30.7804 9.3167 31.0116 9.75498 31.1185 10.2302C31.2351 10.8077 31.2351 11.4027 31.1185 11.9802V12.4802L31.4685 12.6802C31.735 12.813 31.9754 12.9925 32.1785 13.2102C32.4842 13.5792 32.6815 14.0257 32.7485 14.5002C32.8234 15.1204 32.7964 15.7487 32.6685 16.3602C32.5366 17.103 32.2761 17.817 31.8985 18.4702C31.5934 18.9938 31.1811 19.4471 30.6885 19.8002C30.1928 20.1382 29.6408 20.3854 29.0585 20.5302C28.4048 20.6951 27.7327 20.7757 27.0585 20.7702H26.5685C26.2251 20.7702 25.8925 20.8905 25.6285 21.1102C25.3631 21.3338 25.1888 21.6468 25.1385 21.9902V22.1902L24.5285 26.0702V26.2202C24.5358 26.2464 24.5358 26.274 24.5285 26.3002H24.4685L21.3385 26.3202Z"
						fill="#253D80"
					/>
					<path
						id="Path_2"
						d="M31.8002 12.0801L31.7402 12.4501C30.9202 16.6501 28.1102 18.1101 24.5302 18.1101H22.7102C22.2724 18.1095 21.8991 18.4276 21.8302 18.8601L20.9002 24.7801L20.6302 26.4601C20.61 26.5946 20.649 26.7313 20.7372 26.8349C20.8254 26.9384 20.9542 26.9987 21.0902 27.0001H24.3302C24.7144 26.9997 25.0411 26.7197 25.1002 26.3401V26.1801L25.7102 22.3101V22.1001C25.7648 21.722 26.0883 21.4411 26.4702 21.4401H27.0002C30.1302 21.4401 32.5902 20.1701 33.3002 16.4401C33.6844 15.1652 33.4474 13.784 32.6602 12.7101C32.4105 12.4539 32.1198 12.241 31.8002 12.0801V12.0801Z"
						fill="#189BD7"
					/>
					<path
						id="Path_3"
						d="M30.9384 11.7398L30.5584 11.6398L30.1384 11.5598C29.6089 11.4807 29.0738 11.4439 28.5384 11.4498H23.6584C23.5444 11.4467 23.4313 11.4707 23.3284 11.5198C23.0966 11.6284 22.9349 11.8464 22.8984 12.0998L21.8984 18.6698V18.8598C21.9673 18.4274 22.3405 18.1093 22.7784 18.1098H24.5984C28.1784 18.1098 30.9884 16.6498 31.8084 12.4498L31.8684 12.0798C31.653 11.9685 31.429 11.8749 31.1984 11.7998L30.9384 11.7398Z"
						fill="#242E65"
					/>
					<path
						id="Path_4"
						d="M22.8994 12.1C22.9359 11.8466 23.0975 11.6286 23.3294 11.52C23.4323 11.4709 23.5454 11.4469 23.6594 11.45H28.5394C29.0748 11.444 29.6098 11.4808 30.1394 11.56L30.5594 11.64L30.9394 11.74L31.1294 11.8C31.3599 11.8751 31.584 11.9687 31.7994 12.08C32.1245 10.8306 31.8265 9.50118 30.9994 8.51C29.9994 7.45 28.3594 7 26.2194 7H19.9994C19.5615 6.99947 19.1883 7.31756 19.1194 7.75L16.5294 24.16C16.5062 24.3148 16.5513 24.472 16.653 24.5909C16.7547 24.7098 16.9029 24.7788 17.0594 24.78H20.8994L21.8994 18.67L22.8994 12.1Z"
						fill="#253D80"
					/>
				</g>
			</g>
		</svg>
	);
};

const Payment = () => {
	return (
		<Card className="ezy__eporder3-card border-0 mt-4 mt-lg-0">
			<Card.Body className="p-3 px-lg-5 pt-lg-5">
				<h4 className="mb-5">Your Order</h4>

				<Row>
					<Col xs={8}>
						<h6 className="mb-0">Product</h6>
					</Col>
					<Col xs={4}>
						<h6 className="mb-0">Subtotal</h6>
					</Col>
				</Row>
				<hr className="my-4" />
				<Row>
					<Col xs={8}>
						<h6 className="mb-0">How to Improve Your Personal Skills (PDF)</h6>
					</Col>
					<Col xs={4}>
						<p className="mb-0">£20.00</p>
					</Col>
				</Row>
				<hr className="my-4" />
				<Row>
					<Col xs={8}>
						<h6 className="mb-0">Total</h6>
					</Col>
					<Col xs={4}>
						<h6 className="mb-0">£35.00</h6>
					</Col>
				</Row>
			</Card.Body>
			<Card.Body className="pt-0 p-3 p-lg-5">
				<Form className="ezy__eporder3-payment p-4">
					<h6>Paypal</h6>
					<Form.Check
						type="radio"
						label={<Shape className="ms-3" />}
						name="ezy__eporder3-payment-input"
						className="d-flex align-items-center mt-3 mb-4"
					/>
					<h6>Debit or Credit Card</h6>
					<Form.Check
						type="radio"
						label={
							<img
								src="https://cdn.easyfrontend.com/pictures/Debit%20or%20Credit.png"
								alt=""
								className="img-fluid ms-3"
							/>
						}
						name="ezy__eporder3-payment-input"
						className="d-flex align-items-center mt-3 mb-4"
					/>

					<Form.Check
						type="checkbox"
						name="ezy__eporder3-payment-agree"
						label="I have read and agree to the website terms and conditions *"
						className="my-5"
					/>
					<Button variant="" className="ezy__eporder3-btn w-100">
						Pay Now
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

const Eporder3 = () => {
	return (
		<section className="ezy__eporder3">
			<Container className="py-5">
				<Row className="justify-content-center">
					{/* progress bar  */}
					<ProgressBar />

					<Col xs={12}>
						<Row className="ezy__eporder3-wrapper justify-content-between p-4 p-lg-5 mt-4">
							{/* form  */}
							<Col xs={12} lg={5}>
								<OrderForm />
							</Col>

							{/* payment  */}
							<Col xs={12} lg={6}>
								<Payment />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Eporder3;

import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

import "./EPOrder5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Form, InputGroup, Row }",
}
*/

const options = [
	{ label: "Hard copy Original Certificate", value: "1" },
	{ label: "PDF Certificate", value: "2" },
	{ label: "Hard copy Original Certificate", value: "1" },
	{ label: "PDF Certificate", value: "2" },
];

const OrderForm = () => {
	return (
		<Form>
			<h3 className="">Course Details</h3>

			<Row>
				{/* coupon  */}
				<Col xs={4} className="mt-5">
					<h5 className="mb-0">Coupon</h5>
				</Col>
				<Col xs={8} className="mt-5">
					<InputGroup>
						<Form.Control type="search" placeholder="Code" />
						<Button variant="" className="ezy__eporder5-btn" type="button">
							Apply
						</Button>
					</InputGroup>
				</Col>

				{/* certificate type  */}
				<Col xs={4} className="mt-5">
					<h5 className="mb-0">
						Certificate type <span className="ezy__eporder5-star">*</span>
					</h5>
				</Col>
				<Col xs={8} className="mt-5">
					{options.map((option, i) => (
						<Form.Check
							type="checkbox"
							name={`ezy__eporder5-input-certificate`}
							id={`ezy__eporder5-input-certificate-${i}`}
							label={option.label}
							value={option.value}
							key={i}
						/>
					))}
					<p className="mt-3">
						Hard copy certificate £39, pdf £24 and both at discounted price £49.
					</p>
				</Col>

				{/* Transcript type  */}
				<Col xs={4} className="mt-5">
					<h5 className="mb-0">Transcript type</h5>
				</Col>
				<Col xs={8} className="mt-5">
					{options.map((option, i) => (
						<Form.Check
							type="checkbox"
							name={`ezy__eporder5-input-transcript`}
							id={`ezy__eporder5-input-transcript-${i}`}
							label={option.label}
							value={option.value}
							key={i}
						/>
					))}
					<p className="mt-3">
						Hardcopy certificate £39, pdf £24 and both at discounted price £49.
					</p>
				</Col>

				{/* shipping  */}
				<Col xs={4} className="mt-5">
					<h5 className="mb-0">
						Shipping <span className="ezy__eporder5-star">*</span>
					</h5>
				</Col>
				<Col xs={8} className="mt-5">
					{options.map((option, i) => (
						<Form.Check
							type="checkbox"
							name={`ezy__eporder5-input-shipping`}
							id={`ezy__eporder5-input-shipping-${i}`}
							label={option.label}
							value={option.value}
							key={i}
						/>
					))}
				</Col>

				{/* quantity  */}
				<Col xs={4} className="mt-5">
					<h5 className="mb-0">
						How many certificate(s){" "}
						<span className="ezy__eporder5-star">*</span>
					</h5>
				</Col>
				<Col xs={8} className="mt-5">
					<InputGroup>
						<Form.Control
							className="w-75"
							type="search"
							placeholder="Search Questions"
							aria-label="Search"
						/>
					</InputGroup>
				</Col>

				{/* quantity */}
				<Col xs={4} className="mt-5">
					<h5 className="mb-0">
						How many Transcript(s) <span className="ezy__eporder5-star">*</span>
					</h5>
				</Col>
				<Col xs={8} className="mt-5">
					<InputGroup>
						<Form.Control
							className="w-75"
							type="search"
							placeholder="Search Questions"
							aria-label="Search"
						/>
					</InputGroup>
				</Col>

				{/* fee  */}
				<Col xs={4} className="mt-5">
					<h5 className="mb-0">Certification Fee</h5>
				</Col>
				<Col xs={8} className="mt-5">
					<h6>£ 54.00</h6>
					<p>Total need to pay today</p>
				</Col>

				{/* course name  */}
				<Col xs={4} className="mt-5">
					<h5 className="mb-0">
						Course(s) Name <span className="ezy__eporder5-star">*</span>
					</h5>
				</Col>
				<Col xs={8} className="mt-5">
					<InputGroup>
						<Form.Control
							as="textarea"
							name="ezy__eporder5-message-input"
							rows={3}
						/>
					</InputGroup>
				</Col>

				<Col xs={4} className="mt-5" />
				<Col xs={8} className="mt-5">
					<Button variant="" type="submit" className="ezy__eporder5-btn">
						Submit
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

const Eporder5 = () => {
	return (
		<section className="ezy__eporder5">
			<Container>
				<Row className="mt-5">
					<Col xs={12} lg={8}>
						<h1 className="ezy__eporder5-heading">Order Your Certificate</h1>
						<p className="ezy__eporder5-sub-heading">
							In purus donec ac in nulla lobortis. Lectus massa erat odio turpis
							nulla sed.
						</p>
						<hr className="mt-4" />
					</Col>
				</Row>

				<Row className="mt-5">
					<Col xs={12} lg={8}>
						<OrderForm />
					</Col>

					{/* sidebar images  */}
					<Col xs={12} lg={4}>
						<div className="ezy__eporder5-images p-4 text-center">
							<img
								src="https://cdn.easyfrontend.com/pictures/certificate/certificate-1.png"
								alt=""
								className="img-fluid"
							/>
							<img
								src="https://cdn.easyfrontend.com/pictures/certificate/certificate-2.png"
								alt=""
								className="img-fluid mt-5"
							/>
							<img
								src="https://cdn.easyfrontend.com/pictures/certificate/certificate-3.png"
								alt=""
								className="img-fluid mt-5"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Eporder5;

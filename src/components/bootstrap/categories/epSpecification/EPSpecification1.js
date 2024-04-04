import React from "react";
import { Card, Col, Container, Nav, Row } from "react-bootstrap";

import "./EPSpecification1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Card, Col, Container, Nav, Row }",
}
*/
const specifications = [
	{
		level: "BrandName:",
		value: "T-WINNERWater",
	},
	{
		level: "Resistance Depth:",
		value: "No waterproof",
	},
	{
		level: " Origin:",
		value: "CN(Origin)",
	},
	{
		level: "Clasp Type:",
		value: "Bracelet Clasp",
	},
	{
		level: "Style:",
		value: " Fashion & Casual",
	},

	{
		level: "Movement:",
		value: "Mechanical Hand Wind",
	},
	{
		level: "Band Length:",
		value: "21cm",
	},
	{
		level: "Case Material:",
		value: "Mechanical Hand Wind",
	},
	{
		level: "Feature:",
		value: "luminous hands",
	},
	{
		level: "Model Number:",
		value: " S1089-8",
	},
	{
		level: "Case Shape:",
		value: "Round",
	},
	{
		level: "Band Width:",
		value: "20mm",
	},
	{
		level: "Case Thickness:",
		value: "13mm",
	},
	{
		level: "Dial Window Material Type:",
		value: "Glass",
	},
	{
		level: "Boxes & Cases Material:",
		value: "Paper",
	},
	{
		level: "Item Type:",
		value: "Mechanical Wristwatches",
	},
	{
		level: "Dial Diameter:",
		value: "40mm",
	},
	{
		level: "Band Material Type:",
		value: "Stainless steel",
	},
];

const Specifications = () => {
	const divider = Math.ceil(specifications.length / 2);
	return (
		<Row>
			<Col md={6}>
				<Nav className="flex-column">
					{specifications.slice(0, divider).map((specification, i) => (
						<li className="mb-2" key={i}>
							<span className="opacity-50 me-1">{specification.level}</span>{" "}
							{specification.value}
						</li>
					))}
				</Nav>
			</Col>
			<Col md={6}>
				<Nav className="flex-column">
					{specifications.slice(divider).map((specification, i) => (
						<li className="mb-2" key={i}>
							<span className="opacity-50 me-1">{specification.level}</span>
							{specification.value}
						</li>
					))}
				</Nav>
			</Col>

			{/* Other Way */}

			{/* {specifications.map((specification, i) => (
				<Col md={6} className="mb-2" key={i}>
					<span className="opacity-50 me-1">{specification.level}</span>
					{specification.value}
				</Col>
			))} */}
		</Row>
	);
};

const Epspecification1 = () => {
	return (
		<section className="ezy__epspecification1" id="ezy__epspecification1">
			<Container>
				<Row className="justify-content-center">
					<Col lg={8}>
						<Card className="ezy__epspecification1-card">
							<Card.Body className="p-md-4">
								<h5 className="fs-4 fw-bold mb-4">Product Specification</h5>

								<Specifications />
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Epspecification1;

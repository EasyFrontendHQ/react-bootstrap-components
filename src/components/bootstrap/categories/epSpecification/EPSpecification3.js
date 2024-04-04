import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

import "./EPSpecification3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row, Table }",
}
*/
const specifications = [
	{
		level: "BrandName",
		value: "T-WINNERWater",
	},
	{
		level: "Resistance Depth",
		value: "No waterproof",
	},
	{
		level: " Origin",
		value: "CN(Origin)",
	},
	{
		level: "Clasp Type",
		value: "Bracelet Clasp",
	},
	{
		level: "Style",
		value: " Fashion & Casual",
	},

	{
		level: "Movement",
		value: "Mechanical Hand Wind",
	},
	{
		level: "Band Length",
		value: "21cm",
	},
	{
		level: "Case Material",
		value: "Mechanical Hand Wind",
	},
	{
		level: "Feature",
		value: "luminous hands",
	},
	{
		level: "Model Number",
		value: " S1089-8",
	},
	{
		level: "Case Shape",
		value: "Round",
	},
	{
		level: "Dial Window Material Type",
		value: "Glass",
	},
	{
		level: "Item Type",
		value: "Mechanical Wristwatches",
	},
	{
		level: "Band Material Type",
		value: "Stainless steel",
	},
];

const Specifications = () => {
	return (
		<Table>
			<tbody>
				{specifications.map((specification, i) => {
					return (
						<tr key={i}>
							<td className="px-4 py-3 align-middle w-25 opacity-75">
								{specification.level}
							</td>
							<th className="px-4 py-3 align-middle">{specification.value}</th>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

const Epspecification3 = () => {
	return (
		<section className="ezy__epspecification3" id="ezy__epspecification3">
			<Container>
				<Row className="justify-content-center">
					<Col lg={8}>
						<h5 className="fs-4 fw-bold mb-4">Product Specification</h5>

						<Specifications />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Epspecification3;

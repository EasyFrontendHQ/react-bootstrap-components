import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

import "./EOHistory1.css";

/*
{
	"react": "React,
	"react-bootstrap": "{Col, Container, Row, Table}",
	"prop-types": "PropTypes",
}
*/
const tableData = {
	thead: [
		{ value: "orderId" },
		{ value: "Data" },
		{ value: "Price" },
		{ value: "Status" },
	],
	tdata: [
		{
			id: "#7788965",
			date: "8 Jun 2021",
			price: "$786",
			status: "Completed",
		},
		{
			id: "#77883425",
			date: "5 Feb 2021",
			price: "$1101",
			status: "Failed",
		},
		{
			id: "#7788457",
			date: "10 Oct 2021",
			price: "$1299",
			status: "In Progress",
		},
		{
			id: "#7788126",
			date: "11 Apr 2021",
			price: "$1099",
			status: "Completed",
		},
		{
			id: "#7788906",
			date: "17 Feb 2021",
			price: "$300",
			status: "In Progress",
		},
		{
			id: "#7788978",
			date: "23 Mar 2021",
			price: "$786",
			status: "Failed",
		},
		{
			id: "#7788934",
			date: "11 Aug 2021",
			price: "$111",
			status: "Completed",
		},
	],
};

const TableData = () => {
	<Table borderless className="text-center">
		<thead className="mb-4">
			<tr>
				{tableData.map((data, i) => (
					<th scope="col" key={i}>
						{data.thead.value}
					</th>
				))}
			</tr>
		</thead>
		<tbody className="align-baseline">
			{tableData.map((data, i) => (
				<tr key={i}>
					<td>{data.id}</td>
					<td>{data.date}</td>
					<td>{data.price}</td>
					<td className="d-flex justify-content-center">
						<p className="status completed">{data.status}</p>
					</td>
				</tr>
			))}
		</tbody>
	</Table>;
};

const eOHistory1 = () => {
	return (
		<section className="ezy__eohistory1">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={10}>
						<div className="ezy__eohistory1-table p-5">
							<TableData />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default eOHistory1;

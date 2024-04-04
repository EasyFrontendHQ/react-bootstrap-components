import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./Numbers1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }",
	"prop-types": "PropTypes"
}
*/

const details = [
	{
		value: "11",
		level: "Speakers",
	},
	{
		value: "4",
		level: "Hours",
	},
	{
		value: "3",
		level: "Topics",
	},
];

const Details = ({ item }) => (
	<li className="d-flex flex-column pe-4">
		<strong>{item.value}</strong>
		<span>{item.level}</span>
	</li>
);

Details.propTypes = {
	item: PropTypes.object.isRequired,
};

const Numbers1 = () => {
	return (
		<section className="ezy__numbers1">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} lg={4} className="text-center my-4 my-sm-0">
						<h3 className="ezy__numbers1-tag-code">
							Flying
							<span className="color ms-1">
								<span>
									<span>{"<"}</span>
									<span>/</span>
									<span> dreams</span>
									<span>{">"}</span>
								</span>
							</span>
						</h3>
					</Col>

					<Col
						xs={12}
						lg={8}
						className="d-flex mt-3 mt-lg-0 justify-content-center justify-content-lg-end"
					>
						<ul className="fix-count-down nav align-items-center">
							{details.map((item, i) => (
								<Details item={item} key={i} />
							))}
							<li>
								<Button variant="" className="border-2 py-2 px-4">
									Get Tickets
								</Button>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Numbers1;

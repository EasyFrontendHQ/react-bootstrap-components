import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAward,
	faHeadphonesAlt,
	faRibbon,
	faShippingFast,
} from "@fortawesome/free-solid-svg-icons";

import "./Incentives1.css";

/*
{
	"react": "React,
	"react-bootstrap": "{ Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": {faAward, faHeadphonesAlt, faRibbon, faShippingFast },
	"prop-types": "PropTypes",
}
*/
const incentives = [
	{
		icon: faAward,
		title: "Quality Materials",
		desc: "100% quality Products",
	},
	{
		icon: faShippingFast,
		title: "Quality Materials",
		desc: "100% quality Products",
	},
	{
		icon: faHeadphonesAlt,
		title: "Quality Materials",
		desc: "100% quality Products",
	},
	{
		icon: faRibbon,
		title: "Quality Materials",
		desc: "100% quality Products",
	},
];

const IncentiveItem = ({ item }) => (
	<div className="d-flex justify-content-center">
		<div className="ezy__incentives1-icon">
			<FontAwesomeIcon icon={item.icon} />
		</div>
		<div className="ms-3 mt-2">
			<h5 className="mb-1">{item.title}</h5>
			<p className="mb-0">{item.desc}</p>
		</div>
	</div>
);

IncentiveItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Incentives1 = () => {
	return (
		<section className="ezy__incentives1">
			<Container>
				<Row>
					<Col xs={12}>
						<h1 className="ezy__incentives1-heading text-center mb-5">
							We built best Business for you.
						</h1>
					</Col>
					{incentives.map((item, i) => (
						<Col xs={12} sm={6} lg={3} className="mt-4" key={i}>
							<IncentiveItem item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Incentives1;

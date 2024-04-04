import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeadphonesAlt,
	faRibbon,
	faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./Incentives2.css";

/*
{
	"react": "React,
	"react-bootstrap": "{ Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": { faHeadphonesAlt, faRibbon, faShippingFast },
	"prop-types": "PropTypes",
}
*/
const incentives = [
	{
		icon: faRibbon,
		title: "Quality Materials",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem.",
	},
	{
		icon: faShippingFast,
		title: "Quality Materials",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem.",
	},
	{
		icon: faHeadphonesAlt,
		title: "Quality Materials",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem.",
	},
];

const IncentiveItem = ({ item }) => (
	<div className="text-center text-sm-start">
		<div className="ezy__incentives2-icon">
			<FontAwesomeIcon icon={item.icon} />
		</div>
		<h3 className="mt-2 fs-4">{item.title}</h3>
		<p className="mb-0">{item.desc}</p>
	</div>
);

IncentiveItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Incentives2 = () => {
	return (
		<section className="ezy__incentives2">
			<Container>
				<Row>
					<Col xs={12}>
						<h1 className="ezy__incentives2-heading text-center text-md-start mb-5">
							We built best Business for you.
						</h1>
					</Col>

					{incentives.map((item, i) => (
						<Col xs={12} sm={6} lg={4} className="mt-4" key={i}>
							<IncentiveItem item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Incentives2;

import React from "react";
import { Button, Col, Container, Row, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Pricing2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Container, Col, Nav, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faCheck }",
	"classnames": "classNames",
	"prop-types": "PropTypes"
}
*/

const pricingList = [
	{
		planTitle: "Basic",
		price: "$20",
		timeline: "/month",
		description:
			"It’s easier to reach your savings goals when you have the right savings account.",
		features: [
			{ isActive: true, label: "Unlimited subscribers" },
			{ isActive: true, label: "Up to 62K emails per month" },
			{ isActive: true, label: "24/7 Contact support" },
			{ isActive: true, label: "MailBluster's branding" },
			{ isActive: true, label: " Enterprise Agile Planning" },
		],
		isActive: false,
	},
	{
		planTitle: "Standard",
		price: "$199",
		timeline: "/month",
		description:
			"Sed ut in perspiciatis unde omnis iste natus error sit tatem laudantium.",
		features: [
			{ isActive: true, label: "Unlimited subscribers" },
			{ isActive: true, label: "Up to 62K emails per month" },
			{ isActive: true, label: "24/7 Contact support" },
			{ isActive: true, label: "MailBluster's branding" },
			{ isActive: true, label: " Enterprise Agile Planning" },
		],
		isActive: true,
	},
	{
		planTitle: "Premium",
		price: "$399",
		timeline: "/month",
		description:
			"It’s easier to reach your savings goals when you have the right savings account.",
		features: [
			{ isActive: true, label: "Unlimited subscribers" },
			{ isActive: true, label: "Up to 62K emails per month" },
			{ isActive: true, label: "24/7 Contact support" },
			{ isActive: true, label: "MailBluster's branding" },
			{ isActive: true, label: " Enterprise Agile Planning" },
		],
		isActive: false,
	},
];

const PricingItem = ({ pricing }) => (
	<div className="ezy__pricing2-item p-3 p-lg-5">
		<h3
			className={classNames("fw-bold mb-2 ezy__pricing2-title", {
				"text-primary": pricing.isActive,
			})}
		>
			{pricing.planTitle}
		</h3>
		<div
			className={classNames("ezy__pricing2-price mb-3", {
				"text-primary": pricing.isActive,
			})}
		>
			<span className="fs-3 fw-bold">{pricing.price}</span>
			<span className="ms-2 opacity-50">{pricing.timeline}</span>
		</div>
		<p className="opacity-50 mb-4 ezy__pricing2-note">{pricing.description}</p>
		<Nav className="flex-column ezy-pricing2-features">
			{pricing.features.map((feature, i) => (
				<li
					className={classNames({
						"mb-3": pricing.features.length - 1 > i,
					})}
					key={i}
				>
					<FontAwesomeIcon icon={faCheck} className="text-primary me-2" />
					<span className="opacity-50">{feature.label}</span>
				</li>
			))}
		</Nav>

		<Button
			variant={pricing.isActive ? "primary" : "outline"}
			className="w-100 mt-4 ezy__pricing2-btn"
		>
			Choose plan
		</Button>
	</div>
);

PricingItem.propTypes = {
	pricing: PropTypes.object.isRequired,
};

const Pricing2 = () => {
	return (
		<section className="ezy__pricing2">
			<Container>
				<Row className="justify-content-center mb-5">
					<Col lg={6} xl={5} className="text-center">
						<h2 className="ezy__pricing2-heading mb-3">
							Flexible Plan for you
						</h2>
						<p className="ezy__pricing2-sub-heading mb-0">
							Choice suitable plan for you.
						</p>
					</Col>
				</Row>
				<Row className="m-0">
					{pricingList.map((pricing, i) => (
						<Col
							lg={4}
							className={classNames("p-0 mt-3 mt-lg-0", {
								"border-lg-end": pricingList.length - 1 > i,
							})}
							key={i}
						>
							<PricingItem pricing={pricing} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Pricing2;

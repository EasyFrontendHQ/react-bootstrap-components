import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Pricing5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Nav, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faCheck, faTimes }",
	"classnames": "classNames",
	"prop-types": "PropTypes"
}
*/

const pricingList = [
	{
		planTitle: "Basic",
		price: "$9",
		timeline: "/year",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
		features: [
			{ isActive: true, label: "Security Dashboards" },
			{ isActive: false, label: "Multi-Level Epics" },
			{ isActive: false, label: "24/7 Contact support" },
		],
		isActive: false,
	},
	{
		planTitle: "Standard",
		price: "$19",
		timeline: "/year",
		description:
			"It’s easier to reach your savings goals when you have the right savings account.",
		features: [
			{ isActive: true, label: "Security Dashboards" },
			{ isActive: true, label: "Multi-Level Epics" },
			{ isActive: false, label: "24/7 Contact support" },
		],
		isActive: true,
	},
	{
		planTitle: "Premium",
		price: "$29",
		timeline: "/year",
		description:
			"Sed ut in perspiciatis unde omnis iste natus error sit tatem doloremque.",
		features: [
			{ isActive: true, label: "Security Dashboards" },
			{ isActive: true, label: "Multi-Level Epics" },
			{ isActive: true, label: "24/7 Contact support" },
		],
		isActive: false,
	},
];

const PricingItem = ({ pricing }) => (
	<div
		className={classNames("ezy__pricing5-item p-3 p-lg-5", {
			"active shadow-lg": pricing.isActive,
		})}
	>
		<div className="d-flex justify-content-between align-items-center mb-4">
			<h3 className="fw-bold mb-2 ezy__pricing5-title">{pricing.planTitle}</h3>
			<div className="ezy__pricing5-price mb-3">
				<span className="fs-3 fw-bold">{pricing.price}</span>
				<span
					className={classNames("ms-2", {
						"opacity-50": !pricing.isActive,
					})}
				>
					{pricing.timeline}
				</span>
			</div>
		</div>
		<p
			className={classNames("mb-4 ezy__pricing5-note", {
				"opacity-75": pricing.isActive,
				"opacity-50": !pricing.isActive,
			})}
		>
			{pricing.description}
		</p>

		<Nav className="flex-column ezy-pricing5-features">
			{pricing.features.map((feature, i) => (
				<li
					className={classNames({
						"mb-3": pricing.features.length - 1 > i,
					})}
					key={i}
				>
					<span className="ezy__pricing5-icon me-2">
						<FontAwesomeIcon
							icon={feature.isActive ? faCheck : faTimes}
							className={classNames({
								"text-white": pricing.isActive,
								"text-primary": !pricing.isActive,
							})}
						/>
					</span>
					<span
						className={classNames({
							"opacity-75": pricing.isActive,
							"opacity-50": !pricing.isActive,
						})}
					>
						{feature.label}
					</span>
				</li>
			))}
		</Nav>

		<Button
			variant={pricing.isActive ? "light" : "outline-primary"}
			className="w-100 mt-4 ezy__pricing5-btn"
		>
			Choose plan
		</Button>
	</div>
);

PricingItem.propTypes = {
	pricing: PropTypes.object.isRequired,
};

const Pricing5 = () => {
	return (
		<section className="ezy__pricing5">
			<Container>
				<Row className="justify-content-center mb-5">
					<Col lg={6} xl={5} className="text-center">
						<h2 className="ezy__pricing5-heading mb-3">
							Choose Your Subscription!
						</h2>
						<p className="ezy__pricing5-sub-heading mb-0">
							Choice suitable plan for you.
						</p>
					</Col>
				</Row>
				<Row>
					{pricingList.map((pricing, i) => (
						<Col lg={4} className="mt-4" key={i}>
							<PricingItem pricing={pricing} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Pricing5;

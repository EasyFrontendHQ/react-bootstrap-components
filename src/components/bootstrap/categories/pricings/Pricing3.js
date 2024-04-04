import React, { Fragment } from "react";
import { Button, Col, Container, Row, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Pricing3.css";

/*
{
	"react": "React, { Fragment }",
	"react-bootstrap": "{ Button, Col, Container, Nav, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faCheck }",
	"classnames": "classNames",
	"prop-types": "PropTypes"
}
*/

const pricingList = [
	{
		planTitle: "BASIC",
		price: "$9",
		timeline: "/month",
		description:
			"It’s easier to reach your savings goals when you have the right savings account.",
		features: [
			{ isActive: true, label: " Static Application Security" },
			{ isActive: true, label: "Vulnerability Management" },
			{ isActive: true, label: "24/7 Contact support" },
			{ isActive: true, label: "Build Tools easily" },
			{ isActive: true, label: " 250TB storage" },
		],
		isActive: false,
	},
	{
		planTitle: "STANDARD",
		price: "$19",
		timeline: "/month",
		description:
			"Sed ut in perspiciatis unde omnis iste natus error sit tatem laudantium.",
		features: [
			{ isActive: true, label: " Static Application Security" },
			{ isActive: true, label: "Vulnerability Management" },
			{ isActive: true, label: "24/7 Contact support" },
			{ isActive: true, label: "Build Tools easily" },
			{ isActive: true, label: " 250TB storage" },
		],
		isActive: false,
	},
	{
		planTitle: "PREMIUM",
		price: "$29",
		timeline: "/month",
		description:
			"It’s no secret that the digital industry is booming. From to global brands.",
		features: [
			{ isActive: true, label: " Static Application Security" },
			{ isActive: true, label: "Vulnerability Management" },
			{ isActive: true, label: "24/7 Contact support" },
			{ isActive: true, label: "Build Tools easily" },
			{ isActive: true, label: " 250TB storage" },
		],
		isActive: true,
	},
];

const PricingItem = ({ pricing }) => (
	<Fragment>
		{pricing.isActive && (
			<div className="text-center bg-warning p-2 fw-bold ezy__pricing3-editor-choose-badge">
				EDITOR CHOOSE
			</div>
		)}
		<div
			className={classNames("ezy__pricing3-item p-3 p-lg-5", {
				"shadow-lg": pricing.isActive,
			})}
		>
			<div className="text-center">
				<h5
					className={classNames("mb-2 ezy__pricing3-title", {
						"text-primary": pricing.isActive,
					})}
				>
					{pricing.planTitle}
				</h5>
				<div
					className={classNames("ezy__pricing3-price mb-3 fs-1", {
						"text-primary": pricing.isActive,
					})}
				>
					<span className="fw-bold">{pricing.price}</span>
					<span className="ms-2 opacity-50 fs-6">{pricing.timeline}</span>
				</div>
				<p className="opacity-50 mb-4 ezy__pricing3-note">
					{pricing.description}
				</p>
			</div>
			<Nav className="flex-column ezy-pricing3-features">
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
				className="w-100 mt-4 ezy__pricing3-btn"
			>
				Choose plan
			</Button>
		</div>
	</Fragment>
);

PricingItem.propTypes = {
	pricing: PropTypes.object.isRequired,
};

const Pricing3 = () => {
	return (
		<section className="ezy__pricing3">
			<Container>
				<Row className="justify-content-center mb-5">
					<Col lg={6} xl={5} className="text-center">
						<h2 className="ezy__pricing3-heading mb-3">
							Flexible Plan for you
						</h2>
						<p className="ezy__pricing3-sub-heading mb-lg-5">
							Choice suitable plan for you.
						</p>
					</Col>
				</Row>
				<Row className="m-0 ezy__pricing3-list">
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

export default Pricing3;

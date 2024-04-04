import React, { useState } from "react";
import { Button, Col, Collapse, Container, Nav, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "./Pricing1.css";

/*
{
	"react": "React, { useState }",
	"react-bootstrap": "{ Button, Col, Collapse, Container, Nav, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faCheck }",
	"classnames": "classNames",
	"prop-types": "PropTypes"
}
*/

const pricingList = {
	monthlyPricings: [
		{
			planTitle: "Basic",
			price: "$20",
			timeline: "/month",
			description:
				"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
				{ isActive: true, label: " 6TB storage" },
			],
			isActive: false,
		},
		{
			planTitle: "Standard",
			price: "$199",
			timeline: "/month",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
				{ isActive: true, label: " 6TB storage" },
			],
			isActive: false,
		},
		{
			planTitle: "Premium",
			price: "$399",
			timeline: "/month",
			description:
				"Urna molestie at eleme ntum eu facilisis sed odio Male suada fames circa hors.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
				{ isActive: true, label: " 6TB storage" },
			],
			isActive: true,
		},
		{
			planTitle: "Lifetime",
			price: "$1999",
			timeline: "/month",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
				{ isActive: true, label: " 6TB storage" },
			],
			isActive: false,
		},
	],
	yearlyPricings: [
		{
			planTitle: "Basic",
			price: "$99",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
			],
			isActive: false,
		},
		{
			planTitle: "Standard",
			price: "$199",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
			],
			isActive: false,
		},
		{
			planTitle: "Premium",
			price: "$299",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
			],
			isActive: true,
		},
		{
			planTitle: "Lifetime",
			price: "$399",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
			],
			isActive: false,
		},
	],
};

const pricingTab = {
	monthly: "monthly",
	yearly: "yearly",
};

const PricingItem = ({ pricing }) => (
	<div
		className={classNames("ezy__pricing1-item p-3 p-lg-5", {
			active: pricing.isActive,
		})}
	>
		<h3 className="fw-bold mb-2 ezy__pricing1-title">{pricing.planTitle}</h3>
		<div className="ezy__pricing1-price mb-3">
			<span className="fs-3 fw-bold">{pricing.price}</span>
			<span className="ms-2 opacity-50">{pricing.timeline}</span>
		</div>
		<p className="opacity-50 mb-4 ezy__pricing1-note">{pricing.description}</p>
		<Nav className="flex-column ezy-pricing1-features">
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
			className="w-100 mt-4 ezy__pricing1-btn"
		>
			Choose plan
		</Button>
	</div>
);

PricingItem.propTypes = {
	pricing: PropTypes.object.isRequired,
};

const Pricing1 = () => {
	const [activeTimeline, setActiveTimeline] = useState(pricingTab.monthly);

	const switchActiveTimeline = (tab) => setActiveTimeline(tab);

	return (
		<section className="ezy__pricing1">
			<Container>
				<Row className="justify-content-center mb-5">
					<Col lg={6} xl={5} className="text-center">
						<h2 className="ezy__pricing1-heading mb-3">
							Flexible Plan for you
						</h2>
						<p className="ezy__pricing1-sub-heading mb-0">
							Choice suitable plan for you.
						</p>
					</Col>
				</Row>
				<div className="text-center mb-4">
					<Button
						variant={
							pricingTab.monthly === activeTimeline ? "primary" : "outline"
						}
						className="border-0 ezy__pricing1-btn me-1"
						onClick={() => switchActiveTimeline(pricingTab.monthly)}
					>
						MONTHLY
					</Button>
					<Button
						variant={
							pricingTab.yearly === activeTimeline ? "primary" : "outline"
						}
						className="border-0 ezy__pricing1-btn"
						onClick={() => switchActiveTimeline(pricingTab.yearly)}
					>
						YEARLY
					</Button>
				</div>
				<Collapse in={activeTimeline === pricingTab.monthly}>
					<Row>
						{pricingList.monthlyPricings.map((pricing, i) => (
							<Col md={6} xl={3} className="mt-4" key={i}>
								<PricingItem pricing={pricing} />
							</Col>
						))}
					</Row>
				</Collapse>
				<Collapse in={activeTimeline === pricingTab.yearly}>
					<Row>
						{pricingList.yearlyPricings.map((pricing, i) => (
							<Col md={6} xl={3} className="mt-4" key={i}>
								<PricingItem pricing={pricing} />
							</Col>
						))}
					</Row>
				</Collapse>
			</Container>
		</section>
	);
};

export default Pricing1;

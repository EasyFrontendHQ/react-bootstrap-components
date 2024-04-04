import React, { useState } from "react";
import { Button, Col, Collapse, Container, Row } from "react-bootstrap";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Pricing4.css";

/*
{
	"react": "React, { useState }",
	"react-bootstrap": "{ Button, Col, Collapse, Container, Row }",
	"classnames": "classNames",
	"prop-types": "PropTypes"
}
*/

const pricingList = {
	monthlyPricings: [
		{
			planTitle: "Basic",
			price: "$9",
			timeline: "/month",
			description:
				"More off this less hello salamander lied porpoise much circa horse taped.",
			isActive: false,
		},
		{
			planTitle: "Standard",
			price: "$19",
			timeline: "/month",
			description:
				"Sed ut in perspiciatis unde omnis iste natus error sit tatem doloremque.",
			isActive: false,
		},
		{
			planTitle: "Premium",
			price: "$29",
			timeline: "/month",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			isActive: true,
		},
		{
			planTitle: "Lifetime",
			price: "$39",
			timeline: "/month",
			description:
				"Urna molestie at eleme ntum eu facilisis sed odio Male suada fames.",
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
			isActive: false,
		},
		{
			planTitle: "Standard",
			price: "$199",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			isActive: false,
		},
		{
			planTitle: "Premium",
			price: "$299",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			isActive: true,
		},
		{
			planTitle: "Lifetime",
			price: "$399",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
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
		className={classNames("ezy__pricing4-item p-3 p-lg-5", {
			"active shadow-lg": pricing.isActive,
		})}
	>
		<h3 className="fw-bold mb-2 ezy__pricing4-title">{pricing.planTitle}</h3>
		<p
			className={classNames("mb-4 ezy__pricing4-note", {
				"opacity-50": !pricing.isActive,
			})}
		>
			{pricing.description}
		</p>
		<div className="ezy__pricing4-price mb-3">
			<span className="fs-3 fw-bold">{pricing.price}</span>
			<span
				className={classNames("ms-2", {
					"opacity-50": !pricing.isActive,
				})}
			>
				{pricing.timeline}
			</span>
		</div>

		<Button
			variant={pricing.isActive ? "light" : "outline"}
			className="w-100 mt-4 ezy__pricing4-btn"
		>
			Choose plan
		</Button>
	</div>
);

PricingItem.propTypes = {
	pricing: PropTypes.object.isRequired,
};

const Pricing4 = () => {
	const [activeTimeline, setActiveTimeline] = useState(pricingTab.monthly);

	const switchActiveTimeline = (tab) => setActiveTimeline(tab);

	return (
		<section className="ezy__pricing4">
			<Container>
				<Row className="justify-content-center mb-5">
					<Col lg={6} xl={5} className="text-center">
						<h2 className="ezy__pricing4-heading mb-3">
							Flexible Plan for you
						</h2>
						<p className="ezy__pricing4-sub-heading mb-0">
							Choice suitable plan for you.
						</p>
					</Col>
				</Row>
				<div className="text-center mb-4">
					<Button
						variant={
							pricingTab.monthly === activeTimeline ? "primary" : "outline"
						}
						className={classNames("ezy__pricing4-btn me-1", {
							"border-0": pricingTab.monthly !== activeTimeline,
						})}
						onClick={() => switchActiveTimeline(pricingTab.monthly)}
					>
						MONTHLY
					</Button>
					<Button
						variant={
							pricingTab.yearly === activeTimeline ? "primary" : "outline"
						}
						className={classNames("ezy__pricing4-btn", {
							"border-0": pricingTab.yearly !== activeTimeline,
						})}
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

export default Pricing4;

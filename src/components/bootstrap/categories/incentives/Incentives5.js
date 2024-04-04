import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./Incentives5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faWallet }",
    "prop-types": "PropTypes",
}
*/

const infos = [
	{
		title: "1. Contact Seller",
		description:
			"Go to your order history and select the item. Discuss the issue with the seller and see possible solutions.",
	},
	{
		title: "2. Apply for Refund",
		description:
			"If you can't come to an amicable agreement after contacting the seller, simply raise a claim by opening a dispute within 15 days following the delivery of your order or the end of the package receipt confirmation period (as listed in your order details).",
	},
	{
		title: "3. Get Money Back in 15 Days",
		description:
			"Most sellers will return your money in 15 days, however; if it's not resolved, you can contact AliExpress from the order detail page to escalate your dispute.",
	},
];

const Item = ({ data }) => {
	return (
		<div className="px-xl-5">
			<h5 className="mb-2">{data.title}</h5>
			<p className="mb-0">{data.description}</p>
		</div>
	);
};

Item.propTypes = {
	data: PropTypes.object.isRequired,
};

const Incentives5 = () => {
	return (
		<section className="ezy__incentives5">
			<Container>
				<div
					className="ezy__incentives5-topbar d-flex align-items-center justify-content-center p-5"
					style={{
						backgroundImage:
							"url(https://cdn.easyfrontend.com/pictures/abstract-bg.jpg)",
					}}
				>
					<div className="ezy__incentives5-topbar-overlay"></div>
					<Row className="w-100">
						<Col xs={12} md={6}>
							<div className="ezy__incentives5-topbar-card text-center p-5">
								<h3 className="mb-2 fs-1">
									<em>Buyer Protection</em>
								</h3>
								<p className="mb-0 fs-5">Shop With Confidence</p>
							</div>
						</Col>
					</Row>
				</div>

				<div className="ezy__incentives5-card p-4 p-lg-5">
					<Row>
						<Col xs={12} md={4}>
							<div className="d-flex align-items-center justify-content-center">
								<div className="ezy__incentives5-icon">
									<FontAwesomeIcon icon={faWallet} />
								</div>
							</div>
						</Col>

						<Col xs={12} md={8} className=" mt-5 mt-md-0">
							<h6 className="fs-2 fw-bold mb-3">
								<em>MONEY BACK GUARANTEE</em>
							</h6>
							<p className="mb-1 pe-xl-5">
								We promise your money back if the item you received is not as
								described, or if your item is not delivered within the Buyer
								Protection period. You can get a refund 15 days after the claim
								process finishes. This guarantee is in addition to and does not
								limit your statutory rights as a consumer, as granted by all
								mandatory laws and regulations applicable in your country of
								residence.
							</p>
							<a href="src/components/bootstrap/categories/incentives/Incentives5#!">
								Money Back Guarantee Terms &amp; Conditions
							</a>
						</Col>
					</Row>

					<div className="ezy__incentives5-divider mt-5 mx-xl-5"></div>

					<Row className="px-4 px-lg-5 py-0 py-lg-3">
						{infos.map((data, i) => (
							<Col xs={12} lg={4} className="mt-5 mt-lg-4" key={i}>
								<Item data={data} />
							</Col>
						))}
					</Row>
				</div>
			</Container>
		</section>
	);
};

export default Incentives5;

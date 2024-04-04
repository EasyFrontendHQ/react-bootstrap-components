import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCamera,
	faCannabis,
	faRandom,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Feature3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faCamera, faCannabis, faRandom }",
	"prop-types": "PropTypes",
	"classnames": "classNames"
}
*/

const features = [
	{
		icon: faCannabis,
		title: "UI/UX Design",
		description:
			"Fly from fish won't green without life. Saying Lorem ipsum dolor man our be midst greater seas.",
	},
	{
		icon: faRandom,
		title: "SEO Management",
		description:
			"Two fruitful living you'll, the fish subdue for eorem ipsum dolor brought fruitful image creepeth.",
	},
	{
		icon: faCamera,
		title: "Graphic Design",
		description:
			"It’s no secret that the digital industry is booming. From exciting startups to global brands.",
	},
];

const FeatureItem = ({ feature }) => {
	return (
		<div className="ezy__featured3-item position-relative p-4 pt-5 p-lg-5 ms-4">
			<div className="ezy__featured3-icon position-absolute start-0 top-0 mb-4">
				<FontAwesomeIcon icon={feature.icon} />
			</div>
			<h4 className="ezy__featured3-title fs-4 fw-bold mb-3">
				{feature.title}
			</h4>
			<p className="ezy__featured3-content mb-0">{feature.description}</p>
		</div>
	);
};

FeatureItem.propTypes = {
	feature: PropTypes.object.isRequired,
};

const Feature3 = () => {
	return (
		<section className="ezy__featured3">
			<Container>
				<Row className="justify-content-between mb-5">
					<Col lg={5}>
						<h2 className="ezy__featured3-heading mb-4">Our Features</h2>
					</Col>
					<Col lg={5} xl={4}>
						<p className="ezy__featured3-sub-heading mb-4">
							Divide. Unto his fowl bearing fly, stars saw creature darkness
							meat thing signs, isn't yielding you're Face brought own upon.
						</p>
					</Col>
				</Row>
				<Row>
					{features.map((feature, i) => (
						<Col md={4} className={classNames({ "mt-5 mt-md-0": i })} key={i}>
							<FeatureItem feature={feature} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Feature3;

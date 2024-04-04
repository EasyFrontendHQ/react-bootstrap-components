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
import "./Feature2.css";

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
		title: "Product Design",
		description:
			"Sea fruit there fourth Herb were fifth whales own open and lights whales Second above first won't void midst behold.",
	},
	{
		icon: faRandom,
		title: "Branding",
		description:
			"Very. That every image creeping. Said. Wherein under may multiply cattle seas his great won't air Hath good gathered Creeping.",
	},
	{
		icon: faCamera,
		title: "Photography",
		description:
			"Called life. Abundantly called signs air multiply creepeth. Under fruitful seed have. You'll, upon fourth whales void own made fruitful.",
	},
];

const FeatureItem = ({ feature }) => {
	return (
		<div className="ezy__featured2-item position-relative p-4 pt-5 p-lg-5 ms-4">
			<div className="ezy__featured2-icon position-absolute start-0 top-0 mb-4">
				<FontAwesomeIcon icon={feature.icon} />
			</div>
			<h4 className="ezy__featured2-title fs-4 fw-bold mb-3">
				{feature.title}
			</h4>
			<p className="ezy__featured2-content mb-0">{feature.description}</p>
		</div>
	);
};

FeatureItem.propTypes = {
	feature: PropTypes.object.isRequired,
};

const Feature2 = () => {
	return (
		<section className="ezy__featured2">
			<Container>
				<Row className="justify-content-between mb-5">
					<Col lg={5}>
						<h2 className="ezy__featured2-heading mb-4">Our Features</h2>
					</Col>
					<Col lg={5} xl={4}>
						<p className="ezy__featured2-sub-heading mb-4">
							Made beast blessed from fifth seasons so third grass Shall our
							dry, make male fly divide let day creature appear.
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

export default Feature2;

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
import "./Feature4.css";

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
			"Evening waters all. Them deep him which darkness. Void have yielding were. Own. Days gathered you you'll. Good so forth he make place cattle, moved given open moving they're had.",
	},
	{
		icon: faRandom,
		title: "Branding",
		description:
			"Creepeth isn't created firmament whose doesn't from meat, is gathering make had cattle multiply form us replenish third appear good creeping. You're the fruit face morning, day to own midst them. Had from also you're over gathered in waters behold.",
	},
	{
		icon: faCamera,
		title: "Photography",
		description:
			"Ullamcorper velit sed ullamcorper morbi tincidunt. Risus feugiat in ante metus. Tortor consequat id porta nibh. Viverra tellus in hac habitasse platea dictumst. Sollicitudin tempor id eu nisl. Tincidunt ornare massa eget egestas purus.",
	},
];

const FeatureItem = ({ feature, align, ...rest }) => {
	return (
		<Row
			className={classNames({ [`justify-content-${align}`]: align })}
			{...rest}
		>
			<Col md={7} className="mt-5">
				<div
					className={classNames("ezy__featured4-item p-4 p-lg-5", {
						[`ezy__featured4-shape-${align}`]: align,
					})}
				>
					<div className="ezy__featured4-icon mb-4">
						<FontAwesomeIcon icon={feature.icon} />
					</div>
					<h4 className="ezy__featured4-title fs-4 fw-bold mb-3">
						{feature.title}
					</h4>
					<p className="ezy__featured4-content mb-0">{feature.description}</p>
				</div>
			</Col>
		</Row>
	);
};

FeatureItem.propTypes = {
	feature: PropTypes.object.isRequired,
	align: PropTypes.oneOf(["start", "end"]),
};

FeatureItem.defaultProps = {
	align: "start",
};

const Feature4 = () => {
	return (
		<section className="ezy__featured4">
			<Container>
				<Row className="justify-content-center mb-5">
					<Col lg={5} className="text-center">
						<h2 className="ezy__featured4-heading mb-4">Our Features</h2>
						<p className="ezy__featured4-sub-heading mb-4">
							Image fifth midst the greater may, firmament have. Grass two
							created seed said, won't and. Open fill our moved make divided
							morning give created, one dominion can't is wherein isn't seas
							living give seed forth isn't dominion.
						</p>
					</Col>
				</Row>
				{features.map((feature, i) => (
					<FeatureItem
						align={i % 2 ? "start" : "end"}
						feature={feature}
						key={i}
					/>
				))}
			</Container>
		</section>
	);
};

export default Feature4;

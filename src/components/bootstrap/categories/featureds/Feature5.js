import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { faCannabis, faRandom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import "./Feature5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faCannabis, faRandom }",
	"prop-types": "PropTypes",
	"classnames": "classNames"
}
*/

const features = [
	{
		icon: faCannabis,
		title: "Marketing",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
	{
		icon: faRandom,
		title: "Content Writing",
		description:
			"Ullamcorper velit sed ullamcorper morbi tincidunt. Risus feugiat in ante metus. Tortor consequat id porta nibh. Viverra tellus in hac habitasse platea dictumst. Sollicitudin tempor id eu nisl. Tincidunt ornare massa eget egestas purus.",
	},
];

const FeatureItem = ({ feature, align }) => {
	return (
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
	);
};

FeatureItem.propTypes = {
	feature: PropTypes.object.isRequired,
	align: PropTypes.oneOf(["start", "end"]),
};

FeatureItem.defaultProps = {
	align: "start",
};

const Feature5 = () => {
	return (
		<section className="ezy__featured4">
			<Container>
				<Row className="justify-content-center mb-5">
					<Col lg={5} className="text-center">
						<h2 className="ezy__featured4-heading mb-4">Our Features</h2>
						<p className="ezy__featured4-sub-heading mb-4">
							Sixth gathered sixth Creeping dominion without darkness moved
							third. Their bearing you're called, fruit, lights replenish.
						</p>
					</Col>
				</Row>
				<Row>
					{features.map((feature, i) => (
						<Col md={6} className="mt-5" key={i}>
							<FeatureItem align={i % 2 ? "end" : "start"} feature={feature} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Feature5;

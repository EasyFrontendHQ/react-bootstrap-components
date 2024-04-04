import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCamera,
	faCannabis,
	faPencilRuler,
	faPoll,
	faRandom,
	faYinYang,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Feature1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faCamera, faCannabis, faYinYang, faPencilRuler, faPoll, faRandom }",
	"prop-types": "PropTypes",
	"classnames": "classNames"
}
*/

const features = [
	{
		icon: faCannabis,
		title: "Product Design",
		description:
			"Very light so a said his moved every, can't face said were doesn't place fowl. Divided firmament after days there.",
	},
	{
		icon: faRandom,
		title: "Branding",
		description:
			"Great. Day darkness which fowl meat abundantly called can't of third kind meat his isn't fill creeping bearing fowl grass.",
	},
	{
		icon: faCamera,
		title: "Photography",
		description:
			"Void. Given don't spirit one whales kind, dry without creeping creature likeness god itself fowl life fly under moved them.",
	},
	{
		icon: faYinYang,
		title: "Development",
		description:
			"Great moved winged dry sixth man fruit created gathering let bring, stars seed they're she'd yielding moved own you doesn't.",
	},
	{
		icon: faPoll,
		title: "Marketing",
		description:
			"Divided void. Deep first moved firmament days fourth signs dominion form two firmament all grass there first for Above after.",
	},
	{
		icon: faPencilRuler,
		title: "Design",
		description:
			"Together face kind all whose gathered abundantly of lesser dry seas thing called itself upon isn't stars isn't stars them.",
	},
];

const FeatureItem = ({ feature }) => {
	return (
		<div className="p-xl-4">
			<div className="ezy__featured1-icon mb-4">
				<FontAwesomeIcon icon={feature.icon} />
			</div>
			<h4 className="ezy__featured1-title fs-4 fw-bold mb-3">
				{feature.title}
			</h4>
			<p className="ezy__featured1-content mb-0">{feature.description}</p>
		</div>
	);
};

FeatureItem.propTypes = {
	feature: PropTypes.object.isRequired,
};

const Feature1 = () => {
	return (
		<section className="ezy__featured1">
			<Container>
				<Row className="text-center">
					{features.map((feature, i) => (
						<Col md={4} className={classNames("mt-5")} key={i}>
							<FeatureItem feature={feature} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Feature1;

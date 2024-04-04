import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faPinterestP,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

import "./Footer4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Nav, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-brands-svg-icons": "{ faFacebookF, faTwitter, faPinterestP, faLinkedinIn, }",
	"prop-types": "PropTypes",
}
*/

const navigations = [
	{
		value: "Privacy Policy",
		href: "#!",
	},
	{
		value: "Security",
		href: "#!",
	},
	{
		value: "Terms & Condition",
		href: "#!",
	},
];

const sociaIcons = [
	{
		icon: faFacebookF,
		href: "#!",
	},
	{
		icon: faTwitter,
		href: "#!",
	},
	{
		icon: faPinterestP,
		href: "#!",
	},
	{
		icon: faLinkedinIn,
		href: "#!",
	},
];

const NavigationItem = ({ item }) => (
	<Nav.Item>
		<Nav.Link href={item.href}>{item.value}</Nav.Link>
	</Nav.Item>
);

NavigationItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const SocialItem = ({ social }) => (
	<li>
		<a
			href={social.href}
			className="border d-flex justify-content-center align-items-center rounded-circle"
		>
			<FontAwesomeIcon icon={social.icon} />
		</a>
	</li>
);

SocialItem.propTypes = {
	social: PropTypes.object.isRequired,
};

const Footer4 = () => {
	return (
		<section className="ezy__footer4">
			<Container>
				<Row className="d-flex justify-content-between align-items-center text-center text-lg-start">
					<Col xs={12} className="text-center">
						<h2 className="fw-bold fa-3x mb-0">Logo</h2>
						<Nav className="ezy__footer4-nav justify-content-center my-4 my-lg-5">
							{navigations.map((item, i) => (
								<NavigationItem item={item} key={i} />
							))}
						</Nav>
					</Col>
					<Col md={6}>
						<p className="mb-0 mt-1">
							Copyright &copy; Easy Frontend, All rights reserved
						</p>
					</Col>
					<Col
						md={6}
						className="d-flex justify-content-center justify-content-lg-end text-center text-lg-end mt-1"
					>
						<Nav className="ezy__footer4-social">
							{sociaIcons.map((social, i) => (
								<SocialItem social={social} key={i} />
							))}
						</Nav>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Footer4;

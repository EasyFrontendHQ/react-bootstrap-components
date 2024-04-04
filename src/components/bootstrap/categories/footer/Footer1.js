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

import "./Footer1.css";

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
		value: "Home",
		href: "#!",
	},
	{
		value: "About",
		href: "#!",
	},
	{
		value: "Contact",
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

const Footer1 = () => {
	return (
		<section className="ezy__footer1">
			<Container>
				<Row className="d-flex justify-content-between align-items-center">
					<Col lg={4}>
						<p className="mb-lg-0">Copyright all rights reserved</p>
					</Col>
					<Col lg={4}>
						<Nav className="ezy__footer1-nav justify-content-center">
							{navigations.map((item, i) => (
								<NavigationItem item={item} key={i} />
							))}
						</Nav>
					</Col>
					<Col
						lg={4}
						className="d-flex justify-content-center justify-content-lg-end"
					>
						<Nav className="ezy__footer1-social">
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

export default Footer1;

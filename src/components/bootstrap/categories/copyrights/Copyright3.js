import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faBehance,
	faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import "./Copyright3.css";

/*
{
	"react": "React, { useState }",
	"react-bootstrap": "{ Col, Container, Nav, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-brands-svg-icons": "{ faFacebook, faTwitter, faBehance, faDribbble }",
}
*/

const socialLinks = [
	{
		icon: faFacebook,
		href: "",
	},
	{
		icon: faTwitter,
		href: "",
	},
	{
		icon: faDribbble,
		href: "",
	},
	{
		icon: faBehance,
		href: "",
	},
];

const SocialLinks = () => (
	<Nav className="ezy__copyright3-social">
		{socialLinks.map((link, i) => (
			<li key={i}>
				<a href={link.href} className="">
					<FontAwesomeIcon icon={link.icon} />
				</a>
			</li>
		))}
	</Nav>
);

const Copyright3 = () => {
	return (
		<section className="ezy__copyright3 text-center text-lg-start pt-5 pb-5">
			<Container>
				<Row className="d-flex justify-content-between align-items-center">
					<Col lg={4}>
						<p className="mb-lg-0">Copyright all rights reserved</p>
					</Col>
					<Col
						lg={4}
						className="d-flex justify-content-center justify-content-lg-end"
					>
						<SocialLinks />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Copyright3;

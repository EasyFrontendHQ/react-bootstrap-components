import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faBehance,
	faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import "./Copyright1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Nav, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-brands-svg-icons": "{ faFacebook, faTwitter, faBehance, faDribbble }",
}
*/

const quickLinks = [
	{
		href: "#",
		label: "Home",
	},
	{
		href: "#",
		label: "About",
	},
	{
		href: "#",
		label: "Contact",
	},
];

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
	<Nav className="ezy__copyright1-social">
		{socialLinks.map((link, i) => (
			<li key={i}>
				<a href={link.href} className="">
					<FontAwesomeIcon icon={link.icon} />
				</a>
			</li>
		))}
	</Nav>
);

const Copyright1 = () => {
	return (
		<section className="ezy__copyright1">
			<Container className="text-center text-lg-start">
				<Row className="d-flex justify-content-between align-items-center">
					<Col lg={4}>
						<p className="text-white mb-lg-0">Copyright all rights reserved</p>
					</Col>
					<Col lg={4}>
						<Nav className="ezy__copyright1-nav justify-content-center">
							{quickLinks.map((link, i) => (
								<li className="nav-item" key={i}>
									<a className="nav-link" href={link.href}>
										{link.label}
									</a>
								</li>
							))}
						</Nav>
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

export default Copyright1;

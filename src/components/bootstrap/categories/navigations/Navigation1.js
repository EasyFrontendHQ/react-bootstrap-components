import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Navigation1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Container, Nav, Navbar }",
	"prop-types": "PropTypes"
}
*/

const routes = [
	{ name: "Home", href: "#" },
	{ name: "Services", href: "#" },
	{ name: "Why us?", href: "#" },
	{ name: "How It Works", href: "#" },
	{ name: "Features", href: "#" },
	{ name: "Testimonials", href: "#" },
];

const NavMenu = ({ routes }) => (
	<Nav className="ms-auto mb-2 mb-lg-0 mt-4 mt-lg-0">
		{routes.map((route, i) => (
			<Nav.Item key={i}>
				<Nav.Link href={route.href}>{route.name}</Nav.Link>
			</Nav.Item>
		))}
	</Nav>
);

NavMenu.propTypes = {
	routes: PropTypes.array.isRequired,
};

const Navigation1 = () => {
	return (
		<div className="ezy__nav1">
			<Navbar expand="lg" className="py-3">
				<Container>
					<Navbar.Brand href="#">Easy Frontend</Navbar.Brand>
					<Navbar.Toggle aria-controls="ezy__nav1-navbar-nav">
						<span>
							<span />
						</span>
					</Navbar.Toggle>
					<Navbar.Collapse id="ezy__nav1-navbar-nav">
						<NavMenu routes={routes} />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navigation1;

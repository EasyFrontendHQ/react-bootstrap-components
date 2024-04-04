import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";

import "./Navigation2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Container, Nav, Navbar }",
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

const AuthNavMenu = () => (
	<Nav className="flex-row mb-2 mb-lg-0 ms-lg-3">
		<Nav.Item className="me-2">
			<Button variant="outline-primary" className="px-3">
				Sign Up
			</Button>
		</Nav.Item>
		<Nav.Item>
			<Button variant="primary" className="px-3">
				Log In
			</Button>
		</Nav.Item>
	</Nav>
);

const Navigation2 = () => {
	return (
		<div className="ezy__nav2">
			<Navbar expand="lg" className="py-3">
				<Container>
					<Navbar.Brand href="#">Easy Frontend</Navbar.Brand>
					<Navbar.Toggle aria-controls="ezy__nav2-navbar-nav">
						<span>
							<span />
						</span>
					</Navbar.Toggle>
					<Navbar.Collapse id="ezy__nav2-navbar-nav">
						<NavMenu routes={routes} />
						<AuthNavMenu />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navigation2;

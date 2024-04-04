import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";

import "./Navigation4.css";

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
];

const NavMenu = ({ routes, children }) => (
	<Nav className="mx-auto mb-2 mb-lg-0 mt-4 mt-lg-0">
		{children}
		{routes.map((route, i) => (
			<Nav.Item key={i}>
				<Nav.Link href={route.href}>{route.name}</Nav.Link>
			</Nav.Item>
		))}
	</Nav>
);

NavMenu.propTypes = {
	routes: PropTypes.array.isRequired,
	children: PropTypes.node,
};

const AuthNavMenu = () => (
	<Nav className="flex-row mb-2 mb-lg-0">
		<Nav.Item>
			<Button variant="outline-light" className="px-3">
				Signup or Login
			</Button>
		</Nav.Item>
	</Nav>
);

const Navigation4 = () => {
	return (
		<div className="ezy__nav4">
			<Navbar expand="lg" className="py-3">
				<Container>
					<Navbar.Brand href="#">LOGO</Navbar.Brand>
					<Navbar.Toggle aria-controls="ezy__nav4-navbar-nav">
						<span>
							<span />
						</span>
					</Navbar.Toggle>
					<Navbar.Collapse id="ezy__nav4-navbar-nav">
						<NavMenu routes={routes} />
						<AuthNavMenu />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navigation4;

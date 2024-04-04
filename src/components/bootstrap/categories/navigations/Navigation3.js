import React from "react";
import {
	Button,
	Container,
	Form,
	InputGroup,
	Nav,
	Navbar,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./Navigation3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Container, Form, InputGroup, Nav, Navbar }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faSearch }",
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
	<Nav className="mb-2 mb-lg-0 mt-4 mt-lg-0">
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
	<Nav className="flex-row ms-auto mb-2 mb-lg-0">
		<Nav.Item>
			<Button variant="outline-primary" className="px-3">
				Signup or Login
			</Button>
		</Nav.Item>
	</Nav>
);

const SearchForm = () => (
	<Form className="mx-lg-3 mb-3 mb-lg-0">
		<InputGroup>
			<Form.Control type="search" placeholder="City, Address, Zip" />
			<Button variant="primary" className="px-3" type="submit">
				<FontAwesomeIcon icon={faSearch} />
			</Button>
		</InputGroup>
	</Form>
);

const Navigation3 = () => {
	return (
		<div className="ezy__nav3">
			<Navbar expand="lg" className="py-3">
				<Container>
					<Navbar.Brand href="#">LOGO</Navbar.Brand>
					<Navbar.Toggle aria-controls="ezy__nav3-navbar-nav">
						<span>
							<span />
						</span>
					</Navbar.Toggle>
					<Navbar.Collapse id="ezy__nav3-navbar-nav">
						<NavMenu routes={routes}>
							<Nav.Item>
								<SearchForm />
							</Nav.Item>
						</NavMenu>
						<AuthNavMenu />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navigation3;

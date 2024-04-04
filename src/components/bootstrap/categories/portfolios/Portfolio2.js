import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import classNames from "classnames";

import "./Portfolio2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }",
	"classnames": "classNames"
}
*/

const categories = [
	{ label: "All", value: "", isActive: false },
	{ label: "Branding", value: "Branding", isActive: true },
	{ label: "Code", value: "Code", isActive: false },
	{ label: "Marketing", value: "Marketing", isActive: false },
	{ label: "Photography", value: "Photography", isActive: false },
	{ label: "Development", value: "Development", isActive: false },
];

const portfolioList = [
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio7.jpg",
		title: "Photography",
		categories: ["Cinematography"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio8.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio9.jpg",
		title: "Marketing",
		categories: ["Digital Marketing"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio10.jpg",
		title: "Web Portal Dev",
		categories: ["Web Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio11.jpg",
		title: "VS Code Editor",
		categories: ["Specialist"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio17.jpg",
		title: "Management",
		categories: ["Project Manager"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio2.jpg",
		title: "Logo Design",
		categories: ["Branding"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio3.jpg",
		title: "Full Stack Dev",
		categories: ["Wordpress"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio4.jpg",
		title: "Designing",
		categories: ["Product Design"],
	},
];

const Portfolio2 = () => {
	return (
		<div className="ezy__portfolio2">
			<Container>
				<Row className="justify-content-center mb-4 mb-md-5">
					<Col lg={6} className="text-center">
						<p className="ezy__portfolio2-sub-heading mb-2">
							THIS IS WHAT WE DO
						</p>
						<h2 className="ezy__portfolio2-heading mb-4">My Latest Works</h2>
					</Col>
					<Col xs={12} className="text-center mt-4">
						{categories.map((category, i) => (
							<Button
								variant=""
								className={classNames("m-1 ezy__portfolio2-btn-filter", {
									active: category.isActive,
								})}
								key={i}
							>
								{category.label}
							</Button>
						))}
					</Col>
				</Row>
				<Row>
					{portfolioList.map((portfolio, i) => (
						<Col md={6} lg={4} key={i}>
							<div className="ezy__portfolio2-item mt-4">
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="img-fluid ezy__portfolio2-img"
								/>
								<div className="ezy__portfolio2-content text-center px-3 py-4">
									<h5>{portfolio.title}</h5>
									<p className="mb-0">{portfolio.categories.join(", ")}</p>
								</div>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Portfolio2;

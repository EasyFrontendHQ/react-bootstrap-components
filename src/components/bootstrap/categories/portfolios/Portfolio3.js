import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import classNames from "classnames";

import "./Portfolio3.css";

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
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio12.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio13.jpg",
		title: "Photography",
		categories: ["Cinematography"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio14.jpg",
		title: "Marketing",
		categories: ["Digital Marketing"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio15.jpg",
		title: "Web Portal",
		categories: ["Web Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16.jpg",
		title: "VS Code Editor",
		categories: ["Specialist"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio17.jpg",
		title: "Management",
		categories: ["Project Manager"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio18.jpg",
		title: "Logo Design",
		categories: ["Branding"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio19.jpg",
		title: "Full Stack Dev",
		categories: ["Wordpress"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio20.jpg",
		title: "Designing",
		categories: ["Product Design"],
	},
];

const Portfolio3 = () => {
	return (
		<section className="ezy__portfolio3">
			<Container>
				<Row className="justify-content-center mb-4">
					<Col lg={6} className="text-center">
						<h2 className="ezy__portfolio3-heading mb-2">My Latest Works</h2>
						<p className="ezy__portfolio3-sub-heading mb-4">
							THIS IS WHAT WE DO
						</p>
					</Col>
					<Col xs={12} className="text-center mt-4">
						{categories.map((category, i) => (
							<Button
								variant=""
								className={classNames("m-1 ezy__portfolio3-btn-filter", {
									active: category.isActive,
								})}
								key={i}
							>
								{category.label}
							</Button>
						))}
					</Col>
				</Row>
				<Row className="text-center">
					{portfolioList.map((portfolio, i) => (
						<Col md={6} lg={4} key={i}>
							<div className="ezy__portfolio3-item mt-4 mt-lg-5">
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="img-fluid ezy__portfolio3-img"
								/>
								<div className="ezy__portfolio3-content mt-4">
									<h5>{portfolio.title}</h5>
									<p className="mb-0">{portfolio.categories.join(", ")}</p>
								</div>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Portfolio3;

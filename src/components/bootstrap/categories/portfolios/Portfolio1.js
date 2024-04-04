import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import classNames from "classnames";

import "./Portfolio1.css";

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
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_1.png",
		title: "Photography",
		categories: ["Cinematography"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_2.png",
		title: "Web Portal Dev",
		categories: ["Product Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_3.png",
		title: "Marketing",
		categories: ["Digital Marketing"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_4.png",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_5.png",
		title: "VS Code Editor",
		categories: ["Specialist"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_6.png",
		title: "Management",
		categories: ["Project Manager"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_7.png",
		title: "Logo Design",
		categories: ["Branding"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio1.jpg",
		title: "Full Stack Dev",
		categories: ["Wordpress"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio5.jpg",
		title: "Designing",
		categories: ["Product Design"],
	},
];

const Portfolio1 = () => {
	return (
		<section className="ezy__portfolio1">
			<Container>
				<Row className="justify-content-center mb-4 mb-md-5">
					<Col lg={6} className="text-center">
						<p className="ezy__portfolio1-sub-heading mb-2">
							THIS IS WHAT WE DO
						</p>
						<h2 className="ezy__portfolio1-heading mb-4">My Latest Works</h2>
					</Col>
					<Col md={12} className="text-center mt-4">
						{categories.map((category, i) => (
							<Button
								variant=""
								className={classNames("m-1 ezy__portfolio1-btn-filter", {
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
							<div className="ezy__portfolio1-item position-relative mt-4">
								<img
									src={portfolio.image}
									alt={portfolio.alt}
									className="img-fluid w-100"
								/>
								<div className="ezy__portfolio1-content text-center p-4">
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

export default Portfolio1;

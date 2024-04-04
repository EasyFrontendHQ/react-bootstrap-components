import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import classNames from "classnames";

import "./Portfolio5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }",
	"classnames": "classNames"
}
*/

const categories = [
	{ label: "All", value: "", isActive: false },
	{ label: "Branding", value: "Branding", isActive: false },
	{ label: "Code", value: "Code", isActive: false },
	{ label: "Marketing", value: "Marketing", isActive: true },
	{ label: "Photography", value: "Photography", isActive: false },
	{ label: "Development", value: "Development", isActive: false },
];

const portfolioList = [
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio19.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_2.png",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio17.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio14.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio5.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio7.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio11.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio8.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_2.png",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio10.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio3.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_5.png",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
];

const Portfolio5 = () => {
	return (
		<section className="ezy__portfolio5">
			<Container>
				<Row className="justify-content-center mb-4 mb-md-5">
					<Col lg={6} className="text-center">
						<p className="ezy__portfolio5-sub-heading mb-2">
							THIS IS WHAT WE DO
						</p>
						<h2 className="ezy__portfolio5-heading mb-4">My Latest Works</h2>
					</Col>
					<Col xs={12} className="text-center mt-4">
						{categories.map((category, i) => (
							<Button
								variant="outline-dark"
								size="sm"
								className={classNames(
									"border-0 roundedm-1 ezy__portfolio5-btn-filter",
									{ active: category.isActive }
								)}
								key={i}
							>
								{category.label}
							</Button>
						))}
					</Col>
				</Row>
				<Row>
					{portfolioList.map((portfolio, i) => (
						<Col md={6} lg={4} xl={3} key={i}>
							<div className="ezy__portfolio5-item position-relative mt-4">
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="img-fluid w-100"
								/>
								<div className="ezy__portfolio5-content text-center p-4">
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

export default Portfolio5;

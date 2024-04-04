import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import classNames from "classnames";
import "./Portfolio4.css";

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
];

const portfolioList = [
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_4_1.png",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio24.jpg",
		title: "Marketing",
		categories: ["Digital Marketing"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_4_3.png",
		title: "Designing",
		categories: ["Product Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio21.jpg",
		title: "Management",
		categories: ["Project Manager"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_4_4.png",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio22.jpg",
		title: "Photography",
		categories: ["Cinematography"],
	},
];

const Portfolio4 = () => {
	return (
		<section className="ezy__portfolio4">
			<div className="ezy__portfolio4-bg">
				<Container>
					<Row className="align-items-center">
						<Col lg={6} className="text-center text-lg-start">
							<p className="ezy__portfolio4-sub-heading mb-2">
								THIS IS WHAT WE DO
							</p>
							<h2 className="ezy__portfolio4-heading mb-4">My Latest Works</h2>
						</Col>
						<Col lg={6} className="text-center text-lg-end mt-4 mt-lg-0">
							{categories.map((category, i) => (
								<Button
									variant="outline-dark"
									className={classNames("m-1 ezy__portfolio4-btn-filter", {
										active: category.isActive,
									})}
									key={i}
								>
									{category.label}
								</Button>
							))}
						</Col>
					</Row>
				</Container>
			</div>
			<Container className="ezy__portfolio4-items">
				<Row>
					<Col md={4} className="mt-md-4 mt-lg-5 pt-md-4 pt-lg-5">
						{portfolioList.slice(0, 2).map((portfolio, i) => (
							<div
								className="ezy__portfolio4-item position-relative mt-4"
								key={i}
							>
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="img-fluid w-100"
								/>
								<div className="ezy__portfolio4-content text-center p-4">
									<h5>{portfolio.title}</h5>
									<p className="mb-0">{portfolio.categories.join(", ")}</p>
								</div>
							</div>
						))}
					</Col>
					<Col md={4} className="mt-md-4 mt-lg-5">
						{portfolioList.slice(2, 4).map((portfolio, i) => (
							<div
								className="ezy__portfolio4-item position-relative mt-4"
								key={i}
							>
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="img-fluid w-100"
								/>
								<div className="ezy__portfolio4-content text-center p-4">
									<h5>{portfolio.title}</h5>
									<p className="mb-0">{portfolio.categories.join(", ")}</p>
								</div>
							</div>
						))}
					</Col>
					<Col md={4}>
						{portfolioList.slice(4, 6).map((portfolio, i) => (
							<div
								className="ezy__portfolio4-item position-relative mt-4"
								key={i}
							>
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="img-fluid w-100"
								/>
								<div className="ezy__portfolio4-content text-center p-4">
									<h5>{portfolio.title}</h5>
									<p className="mb-0">{portfolio.categories.join(", ")}</p>
								</div>
							</div>
						))}
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Portfolio4;

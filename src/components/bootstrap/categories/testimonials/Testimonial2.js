import React, { Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Testimonial2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Card, Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faStar, faStarHalfAlt }",
    "classnames": "classNames",
    "prop-types": "PropTypes"
}
*/

const testimonialList = [
	{
		author: {
			fullName: "Akshay Kumar",
			picture: "https://cdn.easyfrontend.com/pictures/users/user3.jpg",
			designation: "Founder / CEO",
		},
		rating: 3.5,
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
	{
		author: {
			fullName: "Raima Sen",
			picture: "https://cdn.easyfrontend.com/pictures/users/user25.jpg",
			designation: "Founder / CEO",
		},
		rating: 3.5,
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
	{
		author: {
			fullName: "Arjun Kapur",
			picture: "https://cdn.easyfrontend.com/pictures/users/user11.jpg",
			designation: "Founder / CEO",
		},
		rating: 3.5,
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p
		className={classNames("mb-4 ezy__testimonial2-rating", className)}
		{...rest}
	>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = <FontAwesomeIcon icon={faStar} className="me-1 active" />;
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon icon={faStarHalfAlt} className="me-1 active" />
					);
				else if (index > rating)
					content = <FontAwesomeIcon icon={faStar} className="me-1" />;

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItem = ({ testimonial }) => (
	<Card className="ezy__testimonial2-item mt-5">
		<div className="ezy__testimonial2-icon">
			<img
				src={testimonial.author.picture}
				alt={testimonial.author.fullName}
				className="img-fluid rounded-circle w-100 p-1"
			/>
		</div>
		<Card.Body className="px-lg-4 pt-4 pb-lg-5">
			<div className="ms-4 ps-5">
				<h4 className="ezy__testimonial2-title fs-5 mb-1">
					{testimonial.author.fullName}
				</h4>
				<Rating rating={testimonial.rating} showLabel={false} />
			</div>
			<p className="ezy__testimonial2-content mb-0">
				{testimonial.description}
			</p>
		</Card.Body>
	</Card>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

const Testimonial2 = () => {
	return (
		<section className="ezy__testimonial2">
			<Container>
				<Row className="justify-content-center mb-md-4">
					<Col lg={6} className="text-center">
						<h2 className="ezy__testimonial2-heading mb-4">
							Community Reviews
						</h2>
						<p className="ezy__testimonial2-sub-heading mb-0">
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!
						</p>
					</Col>
				</Row>
				<Row className="ezy__testimonial2-card">
					{testimonialList.map((testimonial, i) => (
						<Col md={4} className="mt-5" key={i}>
							<TestimonialItem testimonial={testimonial} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Testimonial2;

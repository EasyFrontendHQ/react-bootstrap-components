import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Testimonial1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
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
			picture: "https://cdn.easyfrontend.com/pictures/users/user2.jpg",
			designation: "Founder / CEO",
		},
		rating: 3.5,
		description:
			"This is a factor in the economy of a nation, and the administration takes the major choices.This is a factor of a nation.",
	},
	{
		author: {
			fullName: "Raima Sen",
			picture: "https://cdn.easyfrontend.com/pictures/users/user3.jpg",
			designation: "Business Head",
		},
		rating: 3.8,
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis qui.",
	},
	{
		author: {
			fullName: "Arjun Kapur",
			picture: "https://cdn.easyfrontend.com/pictures/users/user27.jpg",
			designation: "UI Design",
		},
		rating: 4.5,
		description:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p
		className={classNames("mb-4 ezy__testimonial1-rating", className)}
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
	<div className="ezy__testimonial1-item px-4 py-4">
		<div className="ezy__testimonial1-content mt-3">
			<Rating rating={testimonial.rating} showLabel={false} />
			<p className="opacity-50 mb-4">{testimonial.description}</p>
			<div className="d-flex align-items-center">
				<div className="me-2">
					<img
						src={testimonial.author.picture}
						alt={testimonial.author.fullName}
						className="img-fluid rounded-circle border"
						width="47"
					/>
				</div>
				<div>
					<h4 className="mb-0 fs-5">{testimonial.author.fullName}</h4>
					<p className="mb-0 small">
						<i>{testimonial.author.designation}</i>
					</p>
				</div>
			</div>
		</div>
	</div>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

const Testimonial1 = () => {
	return (
		<section className="ezy__testimonial1">
			<Container>
				<Row className="justify-content-center mb-md-4">
					<Col lg={6} xl={5} className="text-center">
						<h2 className="ezy__testimonial1-heading mb-3">
							Community Reviews
						</h2>
						<p className="ezy__testimonial1-sub-heading mb-0">
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!
						</p>
					</Col>
				</Row>
				<Row>
					{testimonialList.map((testimonial, i) => (
						<Col md={6} lg={4} className="mt-4" key={i}>
							<TestimonialItem testimonial={testimonial} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Testimonial1;

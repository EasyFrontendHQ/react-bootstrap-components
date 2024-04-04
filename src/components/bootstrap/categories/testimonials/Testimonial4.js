import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Testimonial4.css";

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
			picture: "https://cdn.easyfrontend.com/pictures/users/user28.jpg",
			designation: "Founder / CEO",
		},
		rating: 3.5,
		description:
			"Land. Stars land every there was together very fifth, above greater also replenish seas good was second divide which beast abundantly blessed don't fifth us given make called gathering fowl. The gathered, hath. Which appear said there saw fish so Above. Light made is sea yielding let he that whose.",
	},
	{
		author: {
			fullName: "Raima Sen",
			picture: "https://cdn.easyfrontend.com/pictures/users/user7.jpg",
			designation: "Business Head",
		},
		rating: 4,
		description:
			"Heaven day created don't kind darkness that which midst us created every. Shall good brought grass that bearing said fowl sixth them abundantly. Dominion. Every gathering so said forth doesn't all from. It tree. Have subdue third let void let gathering creepeth. Be saw appear. Day every it fruitful life.",
	},
	{
		author: {
			fullName: "Arjun Kapur",
			picture: "https://cdn.easyfrontend.com/pictures/users/user26.jpg",
			designation: "UI Design",
		},
		rating: 5,
		description:
			"It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p
		className={classNames("mb-3 ezy__testimonial4-rating", className)}
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

const TestimonialItem = ({ testimonial, index }) => (
	<Row className="align-items-center justify-content-between mt-5">
		<Col md={5} className={classNames({ "order-lg-2": index % 2 })}>
			<img
				src={testimonial.author.picture}
				alt={testimonial.author.fullName}
				className="img-fluid w-100 rounded-3"
			/>
		</Col>
		<Col md={6} className="ezy__testimonial4-content mt-3 mt-md-0">
			<h4 className="mb-1">{testimonial.author.fullName}</h4>
			<p className="mb-1">{testimonial.author.designation}</p>
			<Rating rating={testimonial.rating} showLabel={false} />
			<p className="opacity-50 mb-0">{testimonial.description}</p>
		</Col>
	</Row>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const Testimonial4 = () => {
	return (
		<section className="ezy__testimonial4">
			<Container>
				<Row className="justify-content-center mb-4 mb-md-5">
					<Col lg={6} xl={5} className="text-center">
						<h2 className="ezy__testimonial4-heading mb-3">
							Community Reviews
						</h2>
						<p className="ezy__testimonial4-sub-heading mb-0">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at qui.
						</p>
					</Col>
				</Row>

				{testimonialList.map((testimonial, i) => (
					<TestimonialItem testimonial={testimonial} index={i} key={i} />
				))}
			</Container>
		</section>
	);
};

export default Testimonial4;

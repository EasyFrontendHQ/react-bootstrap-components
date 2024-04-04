import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Testimonial5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
    "@fortawesome/free-solid-svg-icons": "{ faStar, faStarHalfAlt }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "classnames": "classNames",
    "prop-types": "PropTypes"
}
*/

const testimonialList = [
	{
		author: {
			fullName: "Akshay Kumar",
			picture: "https://cdn.easyfrontend.com/pictures/users/user17.jpg",
			designation: "Founder / CEO",
		},
		rating: 3.5,
		description:
			"Two multiply fly them, made under a make replenish behold stars, is he of beast place also under unto it.",
	},
	{
		author: {
			fullName: "Raima Sen",
			picture: "https://cdn.easyfrontend.com/pictures/users/user8.jpg",
			designation: "Founder / CEO",
		},
		rating: 4,
		description:
			"Shall deep bearing divide seed moved replenish us, good our open he seed day which firmament creeping wherein fourth fly.",
	},
	{
		author: {
			fullName: "Arjun Kapur",
			picture: "https://cdn.easyfrontend.com/pictures/users/user18.jpg",
			designation: "Founder / CEO",
		},
		rating: 5,
		description:
			"It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p
		className={classNames("mb-4 ezy__testimonial5-rating", className)}
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
	<div className="ezy__testimonial5-item p-4 py-lg-5 mt-4">
		<img
			src={testimonial.author.picture}
			alt={testimonial.author.fullName}
			className="img-fluid rounded-circle"
			width="120"
		/>
		<div className="ezy__testimonial5-content mt-3">
			<h4 className="mb-1">{testimonial.author.fullName}</h4>
			<Rating rating={testimonial.rating} showLabel={false} />
			<p className="opacity-50 mb-0">{testimonial.description}</p>
		</div>
	</div>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

const Testimonial5 = () => {
	return (
		<section className="ezy__testimonial5">
			<Container>
				<Row className="justify-content-center mb-4 mb-md-5">
					<Col lg={6} xl={5} className="text-center">
						<h2 className="ezy__testimonial5-heading mb-3">
							Community Reviews
						</h2>
						<p className="ezy__testimonial5-sub-heading mb-0">
							From there give dominion, lights doesn't good all rule let open,
							appear our beast second bearing.
						</p>
					</Col>
				</Row>
				<Row className="text-center">
					{testimonialList.map((testimonial, i) => (
						<Col md={6} lg={4} key={i}>
							<TestimonialItem testimonial={testimonial} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Testimonial5;

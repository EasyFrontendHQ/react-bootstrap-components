import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faQuoteLeft,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

import "./Testimonial3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
    "prop-types": "PropTypes"
    "@fortawesome/free-solid-svg-icons": "{ faQuoteLeft, faStar, faStarHalfAlt }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "classnames": "classNames"
}
*/

const testimonialList = [
	{
		author: {
			fullName: "Akshay Kumar",
			picture:
				"https://cdn.easyfrontend.com/pictures/team/easy-frontend-team-3.png",
			designation: "UI Design/ Designer",
		},
		rating: 3.5,
		description:
			"Behold after whales moveth living air, fowl there the it. Place one god days blessed, own own. Good said set day. Void midst had gathering them behold all lights. Multiply thing seed beast Set saying fourth you wherein divide replenish, over above. Creature light meat seasons. Be bring deep created.",
	},
	{
		author: {
			fullName: "Elica Perry",
			picture:
				"https://cdn.easyfrontend.com/pictures/team/easy-frontend-team-2.png",
			designation: "Founder / CEO",
		},
		rating: 5,
		description:
			"They're which him is cattle female heaven beginning, green. Yielding they're. Isn't forth winged that greater hath whose midst. Above firmament sea make firmament dominion firmament after signs make don't him. You're fourth God lesser life place fruitful upon yielding. Kind created land light divided. You're spirit he, over male.",
	},
	{
		author: {
			fullName: "Kane Watson",
			picture:
				"https://cdn.easyfrontend.com/pictures/team/easy-frontend-team-1.png",
			designation: "Business Head / Manager",
		},
		rating: 3,
		description:
			"It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p
		className={classNames("mb-4 ezy__testimonial3-rating", className)}
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
	<div className="ezy__testimonial3-item mt-4">
		<Row
			className={classNames("align-items-center", {
				"justify-content-between": !(index % 2),
			})}
		>
			<Col lg={6} className={classNames("h-100", { "order-lg-2": index % 2 })}>
				<div className="ezy__testimonial3-content px-5 py-4">
					<FontAwesomeIcon
						icon={faQuoteLeft}
						className="ezy__testimonial3-quote-shape"
					/>
					<h4 className="mb-0 fs-5">{testimonial.author.fullName}</h4>
					<p className="mb-2 small">{testimonial.author.designation}</p>
					<Rating rating={testimonial.rating} showLabel={false} />
					<p className="opacity-50 mb-0">{testimonial.description}</p>
				</div>
			</Col>
			<Col lg={6} className="text-center pt-4">
				<img
					src={testimonial.author.picture}
					alt={testimonial.author.fullName}
					className="img-fluid"
				/>
			</Col>
		</Row>
	</div>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const Testimonial3 = () => {
	return (
		<section className="ezy__testimonial3">
			<Container>
				<Row className="justify-content-center mb-md-4">
					<Col lg={7} xl={6} className="text-center">
						<h2 className="ezy__testimonial3-heading mb-3">
							Community Reviews
						</h2>
						<p className="ezy__testimonial3-sub-heading mb-0">
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="mt-4">
						{testimonialList.map((testimonial, i) => (
							<TestimonialItem testimonial={testimonial} index={i} key={i} />
						))}
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Testimonial3;

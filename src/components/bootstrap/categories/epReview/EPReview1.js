import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStar,
	faStarHalfAlt,
	faThumbsDown,
	faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

import "./EPReview1.css";

/*
{
	"react": "React, { Fragment }",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faStar, faStarHalfAlt, faThumbsDown, faThumbsUp }",
	"@fortawesome/free-regular-svg-icons": "{ farStar }",
	"prop-types": "PropTypes",
}
*/
const review = [
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user2.jpg",
		name: "Elica Perry",
		rating: 3.5,
		date: "July 11,2020",
		content:
			"WA wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment.",
		like: "20",
		dislike: "6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user25.jpg",
		name: "Ben Stokes",
		rating: 4.5,
		date: "Aug 22,2020",
		content:
			"Well received seems solid, serious seller and word, fast delivery, thank you and congratulations.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		like: "73",
		dislike: "3",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user26.jpg",
		name: "John Alex",
		rating: 5.0,
		date: "Feb 14,2020",
		content:
			"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment.",
		like: "17",
		dislike: "19",
	},
];

const Rating = ({ rating }) => (
	<p className="ezy__epreview1-content fw-light mb-0">
		<span className="ezy__epreview1-rating">
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = <FontAwesomeIcon icon={faStar} />;
				else if (rating > i && rating < index + 1)
					content = <FontAwesomeIcon icon={faStarHalfAlt} />;
				else if (index > rating) content = <FontAwesomeIcon icon={farStar} />;

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		<span className="mx-1">{rating.toFixed(1)}</span>
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number,
};

const ReviewItem = ({ item }) => {
	return (
		<>
			<hr className="ezy__epreview1-hr my-3" />
			<div>
				<div className="d-flex align-items-center mb-4">
					<div className="ezy__epreview1-profile rounded-circle me-2 overflow-hidden">
						<img src={item.img} alt="" className="img-fluid" />
					</div>
					<div className="d-flex flex-grow-1 justify-content-between">
						<div>
							<h5 className="fs-6 mb-1">{item.name}</h5>
							<Rating rating={item.rating} />
						</div>
						<p className="ezy__epreview1-content opacity-50 mb-0">
							{item.date}
						</p>
					</div>
				</div>
				<p className="ezy__epreview1-content opacity-75 mb-4">{item.content}</p>
				<div className="d-flex justify-content-end">
					<Button
						variant=""
						className="ezy__epreview1-btn-text py-0 d-inline-flex justify-content-center align-items-center text-decoration-none me-4"
					>
						<FontAwesomeIcon icon={faThumbsUp} className="fs-6 me-2" />
						Like ({item.like})
					</Button>
					<Button
						variant=""
						className="ezy__epreview1-btn-text py-0 d-inline-flex justify-content-center align-items-center text-decoration-none"
					>
						<FontAwesomeIcon icon={faThumbsDown} className="fs-6 me-2" />
						Dislike ({item.dislike})
					</Button>
				</div>
			</div>
		</>
	);
};

ReviewItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Epreview1 = () => {
	return (
		<section className="ezy__epreview1" id="ezy__epreview1">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} lg={10} xl={8}>
						<Card className="ezy__epreview1-card mb-3">
							<Card.Body className="p-md-4">
								<div className="d-flex justify-content-between">
									<h2 className="fs-4">Customer Review</h2>
									<div>
										<Button
											variant=""
											className="ezy__epreview1-btn-outline py-1 px-md-4"
										>
											New Comment
										</Button>
									</div>
								</div>
								{review.map((item, i) => (
									<ReviewItem item={item} key={i} />
								))}
							</Card.Body>
							<Card.Body className="py-4 py-lg-5 text-center">
								<Button variant="" className="ezy__epreview1-btn px-4 px-md-5">
									Load More
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Epreview1;

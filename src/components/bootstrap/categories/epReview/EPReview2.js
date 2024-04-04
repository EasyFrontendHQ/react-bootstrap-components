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

import "./EPReview2.css";

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
		img: "https://cdn.easyfrontend.com/pictures/users/user8.jpg",
		name: "Amy Jones",
		rating: 3.5,
		date: "July 11,2020",
		content:
			"Well received seems solid, serious seller and word, fast delivery, thank you and congratulations.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		like: "20",
		dislike: "6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user28.jpg",
		name: "Rishab Pant",
		rating: 5,
		date: "Dec 03,2020",
		content:
			"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.",
		like: "23",
		dislike: "1",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user15.jpg",
		name: "Tammy Beaumont",
		rating: 4.5,
		date: "March 28,2020",
		content:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.		",
		like: "24",
		dislike: "9",
	},
];

const Rating = ({ rating }) => (
	<p className="ezy__epreview2-content fw-light mb-3">
		<span className="ezy__epreview2-rating">
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
			<hr className="ezy__epreview2-hr my-3" />
			<Row>
				<Col lg={4}>
					<div className="d-flex mb-4">
						<div className="ezy__epreview2-profile rounded-circle me-2 overflow-hidden">
							<img src={item.img} alt="" className="img-fluid" />
						</div>
						<div>
							<h5 className="fs-6 mb-1 mt-1">{item.name}</h5>
							<Rating rating={item.rating} />
							<p className="ezy__epreview2-content opacity-50 mb-0">
								Comment At
							</p>
							<p className="fw-bold mb-0">{item.date}</p>
						</div>
					</div>
				</Col>
				<Col lg={8}>
					<p className="ezy__epreview2-content opacity-75 mb-4">
						{item.content}
					</p>
					<div className="d-flex justify-content-end">
						<Button
							variant=""
							className="ezy__epreview2-btn-text py-0 d-inline-flex justify-content-center align-items-center text-decoration-none me-4"
						>
							<FontAwesomeIcon icon={faThumbsUp} className="fs-6 me-2" />
							Like ({item.like})
						</Button>
						<Button
							variant=""
							className="ezy__epreview2-btn-text py-0 d-inline-flex justify-content-center align-items-center text-decoration-none"
						>
							<FontAwesomeIcon icon={faThumbsDown} className="fs-6 me-2" />
							Dislike ({item.dislike})
						</Button>
					</div>
				</Col>
			</Row>
		</>
	);
};

ReviewItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Epreview2 = () => {
	return (
		<section className="ezy__epreview2" id="ezy__epreview2">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} lg={10} xl={8}>
						<Card className="ezy__epreview2-card mb-3">
							<Card.Body className="p-md-4">
								<div className="d-flex justify-content-between">
									<h2 className="fs-4">Customer Review</h2>
									<div>
										<Button
											variant=""
											className="ezy__epreview2-btn-outline py-1 px-md-4"
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
								<Button variant="" className="ezy__epreview2-btn px-4 px-md-5">
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

export default Epreview2;

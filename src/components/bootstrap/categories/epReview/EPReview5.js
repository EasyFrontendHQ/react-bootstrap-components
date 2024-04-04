import React, { Fragment } from "react";
import {
	Button,
	Card,
	Col,
	Container,
	ProgressBar,
	Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStar,
	faStarHalfAlt,
	faThumbsDown,
	faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import classNames from "classnames";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

import "./EPReview5.css";

/*
{
	"react": "React, { Fragment }",
	"react-bootstrap": "{ Button, Card, Col, Container, ProgressBar, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faStar, faStarHalfAlt, faThumbsDown, faThumbsUp }",
	"@fortawesome/free-regular-svg-icons": "{ farStar }",
	"prop-types": "PropTypes",
	"classnames": "classNames",
}
*/
const review = [
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user1.jpg",
		name: "Danni Wyatt",
		rating: 3.5,
		date: "July 11,2020",
		content:
			"Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
		like: "20",
		dislike: "6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user23.jpg",
		name: "John Alex",
		rating: 3.5,
		date: "Feb 09,2020",
		content:
			"Now you know what dummy text is, let’s learn about its usefulness. Some people say that they don’t need to use a dummy text generator to deliver a web design project to the customer. Even though this might be true, the effect that the final project will produce on the client won’t be as satisfactory as in the case of one with included filler content.",
		like: "67",
		dislike: "7",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user15.jpg",
		name: "Sophie Ecclestone",
		rating: 3.5,
		date: "Mar 24,2021",
		content:
			"A dummy text generator gives web designers the content they need. Then, they can use the typefaces and layout they prefer, thus obtaining the best mock-up of their work. It would be best to be impossible to understand and read because people might get distracted by the text itself and its nonsense rather than analyzing how the typefaces integrate into the design instead.",
		like: "26",
		dislike: "5",
	},
];

const progress = [
	{
		star: "5",
		value: "70",
		width: "70%",
		count: "123",
	},
	{
		star: "4",
		value: "90",
		width: "90%",
		count: "55",
	},
	{
		star: "3",
		value: "80",
		width: "80%",
		count: "12",
	},
	{
		star: "2",
		value: "60",
		width: "60%",
		count: "4",
	},
	{
		star: "1",
		value: "30",
		width: "30%",
		count: "3",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p
		className={classNames("ezy__epreview5-content fw-light mb-0", className)}
		{...rest}
	>
		<span className="ezy__epreview5-rating">
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
		{showLabel && <span className="mx-1">{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const ReviewItem = ({ item }) => {
	return (
		<>
			<hr className="ezy__epreview5-hr my-3" />
			<Row>
				<Col lg={4}>
					<div className="d-flex mb-4">
						<div className="ezy__epreview5-profile rounded-circle me-2 overflow-hidden">
							<img src={item.img} alt="" className="img-fluid" />
						</div>
						<div>
							<h5 className="fs-6 mb-1 mt-1">{item.name}</h5>
							<div className="mb-3">
								<Rating rating={item.rating} showLabel={true} />
							</div>
							<p className="ezy__epreview5-content opacity-50 mb-0">
								Comment At
							</p>
							<p className="fw-bold mb-0">{item.date}</p>
						</div>
					</div>
				</Col>
				<Col lg={8}>
					<p className="ezy__epreview5-content opacity-75 mb-4">
						{item.content}
					</p>
					<div className="d-flex justify-content-end">
						<Button
							variant=""
							className="ezy__epreview5-btn-text py-0 d-inline-flex justify-content-center align-items-center text-decoration-none me-4"
						>
							<FontAwesomeIcon icon={faThumbsUp} className="fs-6 me-2" />
							Like ({item.like})
						</Button>
						<Button
							variant=""
							className="ezy__epreview5-btn-text py-0 d-inline-flex justify-content-center align-items-center text-decoration-none"
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

const BarItem = ({ info }) => {
	return (
		<Row className="align-items-center mb-2">
			<Col xs={"auto"} className="ezy__epreview5-rating-range">
				<p className="ezy__epreview5-content fw-bold mb-0">
					<span className="opacity-50">{info.star}</span>
					<span className="ezy__epreview5-rating ms-1">
						<FontAwesomeIcon icon={faStar} />
					</span>
				</p>
			</Col>
			<Col xs={6}>
				<ProgressBar variant="" label="" now={info.value} />
			</Col>
			<Col>
				<p className="ezy__epreview5-content opacity-50 mb-0">{info.count}</p>
			</Col>
		</Row>
	);
};

BarItem.propTypes = {
	info: PropTypes.object.isRequired,
};

const Epreview5 = () => {
	return (
		<section className="ezy__epreview5" id="ezy__epreview5">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} lg={10} xl={8}>
						<Card className="ezy__epreview5-card mb-3">
							<Card.Body className="p-md-4">
								<h4 className="fs-4">Reviewer Recommendetion</h4>
								<div className="d-flex flex-wrap align-items-center fs-1">
									91%
								</div>
								<p className="ezy__epreview5-content opacity-75 mb-4 mb-md-5">
									Recomded by 6 reviewers who responded, 5 would recommend this
									product.
								</p>

								<div className="d-flex flex-wrap align-items-center">
									<span className="fs-1 me-2">4.5</span>
									<Rating rating={4.5} showLabel={false} className="fs-5" />
								</div>
								<p className="ezy__epreview5-content opacity-75 mb-4">
									Average rating based on 2345 reviews
								</p>
								<div>
									{progress.map((info, j) => (
										<BarItem info={info} key={j} />
									))}
								</div>
							</Card.Body>
							<hr className="ezy__epreview5-hr my-0" />
							<Card.Body className="p-md-4">
								<div className="d-flex justify-content-between">
									<h2 className="fs-4">Customer Review</h2>
									<div>
										<Button
											variant=""
											className="ezy__epreview5-btn-outline py-1 px-md-4"
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
								<Button variant="" className="ezy__epreview5-btn px-4 px-md-5">
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

export default Epreview5;

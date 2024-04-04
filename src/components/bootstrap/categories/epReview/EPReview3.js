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
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./EPReview3.css";

/*
{
	"react": "React, { Fragment }",
	"react-bootstrap": "{ Button, Card, Col, Container, ProgressBar, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faStar, faStarHalfAlt }",
	"@fortawesome/free-regular-svg-icons": "{ farStar }",
	"prop-types": "PropTypes",
	"classnames": "classNames",
}
*/
const review = [
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user20.jpg",
		name: "Alice Capsey",
		rating: 3.5,
		date: "July 11,2020",
		content:
			"Well received seems solid, serious seller and word, fast delivery, thank you and congratulations.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		like: "45",
		dislike: "13",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user11.jpg",
		name: "Kate Cross",
		rating: 4.5,
		date: "july 11,2020",
		content:
			"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.",
		like: "17",
		dislike: "56",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user10.jpg",
		name: "Maia Bouchier",
		rating: 5,
		date: "july 11,2020",
		content:
			"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.",
		like: "11",
		dislike: "1",
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
		className={classNames("ezy__epreview3-content fw-light mb-0", className)}
		{...rest}
	>
		<span className="ezy__epreview3-rating">
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
			<hr className="ezy__epreview3-hr my-3" />
			<Row>
				<Col lg={3}>
					<div className="mb-4">
						<div className="ezy__epreview3-profile rounded-circle me-2 overflow-hidden">
							<img src={item.img} alt="" className="img-fluid" />
						</div>
						<div>
							<h5 className="fs-6 mb-1 mt-1">{item.name}</h5>
							<div className="mb-3">
								<Rating rating={item.rating} showLabel={true} />
							</div>
						</div>
					</div>
				</Col>
				<Col lg={9}>
					<p className="ezy__epreview3-content opacity-75 mb-4">
						{item.content}
					</p>
					<div className="d-flex flex-wrap justify-content-end align-items-center">
						<span className="me-3">Helpful?</span>
						<Button
							variant=""
							className="ezy__epreview3-btn-text border-2 me-2 py-1"
						>
							Yes ({item.like})
						</Button>
						<Button
							variant=""
							className="ezy__epreview3-btn-text border-2 py-1"
						>
							No ({item.dislike})
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
			<Col xs={"auto"} className="ezy__epreview3-rating-range">
				<p className="ezy__epreview3-content fw-bold mb-0">
					<span className="opacity-50">{info.star}</span>
					<span className="ezy__epreview3-rating ms-1">
						<FontAwesomeIcon icon={faStar} />
					</span>
				</p>
			</Col>
			<Col xs={6}>
				<ProgressBar variant="" label="" now={info.value} />
			</Col>
			<Col>
				<p className="ezy__epreview3-content opacity-50 mb-0">{info.count}</p>
			</Col>
		</Row>
	);
};

BarItem.propTypes = {
	info: PropTypes.object.isRequired,
};
const Epreview3 = () => {
	return (
		<section className="ezy__epreview3" id="ezy__epreview3">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} lg={10} xl={8}>
						<Card className="ezy__epreview3-card mb-3">
							<Card.Body className="p-md-4">
								<h4 className="fs-4">Reviewer Recommendetion</h4>
								<div className="d-flex flex-wrap align-items-center fs-1">
									91%
								</div>
								<p className="ezy__epreview3-content opacity-75 mb-4 mb-md-5">
									Recomded by 6 reviewers who responded, 5 would recommend this
									product.
								</p>

								<div className="d-flex flex-wrap align-items-center">
									<span className="fs-1 me-3">4.5</span>
									<Rating rating={4.5} className="fs-5" />
								</div>
								<p className="ezy__epreview3-content opacity-75 mb-4">
									Average rating based on 2345 reviews
								</p>
								<div>
									{progress.map((info, j) => (
										<BarItem info={info} key={j} />
									))}
								</div>
							</Card.Body>
							<hr className="ezy__epreview3-hr my-0" />
							<Card.Body className="p-md-4">
								<div className="d-flex justify-content-between">
									<h2 className="fs-4">Customer Review</h2>
									<div>
										<Button className="ezy__epreview3-btn-outline py-1 px-md-4">
											New Comment
										</Button>
									</div>
								</div>
								{review.map((item, i) => (
									<ReviewItem item={item} key={i} />
								))}
							</Card.Body>
							<Card.Body className="py-4 py-lg-5 text-center">
								<Button variant="" className="ezy__epreview3-btn px-4 px-md-5">
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

export default Epreview3;

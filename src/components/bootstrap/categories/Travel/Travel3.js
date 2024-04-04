import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import PropTypes from "prop-types";

import "./Travel3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row, Card }",
	 "prop-types": "PropTypes",
}
*/
const placeData = [
	{
		price: "$325",
		img: "https://cdn.easyfrontend.com/pictures/search1_1.png",
		name: "Toledo",
		location: "United State",
	},
	{
		price: "$325",
		img: "https://cdn.easyfrontend.com/pictures/search1_2.png",
		name: "Noonu Atoll",
		location: "United State",
	},
	{
		price: "$325",
		img: "https://cdn.easyfrontend.com/pictures/search1_3.png",
		name: "Toledo",
		location: "United State",
	},
	{
		price: "$325",
		img: "https://cdn.easyfrontend.com/pictures/search1_4.png",
		name: "Kaafu Atoll",
		location: "United State",
	},
	{
		price: "$325",
		img: "https://cdn.easyfrontend.com/pictures/search1_5.png",
		name: "Barcelona",
		location: "Spain",
	},
	{
		price: "$325",
		img: "https://cdn.easyfrontend.com/pictures/search1_6.png",
		name: "Hiroshima",
		location: "Japan",
	},
	{
		price: "$325",
		img: "https://cdn.easyfrontend.com/pictures/search1_7.png",
		name: "Tibidabo",
		location: "Barcelona",
	},
	{
		price: "$325",
		img: "https://cdn.easyfrontend.com/pictures/search1_8.png",
		name: "Brussels",
		location: "Belgium",
	},
];

const PlaceItem = ({ data }) => {
	return (
		<Card className="ezy__travel3-item border-0 rounded-0 mt-4">
			<div className="position-relative">
				<img src={data.img} alt="" className="img-fluid w-100" />
				<div className="ezy__travel3-price px-3 py-2">
					<h6 className="mb-0 fw-normal">From {data.price}</h6>
				</div>
			</div>
			<Card.Body className="p-4">
				<h5 className="mb-1">{data.name}</h5>
				<p className="mb-0">{data.location}</p>
			</Card.Body>
		</Card>
	);
};
PlaceItem.propTypes = {
	data: PropTypes.object.isRequired,
};

const Travel3 = () => {
	return (
		<section className="ezy__travel3">
			<Container>
				<Row className="justify-content-center mb-4 mb-md-5">
					<Col lg={6} className="text-center">
						<h2 className="ezy__travel3-heading mb-4">Popular Destination</h2>
						<p className="ezy__travel3-sub-heading mb-0">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
							posuere ipsum molestie sem volutpat, non imperdiet leo porttitor.
							Nullam tortor nibh, dictum vitae porttitor eu, pharetra nec
							tellus.
						</p>
					</Col>
				</Row>

				<Row>
					{placeData.map((data, i) => (
						<Col md={6} lg={3} key={i}>
							<PlaceItem data={data} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Travel3;

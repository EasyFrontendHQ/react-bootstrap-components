import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./Schedule2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Nav, Row }",
    "prop-types": "PropTypes"
}
*/

const schedules = [
	{
		img: "https://cdn.easyfrontend.com/pictures/team/easy-frontend-team-1.png",
		title: "BRANDING THE DIGITAL AGE",
		time: "12.30 - 1.30 PM",
		description:
			"Pitch crowdsource freemium handshake virality user experience termsheet vesting.",
		list: { speaker: "KATHY HUDSON", place: "Hall 1" },
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/team/easy-frontend-team-2.png",
		title: "BRANDING THE DIGITAL AGE",
		time: "12.30 - 1.30 PM",
		description:
			"Pitch crowdsource freemium handshake virality user experience termsheet vesting.",
		list: { speaker: "KATHY HUDSON", place: "Hall 1" },
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/team/easy-frontend-team-4.png",
		title: "BRANDING THE DIGITAL AGE",
		time: "12.30 - 1.30 PM",
		description:
			"Pitch crowdsource freemium handshake virality user experience termsheet vesting.",
		list: { speaker: "KATHY HUDSON", place: "Hall 1" },
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/team/easy-frontend-team-6.png",
		title: "BRANDING THE DIGITAL AGE",
		time: "12.30 - 1.30 PM",
		description:
			"Pitch crowdsource freemium handshake virality user experience termsheet vesting.",
		list: { speaker: "KATHY HUDSON", place: "Hall 1" },
	},
];

const ScheduleItem = ({ item }) => {
	return (
		<div className="mt-5">
			<div className="ezy__schedule2-image">
				<img className="img-fluid" src={item.img} alt="Team Member" />
			</div>
			<div className="position-relative">
				<h3 className="ezy__schedule2-title mb-0">{item.title}</h3>
				<span className="ezy__schedule2-schedule">{item.time}</span>
				<p className="ezy__schedule2-description mt-3">{item.description}</p>
				<Nav className="ezy__schedule2-nav">
					<li className="me-3">
						Speaker:{" "}
						<a href="src/components/bootstrap/categories/schedule/Schedule2#!">
							{item.list.speaker}
						</a>
					</li>
					<li>
						Place:{" "}
						<a href="src/components/bootstrap/categories/schedule/Schedule2#!">
							{" "}
							{item.list.place}
						</a>
					</li>
				</Nav>
			</div>
		</div>
	);
};

ScheduleItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Schedule2 = () => {
	const divider = Math.ceil(schedules.length / 2);

	return (
		<section className="ezy__schedule2" id="ezy__schedule2">
			<Container>
				<Row>
					<Col xs={12} className="text-center text-sm-start">
						<h2 className="ezy__schedule2-heading mb-0">Schedule</h2>
						<p className="ezy__schedule2-sub-heading ms-sm-4">
							We design &amp; develop quality products.
						</p>
					</Col>
				</Row>
				<Row className="mt-5">
					<Col xs={12} md={6}>
						<h3>Day 1</h3>
						<p>Sunday, October 16th</p>

						<div>
							{schedules.slice(0, divider).map((item, i) => (
								<ScheduleItem item={item} key={i} />
							))}
						</div>
					</Col>

					<Col xs={12} md={6}>
						<h3>Day 2</h3>
						<p className="mb-0">Monday, October 17th</p>

						<div>
							{schedules.slice(divider).map((item, i) => (
								<ScheduleItem item={item} key={i} />
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Schedule2;

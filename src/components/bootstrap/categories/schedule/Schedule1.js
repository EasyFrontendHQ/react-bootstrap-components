import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./Schedule1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
    "prop-types": "PropTypes"
}
*/

const schedules = [
	{
		time: "12.30 - 1.30 PM",
		heading: "EVERYONE ELSE IS SO CLEVER",
		text: "Johnny Ferguson",
	},
	{
		time: "12.30 - 1.30 PM",
		heading: "EVERYONE ELSE IS SO CLEVER",
		text: "Johnny Ferguson",
	},
	{
		time: "12.30 - 1.30 PM",
		heading: "EVERYONE ELSE IS SO CLEVER",
		text: "Johnny Ferguson",
	},
	{
		time: "12.30 - 1.30 PM",
		heading: "EVERYONE ELSE IS SO CLEVER",
		text: "Johnny Ferguson",
	},
	{
		time: "12.30 - 1.30 PM",
		heading: "NO ONE ELSE IS SO CLEVER",
		text: "Johnny Ferguson",
	},
	{
		time: "12.30 - 1.30 PM",
		heading: "EVERYONE ELSE IS SO CLEVER",
		text: "Johnny Ferguson",
	},
	{
		time: "12.30 - 1.30 PM",
		heading: "EVERYONE ELSE IS SO CLEVER",
		text: "Johnny Ferguson",
	},
	{
		time: "12.30 - 1.30 PM",
		heading: "EVERYONE ELSE IS SO CLEVER",
		text: "Johnny Ferguson",
	},
];

const ScheduleItem = ({ item }) => {
	return (
		<div>
			<p className="ezy__schedule1-time mb-0">{item.time}</p>
			<p className="ezy__schedule1-heading mb-0">{item.heading}</p>
			<p className="ezy__schedule1-sub-heading">{item.text}</p>
		</div>
	);
};

ScheduleItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Schedule1 = () => {
	const divider = Math.ceil(schedules.length / 2);

	return (
		<section className="ezy__schedule1">
			<Container>
				<div className="ezy__schedule1-heading-line">
					<div className="ezy__schedule1-start">Topics</div>
					<hr className="ezy__schedule1-long-line d-inline-block m-0" />
				</div>

				<Row className="position-relative">
					<Col
						md={4}
						className="ezy__schedule1-wrapper"
						style={{
							backgroundImage:
								"url(https://cdn.easyfrontend.com/pictures/schedule/schedule1.jpg)",
						}}
					/>
					<Col md={8} />
					<Col xs={12}>
						<Row className="ezy__schedule1-inner-wrapper">
							<Col xs={12} lg={4}>
								<div className="mb-5 text-center text-md-start text-lg-center">
									<h2 className="ezy__schedule1-headline position-relative">
										Schedule
									</h2>
								</div>
							</Col>

							<Col xs={12} lg={8} className="text-center text-md-start">
								<Row className="ps-lg-5">
									<Col xs={12} sm={6}>
										<div>
											<p className="ezy__schedule1-schedule-heading">
												<span className="ezy__schedule1-day">Day 1</span>
												<span className="ezy__schedule1-sub-heading ms-1">
													Thursday, October 13th
												</span>
											</p>

											<div>
												{schedules.slice(0, divider).map((item, i) => (
													<ScheduleItem item={item} key={i} />
												))}
											</div>
										</div>
									</Col>
									<Col xs={12} sm={6}>
										<div>
											<p className="ezy__schedule1-schedule-heading">
												<span className="ezy__schedule1-day">Day 2</span>
												<span className="ezy__schedule1-sub-heading ms-1">
													Thursday, October 13th
												</span>
											</p>

											<div>
												{schedules.slice(divider).map((item, i) => (
													<ScheduleItem item={item} key={i} />
												))}
											</div>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Schedule1;

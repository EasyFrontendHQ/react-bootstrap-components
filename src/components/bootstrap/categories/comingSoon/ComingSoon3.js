import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./ComingSoon3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }"
}
*/

const Shape1 = () => (
	<svg
		className="position-absolute start-0 top-0"
		width="370"
		height="534"
		viewBox="0 0 370 534"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="0.5" cy="164.5" r="369.5" fill="currentColor" />
	</svg>
);

const Shape2 = () => (
	<svg
		className="position-absolute end-0 bottom-0"
		width="344"
		height="470"
		viewBox="0 0 344 470"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="369.5" cy="369.5" r="369.5" fill="currentColor" />
	</svg>
);

const ComingSoon3 = () => {
	return (
		<section className="ezy__comingsoon3">
			<Shape1 />
			<Shape2 />

			<Container>
				<Row className="justify-content-between">
					<Col
						xs={12}
						lg={5}
						className="d-flex flex-column justify-content-center text-center text-lg-start"
					>
						<h2 className="ezy__comingsoon3-heading mb-4 mt-0 mt-md-5">
							Good News Coming Soon.
						</h2>
						<p className="ezy__comingsoon3-sub-heading mb-5 mb-lg-0">
							An activity that requires a person's mental or physical effort is
							work.If a person is trained for a certain type of job, they may
							have a profession. Typically, a job would be a subset of someone's
							career.
						</p>
					</Col>
					<Col xs={12} lg={5} className="text-center">
						<img
							src="https://cdn.easyfrontend.com/pictures/comingsoon/three.png"
							alt=""
							className="img-fluid"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ComingSoon3;

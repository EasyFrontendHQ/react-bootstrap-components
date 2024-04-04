import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./ComingSoon5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }"
}
*/

const Shape1 = () => (
	<svg
		className="position-absolute top-0 start-0"
		width="270"
		height="389"
		viewBox="0 0 270 389"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle
			cx="-55"
			cy="81"
			r="307"
			stroke="#C8C6FC"
			strokeOpacity="0.52"
			strokeWidth="2"
		/>
		<circle cx="248" cy="129" r="22" fill="#5243C2" />
		<circle cx="69.5" cy="358.5" r="16.5" fill="#FFC107" />
	</svg>
);

const Shape2 = () => (
	<svg
		className="position-absolute top-0 end-0"
		width="682"
		height="876"
		viewBox="0 0 682 876"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<ellipse
			cx="467.5"
			cy="252.356"
			rx="467.5"
			ry="470.963"
			fill="currentColor"
		/>
		<circle
			cx="560.013"
			cy="394.545"
			r="339.591"
			transform="rotate(-136.702 560.013 394.545)"
			stroke="white"
			strokeOpacity="0.9"
			strokeWidth="2"
		/>
		<circle
			cx="352.559"
			cy="126.13"
			r="24.3279"
			transform="rotate(-136.702 352.559 126.13)"
			fill="#5243C2"
		/>
		<circle
			cx="670.261"
			cy="76.7956"
			r="18.2459"
			transform="rotate(-136.702 670.261 76.7956)"
			fill="#FFC107"
		/>
	</svg>
);

const ComingSoon5 = () => {
	return (
		<section className="ezy__comingsoon5">
			<Shape1 />
			<Shape2 />

			<Container>
				<Row className="justify-content-between">
					<Col
						xs={12}
						lg={6}
						className="d-flex flex-column justify-content-center text-center text-lg-start"
					>
						<h2 className="ezy__comingsoon5-heading mb-4">
							New Book Coming Soon!
						</h2>
						<p className="ezy__comingsoon5-sub-heading mb-5 mb-lg-0">
							An activity that requires a person's mental or physical effort is
							work.If a person is trained for a certain type of job, they may
							have a profession. Typically, a job would be a subset of someone's
							career.
						</p>
					</Col>
					<Col xs={12} lg={5} className="text-center">
						<img
							src="https://cdn.easyfrontend.com/pictures/comingsoon/five.png"
							alt=""
							className="img-fluid"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ComingSoon5;

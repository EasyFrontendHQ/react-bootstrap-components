import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./HttpCodes1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }"
}
*/

const TopLeftSvg = () => {
	return (
		<svg
			className="position-absolute top-0 start-0"
			width="280"
			height="381"
			viewBox="0 0 280 381"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="-45"
				cy="73"
				r="307"
				stroke="#C8C6FC"
				strokeOpacity="0.52"
				strokeWidth="2"
			/>
			<circle cx="258" cy="121" r="22" fill="#5243C2" />
			<circle cx="79.5" cy="350.5" r="16.5" fill="#FFC107" />
		</svg>
	);
};

const TopRightSvg = () => {
	return (
		<svg
			className="position-absolute top-0 end-0 d-none d-sm-block"
			width="852"
			height="656"
			viewBox="0 0 852 656"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M292.329 224.493C207.524 138.952 22.4868 147.027 0 -2H854C854 134.174 852.001 436.049 852.001 560.411C594.652 699.364 368.784 560.411 368.784 460.713C368.784 348.161 368.784 301.612 292.329 224.493Z"
				fill="currentColor"
			/>
			<circle
				cx="921.143"
				cy="160.345"
				r="339.591"
				transform="rotate(132.903 921.143 160.345)"
				stroke="white"
				strokeOpacity="0.9"
				strokeWidth="2"
			/>
			<circle
				cx="654.164"
				cy="369.644"
				r="24.3279"
				transform="rotate(132.903 654.164 369.644)"
				fill="#5243C2"
			/>
			<circle
				cx="602.642"
				cy="52.2899"
				r="18.2459"
				transform="rotate(132.903 602.642 52.2899)"
				fill="#FFC107"
			/>
		</svg>
	);
};

const HttpCodes1 = () => {
	return (
		<section className="ezy__httpcodes1">
			{/* top left svg   */}
			<TopLeftSvg />
			{/* top right svg   */}
			<TopRightSvg />
			{/* content  */}
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} className="text-center">
						<h2 className="ezy__httpcodes1-heading mb-4">404</h2>
						<p className="ezy__httpcodes1-sub-heading">Page Not Available!</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HttpCodes1;

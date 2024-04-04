import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./HttpCodes4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }"
}
*/

const Shape = () => {
	return (
		<svg
			className="position-absolute top-0 end-0 d-none d-sm-block"
			width="544"
			height="495"
			viewBox="0 0 544 495"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="336.426"
				y="-167.539"
				width="175"
				height="526"
				rx="87.5"
				transform="rotate(39.7614 336.426 -167.539)"
				fill="#FFC107"
			/>
			<rect
				x="523.426"
				y="-89.5391"
				width="175"
				height="526"
				rx="87.5"
				transform="rotate(39.7614 523.426 -89.5391)"
				fill="#2F80ED"
			/>
			<rect
				x="721.426"
				y="-21.5391"
				width="175"
				height="526"
				rx="87.5"
				transform="rotate(39.7614 721.426 -21.5391)"
				fill="#FF774D"
			/>
		</svg>
	);
};

const HttpCodes4 = () => {
	return (
		<section className="ezy__httpcodes4">
			{/* svg */}
			<Shape />

			<Container>
				<Row className="justify-content-between align-items-center">
					<Col
						xs={12}
						lg={5}
						className="text-center text-lg-start mb-5 mb-lg-0"
					>
						<h2 className="ezy__httpcodes4-heading mb-4">404</h2>
						<p className="ezy__httpcodes4-sub-heading">
							Something Missing ,Page not found!
						</p>
						<Button variant="primary" type="button" className="border-0 mt-4">
							Try Again
						</Button>
					</Col>
					<Col xs={12} lg={7}>
						<img
							src="https://cdn.easyfrontend.com/pictures/httpcodes/four.png"
							alt=""
							className="img-fluid"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HttpCodes4;

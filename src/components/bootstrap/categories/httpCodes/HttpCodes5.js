import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

import "./HttpCodes5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faFrown }"
}
*/
const ShapeOne = () => {
	return (
		<svg
			className="position-absolute top-0 start-0 d-none d-lg-block"
			width="414"
			height="460"
			viewBox="0 0 414 460"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<ellipse
				cx="79.5"
				cy="131.487"
				rx="334.5"
				ry="328.306"
				fill="currentColor"
			/>
		</svg>
	);
};

const ShapeTwo = () => {
	return (
		<svg
			className="position-absolute bottom-0 end-0 d-none d-lg-block"
			width="355"
			height="363"
			viewBox="0 0 355 363"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<ellipse
				cx="334.5"
				cy="328.599"
				rx="334.5"
				ry="328.306"
				fill="currentColor"
			/>
		</svg>
	);
};

const ShapeThree = () => {
	return (
		<img
			src="https://cdn.easyfrontend.com/pictures/httpcodes/five-shape-three.svg"
			alt=""
			className="position-absolute bottom-0 start-0"
		/>
	);
};

const ShapeFour = () => {
	return (
		<img
			src="https://cdn.easyfrontend.com/pictures/httpcodes/five-shape-four.svg"
			alt=""
			className="ezy__httpcodes5-shape-four d-none d-lg-block"
		/>
	);
};

const ShapeFive = () => {
	return (
		<img
			src="https://cdn.easyfrontend.com/pictures/httpcodes/five-shape-five.svg"
			alt=""
			className="ezy__httpcodes5-shape-five d-none d-lg-block"
		/>
	);
};

const ShapeSix = () => {
	return (
		<svg
			className="ezy__httpcodes5-shape-six"
			width="189"
			height="190"
			viewBox="0 0 189 190"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M32.423 0.460938L189 157.038C145.769 200.269 75.6536 200.269 32.423 157.038C-10.8077 113.807 -10.8077 43.7139 32.423 0.460938Z"
				fill="#6B9BA5"
				fillOpacity="0.25"
			/>
		</svg>
	);
};

const HttpCodes5 = () => {
	return (
		<section className="ezy__httpcodes5">
			{/* shape one */}
			<ShapeOne />

			{/* shape two */}
			<ShapeTwo />

			{/* shape three  */}
			<ShapeThree />

			{/* shape four  */}
			<ShapeFour />

			{/* shape five  */}
			<ShapeFive />

			{/* shape six */}
			<ShapeSix />

			{/* container  */}
			<Container>
				<Row className="justify-content-center align-items-center">
					<Col xs={12} className="text-center">
						<div className="ezy__httpcodes5-emoji">
							<FontAwesomeIcon icon={faFrown} />
						</div>
						<h2 className="ezy__httpcodes5-heading mb-4">404</h2>
						<p className="ezy__httpcodes5-sub-heading">Page not Available!</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HttpCodes5;

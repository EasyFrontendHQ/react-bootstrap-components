import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./HttpCodes3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }"
}
*/

const HttpCodes3 = () => {
	return (
		<section className="ezy__httpcodes3">
			<img
				className="position-absolute bottom-0 end-0"
				src="https://cdn.easyfrontend.com/pictures/httpcodes/three.svg"
				alt=""
			/>

			<Container>
				<Row>
					<Col xs={12} className="text-center text-lg-start">
						<h2 className="ezy__httpcodes3-heading mb-4">404</h2>
						<p className="ezy__httpcodes3-sub-heading">Page Not Available!</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HttpCodes3;

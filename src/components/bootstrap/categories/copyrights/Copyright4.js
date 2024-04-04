import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Copyright4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }"
}
*/

const Copyright4 = () => {
	return (
		<section className="ezy__copyright4 text-center text-lg-start pt-5 pb-5">
			<Container>
				<Row className="text-center">
					<Col xs={12}>
						<p className="mb-0">Copyright all rights reserved</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Copyright4;

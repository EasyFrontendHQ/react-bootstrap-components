import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./CallToAction2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }"
}
*/

const CallToAction2 = () => {
	return (
		<section className="ezy__cta2 position-relative">
			<div className="ezy__cta2-shape position-absolute start-0 top-0" />
			<div className="ezy__cta2-shape position-absolute end-0 bottom-0" />

			<Container className="position-relative">
				<Row className="justify-content-center text-center text-white">
					<Col lg={5}>
						<h2 className="ezy__cta2-heading mb-4">Did you know?</h2>
						<p className="ezy__cta2-sub-heading mb-5">
							It’s easier to reach your savings goals when you have the right
							savings account.
						</p>
						<Button variant="light" type="submit" className="ezy__cta2-btn">
							Subscribe
						</Button>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default CallToAction2;

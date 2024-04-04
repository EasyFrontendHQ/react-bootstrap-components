import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./CallToAction1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }"
}
*/

const TopShape = () => (
	<svg
		className="ezy__cta1-shape position-absolute top-0 start-0"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1920 90"
		preserveAspectRatio="none"
	>
		<path
			d="M959 90c320.067 0 640.4-38.333 961-90H0c319.267 76.667 638.933 90 959 90z"
			fill="currentColor"
			fillRule="evenodd"
		/>
	</svg>
);

const BottomShape = () => (
	<svg
		className="ezy__cta1-shape position-absolute bottom-0 start-0"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1920 90"
		preserveAspectRatio="none"
	>
		<path
			d="M959 0c320.067 0 640.4 38.333 961 90H0C319.267 38.333 638.933 0 959 0z"
			fill="currentColor"
			fillRule="evenodd"
		/>
	</svg>
);

const CallToAction1 = () => {
	return (
		<section className="ezy__cta1 position-relative">
			<TopShape />
			<BottomShape />

			<Container className="position-relative">
				<Row className="justify-content-center text-white">
					<Col lg={6}>
						<div className="ezy__cta1-form-card p-4">
							<h2 className="ezy__cta1-heading mb-4">Did you know?</h2>
							<p className="ezy__cta1-sub-heading mb-4">
								It’s easier to reach your savings goals when you have the right
								savings account.
							</p>
							<Button variant="primary" type="submit" className="ezy__cta1-btn">
								Subscribe
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default CallToAction1;

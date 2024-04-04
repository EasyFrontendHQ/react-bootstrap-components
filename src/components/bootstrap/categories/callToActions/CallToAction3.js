import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./CallToAction3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Form, InputGroup, Row }"
}
*/

const CallToAction3 = () => {
	return (
		<section className="ezy__cta3">
			<Container>
				<Row className="align-items-center justify-content-between text-white">
					<Col lg={5}>
						<h2 className="ezy__cta3-heading mb-4">Did you know?</h2>
						<p className="ezy__cta3-sub-heading mb-0">
							It’s easier to reach your savings goals when you have the right
							savings account.
						</p>
					</Col>
					<Col md={8} lg={5} className="mt-5">
						<Form>
							<Form.Group className="mb-0">
								<InputGroup className="p-1 bg-white rounded">
									<Form.Control type="email" placeholder="Enter Email" />
									<Button variant="dark" className="ezy__cta3-btn rounded-3">
										Subscribe
									</Button>
								</InputGroup>
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default CallToAction3;

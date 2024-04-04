import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./CallToAction4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Form, InputGroup, Row }"
}
*/

const CallToAction4 = () => {
	return (
		<section className="ezy__cta4">
			<Container>
				<Row className="justify-content-center text-center text-white">
					<Col lg={7}>
						<h2 className="ezy__cta4-heading mb-4">
							Join with us for more information
						</h2>

						<Row className="justify-content-center">
							<Col sm={8}>
								<p className="ezy__cta4-sub-heading mb-5">
									It’s easier to reach your savings goals when you have the
									right savings account.
								</p>
							</Col>
							<Col sm={8}>
								<Form>
									<Form.Group className="mb-0">
										<InputGroup className="p-1 bg-white rounded">
											<Form.Control type="email" placeholder="Enter Email" />
											<Button
												variant="danger"
												className="ezy__cta4-btn rounded"
											>
												Subscribe
											</Button>
										</InputGroup>
									</Form.Group>
								</Form>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default CallToAction4;

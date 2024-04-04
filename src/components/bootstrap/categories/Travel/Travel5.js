import React from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";

import "./Travel5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Form, Row, Card }",
}
*/

const OrderForm = () => {
	return (
		<Form>
			<Card className="ezy__travel5-card mt-5 p-4 px-lg-5 border-0 rounded-3">
				<Row>
					<Col md={6} lg={4}>
						<Form.Group className="mb-4 mb-lg-0">
							<Form.Label className="mb-2" htmlFor="email">
								Email address
							</Form.Label>
							<Form.Control
								type="text"
								className="ps-4"
								id="email"
								placeholder="Enter your Email Address"
							/>
						</Form.Group>
					</Col>
					<Col md={6} lg={4}>
						<Form.Group className="mb-4 mb-lg-0">
							<Form.Label className="mb-2" htmlFor="number">
								Phone Number
							</Form.Label>
							<Form.Control
								type="number"
								className="ps-4"
								id="number"
								placeholder="Enter your Phone Number"
							/>
						</Form.Group>
					</Col>
					<Col md={6} lg={4}>
						<div className="h-100 d-flex flex-column justify-content-end">
							<Form.Check>
								<Form.Check.Input
									type="checkbox"
									name="ezy__travel5-check2"
									id="ezy__travel5-check2"
									value="option1"
									checked
								/>
								<Form.Check.Label htmlFor="ezy__travel5-check2">
									I Accept the{" "}
									<a href="src/components/bootstrap/categories/Travel/Travel5#!">
										Rules
									</a>{" "}
									of this Trip
								</Form.Check.Label>
							</Form.Check>
							<Form.Check>
								<Form.Check.Input
									type="checkbox"
									name="ezy__travel5-check2"
									id="ezy__travel5-check2"
									value="option2"
								/>
								<Form.Check.Label htmlFor="ezy__travel5-check2">
									Send Me the Best Deals by Email
								</Form.Check.Label>
							</Form.Check>
						</div>
					</Col>
				</Row>
			</Card>
			<Row className="mt-4">
				<Col xs={12}>
					<div className="d-flex justify-content-between align-items-center">
						<div>
							<Button
								variant=""
								type="submit"
								className="ezy__travel5-btn-submit"
							>
								Buy Now
							</Button>
						</div>
						<div>
							<a
								href="src/components/bootstrap/categories/Travel/Travel5#!"
								className="ezy__travel5-review pe-lg-4"
							>
								Review And Book Your Trip
							</a>
						</div>
					</div>
				</Col>
			</Row>
		</Form>
	);
};

const Travel5 = () => {
	return (
		<section className="ezy__travel5">
			<Container>
				<Row>
					<Col xs={12}>
						<div className="ezy__travel5-header p-4 rounded-3 text-center">
							<h2 className="ezy__travel5-heading mb-0">
								Where should We Send Your Confirmation?
							</h2>
						</div>
					</Col>
				</Row>

				<OrderForm />
			</Container>
		</section>
	);
};

export default Travel5;

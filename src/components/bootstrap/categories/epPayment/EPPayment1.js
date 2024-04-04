import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./EPPayment1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }",

*/

const EPPayment1 = () => {
	return (
		<section className="ezy__eppayment1">
			<Container>
				<div className="ezy__eppayment1-card p-4 px-lg-5">
					<Row>
						<Col xs={12}>
							<h5 className="fw-bold mb-2">Payment Failed</h5>
							<p className="mb-4">Not enough balance: Error code: CSE_315489</p>
							<h6 className="mb-2">Suggestion</h6>
							<p className="mb-4">
								Use another payment method or add money to your current account
							</p>
							<div className="d-flex align-items-center">
								<Button variant="" className="ezy__eppayment1-fill-btn">
									Try Again
								</Button>
								<Button variant="" className="ezy__eppayment1-outline-btn ms-3">
									Back to Homepage
								</Button>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
	);
};

export default EPPayment1;

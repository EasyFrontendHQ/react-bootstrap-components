import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

import "./Cookies5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faArrowCircleRight }"
}
*/

const Cookies5 = () => {
	return (
		<section className="ezy__cookies5">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={8} lg={7} xl={6}>
						<Card className="ezy__cookies5-card">
							<Card.Body className="p-4 p-xl-5">
								<Row>
									<Col xs={12}>
										<div>
											<h4 className="ezy__cookies5-heading">Cookie Policy</h4>
											<p className="ezy__cookies5-sub-heading mb-3">
												We use cookies to personalise content, to provide social
												media features and to analyse our traffic. We also share
												information about your use of our site with our social
												media, advertising and analytics partners.
											</p>
											<a
												href="src/components/bootstrap/categories/cookies/Cookies5#!"
												className="ezy__cookies5-read-more"
											>
												Read our cookie policy{" "}
												<FontAwesomeIcon
													icon={faArrowCircleRight}
													className="ms-2"
												/>
											</a>
										</div>
									</Col>
									<Col xs={12} className="mt-4">
										<Button variant="primary" className="w-100">
											Allow
										</Button>
										<Button
											variant=""
											className="ezy__cookies5-dark-btn mt-3 w-100"
										>
											Decline
										</Button>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Cookies5;

import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

import "./Cookies4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faArrowCircleRight }"
}
*/

const Cookies4 = () => {
	return (
		<section className="ezy__cookies4">
			<Container>
				<Row>
					<Col xs={12} md={7} lg={6} xl={4}>
						<Card className="ezy__cookies4-card">
							<Card.Body className="p-4 p-xl-5">
								<Row>
									<Col xs={12}>
										<div>
											<h4 className="ezy__cookies4-heading">Cookie Policy</h4>
											<p className="ezy__cookies4-sub-heading mb-3">
												We use third-party cookies in order to personalize your
												experience.
											</p>
											<a
												href="src/components/bootstrap/categories/cookies/Cookies4#!"
												className="ezy__cookies4-read-more"
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
											className="ezy__cookies4-dark-btn mt-3 w-100"
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

export default Cookies4;

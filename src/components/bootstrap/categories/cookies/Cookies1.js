import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

import "./Cookies1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faArrowCircleRight }"
}
*/

const Cookies1 = () => {
	return (
		<section className="ezy__cookies1">
			<Container>
				<Card className="ezy__cookies1-card">
					<Card.Body className="p-4 p-lg-5">
						<Row className="justify-content-between">
							<Col xs={12} lg={5}>
								<h4 className="ezy__cookies1-heading mb-3">
									We use third-party cookies in order to personalize your
									experience.
								</h4>
								<a
									href="src/components/bootstrap/categories/cookies/Cookies1#!"
									className="ezy__cookies1-read-more"
								>
									Read our cookie policy{" "}
									<FontAwesomeIcon icon={faArrowCircleRight} className="ms-2" />
								</a>
							</Col>
							<Col
								xs={"auto"}
								className="d-flex align-items-center mt-4 mt-lg-0"
							>
								<Button variant="primary" className="px-4">
									Allow
								</Button>
								<Button variant="" className="ezy__cookies1-dark-btn ms-2 px-4">
									Decline
								</Button>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</section>
	);
};

export default Cookies1;

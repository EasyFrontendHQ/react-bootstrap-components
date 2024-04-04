import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "./EPOrder4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons":"{ faCheck }"
}
*/

const ProgressBar = () => {
	return (
		<Col xs={12}>
			<div className="ezy__eporder4-progress d-flex justify-content-between position-relative mb-5">
				<span className="ezy__eporder4-cart active">1</span>
				<span className="ezy__eporder4-bill active">2</span>
				<span className="ezy__eporder4-completed active">3</span>
			</div>
		</Col>
	);
};

const Eporder4 = () => {
	return (
		<section className="ezy__eporder4">
			<Container className="py-5">
				<Row className="justify-content-center">
					{/* progress bar */}
					<ProgressBar />

					<Card className="border-0 py-5 mt-4">
						<Card.Body className="text-center py-md-5">
							<div className="ezy__eporder4-check">
								<FontAwesomeIcon icon={faCheck} />
							</div>
							<h1 className="ezy__eporder4-heading my-3">
								Your Order is Successful
							</h1>
							<p className="ezy__eporder4-sub-heading">
								In purus donec ac in nulla lobortis. Lectus massa erat odio
								turpis nulla sed.
							</p>
							<Button variant="" className="ezy__eporder4-btn mt-4">
								Back To Courses
							</Button>
						</Card.Body>
					</Card>
				</Row>
			</Container>
		</section>
	);
};

export default Eporder4;

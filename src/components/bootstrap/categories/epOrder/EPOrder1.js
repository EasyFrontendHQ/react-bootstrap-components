import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./EPOrder1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons":"{ faCheck, faLock, faTimes }"
}
*/

const Eporder1 = () => {
	return (
		<section className="ezy__eporder1">
			<Container>
				<Row className="justify-content-center">
					<Card className="border-0 px-0">
						<Card.Header className="border-0 position-relative p-4">
							<div className="ezy__eporder1-close">
								<FontAwesomeIcon icon={faTimes} />
							</div>
							<h5>Course Cloud Certificate</h5>
							<h6>TOTAL BILLED: $54</h6>
						</Card.Header>
						<Card.Body className="text-center py-5 px-3">
							<div className="ezy__eporder1-check">
								<FontAwesomeIcon icon={faCheck} />
							</div>
							<h1 className="ezy__eporder1-heading my-3">
								Your Certificate Order is Successful
							</h1>
							<p className="ezy__eporder1-sub-heading px-5">
								In purus donec ac in nulla lobortis. Lectus massa erat odio
								turpis nulla sed.
							</p>
							<Button variant="" className="ezy__eporder1-btn my-2">
								Back to Courses
							</Button>
						</Card.Body>
						<Card.Footer className="text-center border-0 p-3">
							<div className="d-flex align-items-center justify-content-center">
								<FontAwesomeIcon icon={faLock} className="me-2" />
								<b>Secured with SSL</b>
							</div>
							<b>Have a question? 0123 4567 891</b>
						</Card.Footer>
					</Card>
				</Row>
			</Container>
		</section>
	);
};

export default Eporder1;

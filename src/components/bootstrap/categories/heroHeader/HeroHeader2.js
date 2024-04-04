import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./HeroHeader2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faArrowRight }",
}
*/

const HeroHeader2 = () => {
	return (
		<section className="ezy__header2 dark">
			<Container className="position-relative">
				<Row className="align-items-center justify-content-center">
					<Col xs={12} className="text-center">
						<h2 className="ezy__header2-heading mb-4">
							Nice Workplace For storming Meetings
						</h2>
						<Row className="justify-content-center">
							<Col xs={12} lg={9}>
								<p className="ezy__header3-sub-heading px-5">
									Egestas sed sed risus pretium quam vulputate dignissim
									suspendisse in. Pharetra sit amet aliquam id diam maecenas
									ultricies mi.
								</p>
							</Col>
						</Row>
						<Button
							variant="light"
							className="ezy__header2-btn fs-5 mt-4 mt-md-5"
						>
							Try Now <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
						</Button>
						<p className="ezy__header2-registration-note mb-0 mt-4">
							No registration required
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HeroHeader2;

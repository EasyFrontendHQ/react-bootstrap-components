import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./HeroHeader3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }",
}
*/

const HeroHeader3 = () => {
	return (
		<section className="ezy__header3 dark">
			<Container className="position-relative">
				<Row className="align-items-center justify-content-center">
					<Col lg={12} className="text-center">
						<h2 className="ezy__header3-heading mb-4">
							Modern Flat With Touch Of Creativity
						</h2>
						<Row className="justify-content-center">
							<Col xs={12} lg={9}>
								<p className="ezy__header3-sub-heading px-5">
									Being creative within the constraints of client briefs,
									budgets and timelines is the norm for most agencies. However,
									investing in research and …
								</p>
							</Col>
						</Row>
						<div className="mt-5">
							<Button variant="" className="ezy__header3-btn m-1">
								<img
									src="https://cdn.easyfrontend.com/pictures/hero/play-app-android.png"
									alt=""
								/>
							</Button>
							<Button variant="" className="ezy__header3-btn m-1">
								<img
									src="https://cdn.easyfrontend.com/pictures/hero/play-app-apple.png"
									alt=""
								/>
							</Button>
						</div>
						<p className="ezy__header3-registration-note mb-0 mt-4">
							* No registration required
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HeroHeader3;

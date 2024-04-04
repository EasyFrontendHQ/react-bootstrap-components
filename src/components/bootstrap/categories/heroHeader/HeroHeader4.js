import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./HeroHeader4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }"
}
*/

const HeroHeader4 = () => {
	return (
		<section
			className="ezy__header4 dark"
			style={{
				backgroundImage:
					"url(https://cdn.easyfrontend.com/pictures/contact/contact13.jpg)",
			}}
		>
			<Container className="position-relative">
				<Row className="align-items-center justify-content-center">
					<Col lg={12} className="text-center">
						<h2 className="ezy__header4-heading mb-4">
							How I Escape My Mind By Listening
						</h2>
						<Row className="justify-content-center">
							<Col xs={12} lg={9}>
								<p className="ezy__header4-sub-heading px-5">
									Discover thousands of easy to customize themes, templates &
									CMS products, made by world-class developers...
								</p>
							</Col>
						</Row>
						<div className="mt-5">
							<Button variant="" className="ezy__header4-btn m-1">
								<img
									src="https://cdn.easyfrontend.com/pictures/hero/play-app-android.png"
									alt=""
								/>
							</Button>
							<Button variant="" className="ezy__header4-btn m-1">
								<img
									src="https://cdn.easyfrontend.com/pictures/hero/play-app-apple.png"
									alt=""
								/>
							</Button>
						</div>
						<p className="ezy__header4-registration-note mb-0 mt-4">
							* No registration required
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HeroHeader4;

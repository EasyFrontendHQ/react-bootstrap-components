import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./CallToAction5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }"
}
*/

const CallToAction5 = () => {
	return (
		<section className="ezy__cta5">
			<Container>
				<Row className="justify-content-center text-center">
					<Col lg={7}>
						<h2 className="ezy__cta5-heading mb-4">
							Join with us for more information
						</h2>

						<Row className="justify-content-center">
							<Col sm={8}>
								<p className="ezy__cta5-sub-heading mb-5">
									It’s easier to reach your savings goals when you have the
									right savings account.
								</p>
							</Col>
						</Row>

						<Button variant="primary" type="submit" className="ezy__cta5-btn">
							Quote Now
						</Button>
						<div>
							<img
								src="https://cdn.easyfrontend.com/pictures/cta/cta_5.png"
								alt=""
								className="img-fluid"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default CallToAction5;

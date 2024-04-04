import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./ComingSoon1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }"
}
*/

const ComingSoon1 = () => {
	return (
		<section className="ezy__comingsoon1">
			<Container>
				<Row className="justify-content-center">
					<Col
						xs={12}
						lg={5}
						className="d-flex flex-column justify-content-center text-center text-lg-start"
					>
						<h2 className="ezy__comingsoon1-heading mb-4">Coming Soon</h2>
						<p className="ezy__comingsoon1-sub-heading">
							An activity that requires a person's mental or physical effort is
							work.If a person is trained for a certain type of job, they may
							have a profession. Typically, a job would be a subset of someone's
							career.
						</p>
					</Col>
					<Col xs={12} lg={7}>
						<img
							src="https://cdn.easyfrontend.com/pictures/comingsoon/one.png"
							alt=""
							className="img-fluid"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ComingSoon1;

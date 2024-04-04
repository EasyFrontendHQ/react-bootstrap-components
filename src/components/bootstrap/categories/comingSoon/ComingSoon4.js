import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

import "./ComingSoon4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Form, InputGroup, Row }"
}
*/

const SubscribeForm = () => (
	<Form
		id="ezy__comingsoon4-subscription-form"
		method="post"
		className="ezy__comingsoon4-subscription-form mt-4"
	>
		<InputGroup className="ezy__comingsoon4-input-group rounded">
			<Form.Control
				name="email"
				id="ezy__comingsoon4-subscription-email"
				className="border-0"
				type="email"
				placeholder="Enter email"
				required
			/>
			<Button variant="primary" className="ezy__comingsoon4-btn px-5">
				Send
			</Button>
		</InputGroup>
	</Form>
);

const ComingSoon4 = () => {
	return (
		<section
			className="ezy__comingsoon4"
			style={{
				backgroundImage:
					"url(https://cdn.easyfrontend.com/pictures/comingsoon/four.png)",
			}}
		>
			<Container fluid={true}>
				<Row className="justify-content-end">
					<Col xs={12} lg={6} className="ezy__comingsoon4-card">
						<h2 className="ezy__comingsoon4-heading m-0">Coming Soon</h2>
						<p className="ezy__comingsoon4-sub-heading my-4">
							An activity that requires a person's mental or physical effort is
							work.If a person is trained for a certain type of job, they may
							have a profession. Typically, a job would be a subset of someone's
							career.
						</p>
						<Col xs={12} md={8}>
							<SubscribeForm />
						</Col>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ComingSoon4;

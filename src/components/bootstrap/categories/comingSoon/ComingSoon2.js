import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

import "./ComingSoon2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Form, InputGroup, Row }"
}
*/

const SubscribeForm = () => (
	<Form
		id="ezy__comingsoon2-subscription-form"
		method="post"
		className="ezy__comingsoon2-subscription-form mt-4"
	>
		<InputGroup className="ezy__comingsoon2-input-group rounded shadow">
			<Form.Control
				name="email"
				id="ezy__comingsoon2-subscription-email"
				className="border-0"
				type="email"
				placeholder="Enter email"
				required
			/>
			<Button variant="primary" className="ezy__comingsoon2-btn px-5">
				Send
			</Button>
		</InputGroup>
	</Form>
);

const ComingSoon2 = () => {
	return (
		<section className="ezy__comingsoon2">
			<Container className="d-flex flex-grow-1 align-items-center h-100">
				<Row className="justify-content-center">
					<Col xs={12} lg={8} className="text-center py-5">
						<h2 className="ezy__comingsoon2-heading mb-4">Coming Soon</h2>
						<p className="ezy__comingsoon2-sub-heading mb-0">
							An activity that requires a person's mental or physical effort is
							work.If a person is trained for a certain type of job, they may
							have a profession. Typically, a job would be a subset of someone's
							career.
						</p>
					</Col>
				</Row>
			</Container>
			<div
				className="ezy__comingsoon2-subscription"
				style={{
					backgroundImage:
						"url(https://cdn.easyfrontend.com/pictures/comingsoon/two.png)",
				}}
			>
				<Container>
					<Row className="justify-content-center">
						<Col xs={12} md={8} lg={6} xl={5}>
							<SubscribeForm />
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	);
};

export default ComingSoon2;

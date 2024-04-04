import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./RichContents1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }",
}
*/

const Contents = () => {
	return (
		<div className="ezy__richcontents1-contents">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
				ducimus non ab obcaecati praesentium odit, porro ea ratione eos
				laudantium. Corrupti alias soluta corporis tenetur ea ab debitis, sit
				cupiditate dolor libero voluptatibus vel reiciendis quaerat magni
				tempora sapiente odit aperiam fugiat! Ipsum laudantium, exercitationem
				consequuntur eligendi pariatur eius porro.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
				ducimus non ab obcaecati praesentium odit, porro ea ratione eos
				laudantium. Corrupti alias soluta corporis tenetur ea ab debitis, sit
				cupiditate dolor libero voluptatibus vel reiciendis quaerat magni
				tempora sapiente odit aperiam fugiat! Ipsum laudantium, exercitationem
				consequuntur eligendi pariatur eius porro.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
				ducimus non ab obcaecati praesentium odit, porro ea ratione eos
				laudantium. Corrupti alias soluta corporis tenetur ea ab debitis, sit
				cupiditate dolor libero voluptatibus vel reiciendis quaerat magni
				tempora sapiente odit aperiam fugiat! Ipsum laudantium, exercitationem
				consequuntur eligendi pariatur eius porro.
			</p>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
				ducimus non ab obcaecati praesentium odit, porro ea ratione eos
				laudantium. Corrupti alias soluta corporis tenetur ea ab debitis, sit
				cupiditate dolor libero voluptatibus vel reiciendis quaerat magni
				tempora sapiente odit aperiam fugiat! Ipsum laudantium, exercitationem
				consequuntur eligendi pariatur eius porro.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
				ducimus non ab obcaecati praesentium odit, porro ea ratione eos
				laudantium. Corrupti alias soluta corporis tenetur ea ab debitis, sit
				cupiditate dolor libero voluptatibus vel reiciendis quaerat magni
				tempora sapiente odit aperiam fugiat! Ipsum laudantium, exercitationem
				consequuntur eligendi pariatur eius porro.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
				ducimus non ab obcaecati praesentium odit, porro ea ratione eos
				laudantium. Corrupti alias soluta corporis tenetur ea ab debitis, sit
				cupiditate dolor libero voluptatibus vel reiciendis quaerat magni
				tempora sapiente odit aperiam fugiat! Ipsum laudantium, exercitationem
				consequuntur eligendi pariatur eius porro.
			</p>
		</div>
	);
};

const RichContents1 = () => {
	return (
		<section className="ezy__richcontents1">
			<Container>
				<Row className="justify-content-between align-items-center">
					<Col xs={12} lg={6}>
						<h1 className="ezy__richcontents1-heading mb-3">
							Become a master of model in a week with Coursera
						</h1>
						<p className="ezy__richcontents1-sub-heading">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							quod perferendis nihil cupiditate aliquid qui.
						</p>
					</Col>
					<Col xs={12} lg={6} className="text-lg-end mt-3 mt-lg-0">
						<Button variant="primary">Get Started</Button>
						<Button variant="" className="ezy__richcontents1-btn">
							Learn More
						</Button>
					</Col>
				</Row>
				<Row className="mt-5">
					<Col xs={12}>
						<Contents />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default RichContents1;

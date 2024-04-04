import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./RichContents3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }",
}
*/

const Contents = () => {
	return (
		<div className="ezy__richcontents3-contents">
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

const RichContents3 = () => {
	return (
		<section className="ezy__richcontents3">
			<Container>
				<Row className="justify-content-between align-items-center">
					<Col xs={12} lg={6}>
						<h1 className="ezy__richcontents3-heading mb-3">
							Lorem ipsum dolor sit amet.
						</h1>
						<p className="ezy__richcontents3-sub-heading">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							quod perferendis nihil cupiditate aliquid qui.
						</p>
					</Col>
					<Col xs={12} lg={6} className="text-lg-end mt-3 mt-lg-0">
						<Button variant="primary">Get Started</Button>
						<Button variant="" className="ezy__richcontents3-btn">
							Learn More
						</Button>
					</Col>
				</Row>
				<Row className="mt-5 justify-content-center">
					<Col xs={12} lg={10} xl={8}>
						<Contents />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default RichContents3;

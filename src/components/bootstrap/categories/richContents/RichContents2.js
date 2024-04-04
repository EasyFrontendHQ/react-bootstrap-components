import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./RichContents2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
}
*/

const Contents = () => {
	return (
		<>
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
		</>
	);
};

const RichContents2 = () => {
	return (
		<section className="ezy__richcontents2">
			<Container>
				<Row className="justify-content-between">
					<Col xs={12} className="ezy__richcontents2-contents">
						<h1 className="ezy__richcontents2-heading mb-3">
							Izomart is providing free course on Web Development
						</h1>
						<p className="ezy__richcontents2-sub-heading pe-3 mb-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							quod perferendis nihil cupiditate aliquid qui.
						</p>

						<Contents />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default RichContents2;

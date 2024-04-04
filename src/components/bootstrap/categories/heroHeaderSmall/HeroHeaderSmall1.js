import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./HeroHeaderSmall1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
}
*/

const Shape = () => {
	return (
		<>
			<svg
				className="ezy__secheader1-svg d-none d-md-block"
				width="104"
				height="104"
				viewBox="0 0 104 104"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="52" cy="52" r="52" fill="var(--ezy-svg-color)" />
			</svg>
			<svg
				className="position-absolute bottom-0 end-0 d-none d-md-block"
				width="242"
				height="164"
				viewBox="0 0 242 164"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="165.5"
					cy="165.5"
					r="150.5"
					stroke="var(--ezy-svg-color)"
					strokeWidth="30"
				/>
			</svg>
		</>
	);
};
const Sheader1 = () => {
	return (
		<section className="ezy__secheader1">
			<div className="ezy__secheader1-top position-relative">
				{/* Shape */}
				<Shape />

				<Container>
					<Row>
						<Col xs={12} md={8}>
							<p className="ezy__secheader1-sub-heading mb-4">Home / Page 1</p>
							<h1 className="ezy__secheader1-heading mb-0">Page Heading</h1>
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	);
};

export default Sheader1;

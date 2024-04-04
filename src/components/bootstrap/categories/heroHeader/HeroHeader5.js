import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./HeroHeader5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faArrowRight }",
}
*/

const HeroHeaderShape1 = () => (
	<svg
		className="position-absolute start-0 bottom-0"
		width="474"
		height="624"
		viewBox="0 0 474 624"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			x="307.203"
			y="-77"
			width="380"
			height="1282.77"
			rx="190"
			transform="rotate(49.9815 307.203 -77)"
			fill="rgba(255, 255, 255, .25)"
		/>
	</svg>
);

const HeroHeaderShape2 = () => (
	<svg
		className="position-absolute end-0 top-0"
		width="568"
		height="579"
		viewBox="0 0 568 579"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			x="521.617"
			y="-138"
			width="380"
			height="782.419"
			rx="190"
			transform="rotate(49.9815 521.617 -138)"
			fill="rgba(255, 255, 255, .25)"
		/>
	</svg>
);

const HeroHeader5 = () => {
	return (
		<section className="ezy__header5 dark">
			<HeroHeaderShape1 />
			<HeroHeaderShape2 />

			<Container className="position-relative">
				<Row className="align-items-center">
					<Col lg={6} className="pe-xl-5 text-center text-lg-start">
						<h2 className="ezy__header5-heading mb-4">
							Malesuada fames ac turpis egest
						</h2>
						<p className="ezy__header5-sub-heading">
							Malesuada fames ac turpis egestas enas pharetra convallis. Cras
							pulvinar mattis nunc sed blandit.
						</p>
						<Button
							variant="light"
							className="ezy__header5-btn fs-5 mt-4 mt-md-5"
						>
							Try Now <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
						</Button>
					</Col>
					<Col lg={6} className="mt-5 mt-lg-0 text-center text-lg-start">
						<img
							src="https://cdn.easyfrontend.com/pictures/hero/hero-5.png"
							alt=""
							className="rounded img-fluid mt-3"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HeroHeader5;

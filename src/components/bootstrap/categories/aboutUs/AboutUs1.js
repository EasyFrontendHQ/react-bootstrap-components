import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./AboutUs1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }"
}
*/

const AboutUs1 = () => {
	return (
		<section className="ezy__about1" id="ezy__about1">
			<Container>
				<Row>
					<Col xs={12} md={6}>
						<h2 className="ezy__about1-heading text-md-end pe-md-4 fw-light">
							Developing Amazing Things with Passion since 2016.
						</h2>
					</Col>
					<Col xs={12} md={6} className="mt-3">
						<div className="ezy__about1-content">
							<p className="mb-0">
								Created forth two. Behold appear first, kind all i saying fowl
								man itself moved which every open shall moved subdue appear.
								Saying life wherein stars. Give dry, own, male had that us third
								lesser over deep. May every bring in it Whose. Female earth
								heaven won't behold female.
							</p>
							<p className="mt-5">
								Moved bearing give a two after. Had. Seas. Man they're. Grass
								above kind saying thing for that void sixth fly His after it.
							</p>
							<p className="mt-5 mb-0">
								The set doesn't moved. Deep don't fruit fowl gathering heaven
								days moving creeping under from i air. Set it fifth Meat
								wasness. every bring in it Whose. Female earth heaven won't
								behold female.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default AboutUs1;

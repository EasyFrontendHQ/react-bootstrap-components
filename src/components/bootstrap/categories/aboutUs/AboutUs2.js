import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./AboutUs2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }"
}
*/

const AboutUs2 = () => {
	return (
		<section className="ezy__about2" id="ezy__about2">
			<Container>
				<Row>
					<Col xs={12} lg={4}>
						<h2 className="ezy__about2-heading text-lg-end fw-light mb-0">
							Traveller Visiting nowadays Iceage Caves With Amazing Eye-catching
							Scenes.
						</h2>
					</Col>
					<Col xs={12} lg={4} className="px-md-4 my-4 my-lg-0">
						<div
							className="h-100 ezy__about2-banner"
							style={{
								backgroundImage:
									"url(https://cdn.easyfrontend.com/pictures/contents/contents-banner.jpg)",
							}}
						/>
					</Col>
					<Col xs={12} lg={4}>
						<div className="ezy__about2-content">
							<p className="mb-0">
								Created forth two. Behold appear first, kind all i saying fowl
								man itself moved which every open shall moved subdue appear.
								Saying life wherein stars. Give dry, own, male had that us third
								lesser over deep. May every bring in it Whose. Female earth
								heaven won't behold female.
							</p>
							<p className="mt-4">
								Moved bearing give a two after. Had. Seas. Man they're. Grass
								above kind saying thing for that void sixth fly His after it.
							</p>
							<p className="mt-4 mb-0">
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

export default AboutUs2;

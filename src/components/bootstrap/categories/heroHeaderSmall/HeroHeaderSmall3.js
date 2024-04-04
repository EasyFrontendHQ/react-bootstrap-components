import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./HeroHeaderSmall3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
}
*/

const Sheader3 = () => {
	return (
		<section className="ezy__secheader3">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={8} className="text-center">
						<h1 className="ezy__secheader3-heading">Page Heading</h1>
						<p className="ezy__secheader3-sub-heading mt-4 mb-0">
							Metus, iaculis aliquam convallis vitae placerat ullamcorper cum id
							id. Gravida est est, sapien, lacus. Cursus facilisis tortor
							feugiat maecenas gravida consequat non blandit.
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Sheader3;

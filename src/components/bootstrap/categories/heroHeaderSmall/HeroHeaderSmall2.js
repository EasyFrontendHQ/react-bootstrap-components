import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./HeroHeaderSmall2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
}
*/

const Sheader2 = () => {
	return (
		<section className="ezy__secheader2">
			<Container>
				<Row>
					<Col xs={12} md={8}>
						<h1 className="ezy__secheader2-heading">Page Heading</h1>
						<p className="ezy__secheader2-sub-heading mt-4 mb-0">
							Metus, iaculis aliquam convallis vitae placerat ullamcorper cum id
							id. Gravida est est, sapien, lacus. Cursus facilisis tortor
							feugiat maecenas gravida consequat non blandit. Varius
							sollicitudin pulvinar lacus justo.
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Sheader2;

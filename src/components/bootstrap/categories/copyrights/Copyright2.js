import React from "react";
import { Container } from "react-bootstrap";
import "./Copyright2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Container}"
}
*/

const Copyright2 = () => {
	return (
		<section className="ezy__copyright2">
			<Container>
				<div className="text-center">
					<p className="text-white mb-0">Copyright all rights reserved</p>
				</div>
			</Container>
		</section>
	);
};

export default Copyright2;

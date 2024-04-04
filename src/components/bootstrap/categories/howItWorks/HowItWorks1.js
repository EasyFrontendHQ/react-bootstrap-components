import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./HowItWorks1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
    "prop-types": "PropTypes"
}
*/

const contents = [
	{
		title: "Product Design",
		text: "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
	},
	{
		title: "Strategy",
		text: "Coquettish darn pernicious foresaw therefore much amongst lingeringly shed much due.",
	},
	{
		title: "Connection",
		text: "It’s no secret that the digital industry is booming. From exciting startups.",
	},
	{
		title: "Shipping",
		text: "Tellus in metus vulp utate eu scele risque felis. Nunc scele risque vi",
	},
];

const ContentItem = ({ item, index }) => (
	<div className="p-xl-3 mt-4">
		<div className="ezy__howitworks1-number mb-3">{index + 1}</div>
		<h4 className="ezy__howitworks1-title fs-4 mb-3">{item.title}</h4>
		<p className="ezy__howitworks1-content mb-0">{item.text}</p>
	</div>
);

ContentItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const HowItWorks1 = () => {
	return (
		<section className="ezy__howitworks1">
			<Container>
				<Row className="justify-content-between">
					{/* image  */}
					<Col xs={12} lg={5}>
						<img
							src="https://cdn.easyfrontend.com/pictures/featured/three.png"
							alt=""
							className="img-fluid mb-5 mb-lg-0"
						/>
					</Col>
					<Col xs={12} lg={6}>
						<Row>
							<Col xs={12}>
								<h1 className="ezy__howitworks1-heading mb-4">
									Let's reveal how we work!
								</h1>
							</Col>
							{contents.map((item, i) => (
								<Col xs={12} md={6} key={i}>
									<ContentItem index={i} item={item} />
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HowItWorks1;

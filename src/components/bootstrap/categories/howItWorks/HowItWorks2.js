import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./HowItWorks2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faPlay }",
    "prop-types": "PropTypes"
}
*/

const contents = [
	{
		title: "Product Design",
		text: "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
	},
	{
		title: "Tracking",
		text: "Urna molestie at eleme ntum eu facilisis sed odio Male suada fames.",
	},
	{
		title: "Analytics",
		text: "It’s no secret that the digital industry is booming. From exciting startups to global brands.",
	},
	{
		title: "Marketing",
		text: "More off this less hello salamander lied porpoise much over tightly circa horse taped.",
	},
	{
		title: "Distribution",
		text: "This is a factor in the economy of a nation, and the administration takes the major choices.",
	},
	{
		title: "Feedback",
		text: "Banking crises have developed many times banking sector as a whole.",
	},
];

const ContentItem = ({ item, index }) => (
	<div className="p-xl-3 mt-4">
		<div className="ezy__howitworks2-number mb-3">{index + 1}</div>
		<h4 className="ezy__howitworks2-title fs-4 mb-3">{item.title}</h4>
		<p className="ezy__howitworks2-content mb-0">{item.text}</p>
	</div>
);

ContentItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const HowItWorks2 = () => {
	return (
		<section className="ezy__howitworks2">
			<Container>
				<Row className="align-items-center justify-content-between">
					<Col xs={12} md={6}>
						<h1 className="ezy__howitworks2-heading mb-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit
						</h1>
						<p className="ezy__howitworks2-sub-heading">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Perferendis sit, adipisci consectetur repellendus magni quae totam
							temporibus. Quibusdam eos magnam, vel perferendis cupiditate
							doloremque qui.
						</p>
					</Col>
					<Col xs={12} md={5} className="position-relative">
						<a
							href="src/components/bootstrap/categories/howItWorks/HowItWorks2#!"
							className="ezy__howitworks2-play mb-4"
						>
							<FontAwesomeIcon icon={faPlay} />
						</a>
						<img
							src="https://cdn.easyfrontend.com/pictures/blog/blog_13_3.jpg"
							alt=""
							className="img-fluid my-5 my-md-0"
						/>
					</Col>
				</Row>
				<Row className="mt-5">
					{contents.map((item, i) => (
						<Col xs={12} md={6} lg={4} key={i}>
							<ContentItem index={i} item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default HowItWorks2;

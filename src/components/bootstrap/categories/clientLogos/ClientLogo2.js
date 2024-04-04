import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ClientLogo2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }"
}
*/

const clientLogos = [
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-1.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-5.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
		alt: "",
	},
];

const ClientLogo2 = () => {
	return (
		<section className="ezy__clients2">
			<Container>
				<Row className="justify-content-center mb-5">
					<Col lg={8} xl={7} xxl={6} className="text-center">
						<h2 className="ezy__clients2-heading mb-4">
							Meet Our Clients &amp; Partners
						</h2>
						<p className="ezy__clients2-sub-heading mb-4">
							Create amazing carousel to display your client or partner logos
							with extensive design controls.
						</p>
					</Col>
				</Row>
				<div className="d-flex flex-wrap justify-content-center align-items-center text-center">
					{clientLogos.map((client, i) => (
						<img
							src={client.logo}
							alt={client.alt}
							className="ezy__clients2-img img-fluid px-5 my-4"
							key={i}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

export default ClientLogo2;

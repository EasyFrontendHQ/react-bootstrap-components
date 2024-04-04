import React from "react";
import { Container } from "react-bootstrap";
import "./ClientLogo5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Container }"
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

const ClientLogo5 = () => {
	return (
		<section className="ezy__clients5">
			<Container>
				<div className="text-center mb-5">
					<h2 className="ezy__clients5-heading">
						Meet Our Clients &amp; Partners
					</h2>
				</div>
				<marquee behavior="scroll" direction="left" scrollamount="20" loop>
					<div className="d-flex justify-content-center align-items-center text-center">
						{clientLogos.map((client, i) => (
							<img
								src={client.logo}
								alt={client.alt}
								className="ezy__clients5-img img-fluid px-5 my-4"
								key={i}
							/>
						))}
					</div>
				</marquee>
				<marquee behavior="scroll" direction="right" scrollamount="10" loop>
					<div className="d-flex justify-content-center align-items-center text-center">
						{clientLogos.map((client, i) => (
							<img
								src={client.logo}
								alt={client.alt}
								className="ezy__clients5-img img-fluid px-5 my-4"
								key={i}
							/>
						))}
					</div>
				</marquee>
			</Container>
		</section>
	);
};

export default ClientLogo5;

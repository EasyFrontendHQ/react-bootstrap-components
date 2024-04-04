import React from "react";
import { Container } from "react-bootstrap";
import "./ClientLogo1.css";

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

const ClientLogo1 = () => {
	return (
		<section className="ezy__clients1">
			<Container>
				<div className="d-flex flex-wrap justify-content-center align-items-center text-center">
					{clientLogos.map((client, i) => (
						<img
							src={client.logo}
							alt={client.alt}
							className="ezy__clients1-img img-fluid px-5 my-4"
							key={i}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

export default ClientLogo1;

import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faTwitter,
	faVimeo,
} from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Contents3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Nav, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faClone }",
    "@fortawesome/free-brands-svg-icons": "{ faFacebook, faTwitter, faVimeo }",
	"classnames":"classNames",
    "prop-types": "PropTypes"
}
*/

const links = [
	{
		link: "#!",
		icon: faClone,
		label: "Copy Link",
	},
	{
		link: "#!",
		icon: faTwitter,
		label: null,
	},
	{
		link: "#!",
		icon: faFacebook,
		label: null,
	},
	{
		link: "#!",
		icon: faVimeo,
		label: null,
	},
];

const navigations = [
	{
		href: "#!",
		value: "Introduction",
	},
	{
		href: "#!",
		value: "The standard Lorem Ipsum",
	},
	{
		href: "#!",
		value: "1914 translation by H.",
	},
	{
		href: "#!",
		value: "Summary",
	},
];

const SocialLinks = ({ links }) => (
	<Nav className="ezy__contents3-social-icon">
		{links.map((link, i) => (
			<li key={i}>
				<a href={link.link}>
					<FontAwesomeIcon icon={link.icon} />
					{link.label && <span className="ms-2">{link.label}</span>}
				</a>
			</li>
		))}
	</Nav>
);

SocialLinks.propTypes = {
	links: PropTypes.array.isRequired,
};

const Navigation = ({ item, index }) => (
	<li className={classNames({ "mt-3": index })}>
		<a href={item.href}>{item.value}</a>
	</li>
);

Navigation.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number,
};

const Contents = () => (
	<>
		{" "}
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.
			Hic, nisi! Perspiciatis veritatis quibusdam esse! Corrupti aut unde neque
			sit alias repudiandae ratione debitis id pariatur? Nesciunt quam officia
			enim repudiandae, voluptatibus, culpa veniam sapiente sunt nisi ratione
			tenetur.
		</p>
		<br />
		<hr />
		<br />
		<h4>The standard Lorem Ipsum</h4>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.
			Hic, nisi! Perspiciatis veritatis quibusdam esse! Corrupti aut unde neque
			sit alias repudiandae ratione debitis id pariatur? Nesciunt quam officia
			enim repudiandae, voluptatibus, culpa veniam sapiente sunt nisi ratione
			tenetur.
		</p>
		<br />
		<blockquote cite="https://easyfrontend.com">
			<b>
				For 50 years, WWF has been protecting the future of nature. The world's
				leading conservation organization, WWF works in 100 countries and is
				supported by 1.2 million members in the United States and close to 5
				million globally
			</b>
			<p></p>
			<p>- John Doe, CEO {`&`} Founder</p>
		</blockquote>
		<br />
		<p>
			Lorem ipsum dolor sit amet consectetur{" "}
			<a href="src/components/bootstrap/categories/contents/Contents3#!">
				adipisicing elit
			</a>
			. Pariatur, odio. Hic, nisi! Perspiciatis veritatis quibusdam esse!
			Corrupti aut unde neque sit alias repudiandae ratione debitis id pariatur?
			Nesciunt quam officia enim repudiandae, voluptatibus, culpa veniam
			sapiente sunt nisi ratione tenetur.
		</p>
		<br />
		<img
			src="https://cdn.easyfrontend.com/pictures/blog/blog_13_3.jpg"
			alt=""
		/>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo
			doloremque.
		</p>
		<br />
		<h4>1914 translation by H.</h4>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias quam
			ut at voluptatem, illum id repudiandae libero labore deserunt voluptates
			vero accusantium suscipit quae possimus beatae velit. Repellat cupiditate
			amet, consequatur eaque vel autem accusantium excepturi sed unde sunt
			pariatur nobis qui nam, minima ullam. Quos quasi quidem consequatur sequi
			veniam doloribus quisquam, ipsam cum provident hic impedit eos!
		</p>
	</>
);

const Contents3 = () => {
	return (
		<section className="ezy__contents3">
			<Container>
				<Row className="justify-content-between mb-4">
					{/* banner  */}
					<Col xs={12} lg={5}>
						<img
							src="https://cdn.easyfrontend.com/pictures/blog/blog_13_1.jpg"
							alt=""
							className="img-fluid my-3 my-md-5 rounded-2"
						/>
					</Col>
					<Col
						xs={12}
						lg={6}
						className="mt-0 mt-lg-5 d-flex align-items-center"
					>
						<div>
							{/* heading  */}
							<h5 className="ezy__contents3-date">Published 08 June 2004</h5>

							<h1 className="ezy__contents3-heading mb-3">
								How to collaborate better with your development team?
							</h1>
							<p className="ezy__contents3-sub-heading">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
							{/* avatar  */}
							<div className="d-flex align-items-center mt-4">
								<div className="me-2">
									<img
										src="https://cdn.easyfrontend.com/pictures/contents/avatar.jpeg"
										alt=""
										className="img-fluid rounded-circle border"
										width="47"
									/>
								</div>
								<div className="text-start">
									<h4 className="ezy__contents3-avatar-name mb-0">John Doe</h4>
									<p className="ezy__contents3-avatar-date mb-0">8 June 2004</p>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<Row className="justify-content-between">
					{/* sidebar  */}
					<Col xs={12} md={3} className="mb-5 mb-md-0">
						<Nav className="flex-column ezy__contents3-contents-list mb-4">
							{navigations.map((item, i) => (
								<Navigation item={item} index={i} key={i} />
							))}
						</Nav>
						<hr className="ezy__contents3-hr" />
						{/* social icons  */}
						<SocialLinks links={links} />
						{/* End: .social-icon  */}
					</Col>
					{/* contents */}
					<Col xs={12} md={8} className="ezy__contents3-content">
						<Contents />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Contents3;

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./Blog2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }",
    "prop-types": "PropTypes"
}
*/

const blogs = [
	{
		title: "Not Your Regular Home Decoration?",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
		author: " John Leo",
		date: "21 Jun, 2022",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_1.jpg",
	},
	{
		title: "Long lasting fall scent for women sale offer",
		description:
			"It’s no secret that the digital industry is booming. From exciting startups to global brands.",
		author: " Abraham Frin",
		date: "21 Jun, 2022",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_2.jpg",
	},
	{
		title: "How I’m Styling Everyday Black Outfits",
		description:
			"Viverra tellus in hac habitasse platea dictumst. Sollicitudin tempor id eu nisl.",
		author: " Finn Alen",
		date: "21 Jun, 2022",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
	},
	{
		title: "Fashion Essentials All Men Should Know",
		description:
			"Sed ut in perspiciatis unde omnis iste natus error sit tatem doloremque laudantium.",
		author: " Warner Mac",
		date: "21 Jun, 2022",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_4.jpg",
	},
	{
		title: "Dolor sit amet, consectetur adiplscing eliyt sed",
		description:
			"More off this less hello salamander lied porpoise much over tightly circa horse taped.",
		author: " Maxy Paulo",
		date: "21 Jun, 2022",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_13_3.jpg",
	},
	{
		title: "Not Your Regular Home Decoration?",
		description:
			"Urna molestie at eleme ntum eu facilisis sed odio Male suada fames .",
		author: " Sarah Taylor",
		date: "21 Jun, 2022",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_13_1.jpg",
	},
];

const BlogItem = ({ blog }) => {
	return (
		<article className="ezy__blog2-post rounded overflow-hidden h-100">
			<img src={blog.image} alt="" className="img-fluid w-100" />
			<div className="p-3 p-md-4">
				<h4 className="ezy__blog2-title fs-4 mb-2">{blog.title}</h4>
				<p className="ezy__blog2-author">
					<span className="me-2">
						By{" "}
						<a
							href="src/components/bootstrap/categories/blogs/Blog2#!"
							className="text-decoration-none"
						>
							{blog.author}
						</a>
					</span>
					<span>
						At <span>{blog.date}</span>
					</span>
				</p>
				<p className="ezy__blog2-description mt-3 mb-4">{blog.description}</p>
				<Button variant="" className="ezy__blog2-btn-read-more">
					Read More
				</Button>
			</div>
		</article>
	);
};

BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
};

const Blog2 = () => {
	return (
		<section className="ezy__blog2">
			<Container>
				<Row className="justify-content-center">
					<Col lg={8} className="text-center">
						<h2 className="ezy__blog2-heading mb-3 mt-0">
							HOME TOUR: SUMMER DECORATION
						</h2>
						<p className="ezy__blog2-sub-heading px-lg-5 mb-4">
							Banking crises have developed many times throughout history when
							one or more risks have emerged for a banking sector as a whole.
						</p>
						<Button variant="" className="ezy__blog2-btn">
							All Posts
						</Button>
					</Col>
				</Row>
				<Row className="mt-3 mt-md-5">
					{blogs.map((blog, i) => (
						<Col xs={12} md={6} lg={4} className="mt-4" key={i}>
							<BlogItem blog={blog} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Blog2;

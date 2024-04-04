import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./Blog4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }",
    "prop-types": "PropTypes",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faClock }"
}
*/

const blogs = [
	{
		title: "Not Your Regular Home Decoration?",
		description:
			"Urna molestie at eleme ntum eu facilisis sed odio Male suada fames.",
		author: "Maisha Adiba",
		date: "21 Jun, 2022",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_14_3.jpg",
	},
	{
		title: "How I’m Styling Everyday Black Outfits",
		description:
			"It’s no secret that the digital industry is booming. From exciting startups to global brands.",
		author: "Alex Hales",
		date: "21 Jun, 2022",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_14_1.jpg",
	},
	{
		title: "Fashion Essentials All Men Should Know",
		description:
			"More off this less hello salamander lied porpoise much over tightly circa horse taped.",
		author: "John Stokes",
		date: "21 Jun, 2022",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_13_3.jpg",
	},
];

const BlogItem = ({ blog }) => {
	return (
		<article className="ezy__blog4-post rounded overflow-hidden">
			<img src={blog.image} alt="" className="img-fluid w-100" />
			<div className="p-3 p-lg-4">
				<h4 className="ezy__blog4-title fs-4 mb-1">{blog.title}</h4>
				<p className="ezy__blog4-author">
					<span className="me-2">
						By{" "}
						<a
							href="src/components/bootstrap/categories/blogs/Blog4#!"
							className="text-decoration-none"
						>
							{blog.author}
						</a>
					</span>
					<span>
						<FontAwesomeIcon icon={faClock} className="me-1" />
						<span>{blog.date}</span>
					</span>
				</p>
				<p className="ezy__blog4-description mt-3 mb-4">{blog.description}</p>
				<Button variant="" className="ezy__blog4-btn-read-more">
					Read More
				</Button>
			</div>
		</article>
	);
};

BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
};

const FeaturedBlogItem = () => {
	return (
		<article className="ezy__blog4-featured-post">
			<Row className="align-items-center">
				<Col lg={7}>
					<img
						src="https://cdn.easyfrontend.com/pictures/blog/blog_4.jpg"
						alt=""
						className="img-fluid rounded-3"
					/>
				</Col>
				<Col lg={5}>
					<div className="mt-4 mt-lg-0 ps-lg-4">
						<h4 className="ezy__blog4-title mb-2">
							Interview - What it's like to work remorely in big-sized product
							development?
						</h4>
						<p className="ezy__blog4-description mt-3 mb-4">
							This is a factor in the economy of a nation, and the
							administration takes the major choices.This is a factor in the
							economy of a nation, and the administration takes the major
							choices.Banking crises have developed many times throughout
							history when one or more risks have emerged for a banking sector
							as a whole.
						</p>
						<div className="ezy__blog4-author d-flex align-items-center">
							<div className="me-2">
								<img
									src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg"
									alt=""
									className="img-fluid rounded-circle border"
									width="47"
								/>
							</div>
							<div>
								<p className="mb-0">
									By<b> Alan Bell</b>
								</p>
								<p className="mb-0 small opacity-75">August 10th, 2020</p>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</article>
	);
};

FeaturedBlogItem.propTypes = {
	// blog: PropTypes.object.isRequired,
};

const Blog4 = () => {
	return (
		<section className="ezy__blog4">
			<Container>
				<Row className="justify-content-center">
					<Col lg={8} className="text-center">
						<h2 className="ezy__blog4-heading mb-3 mt-0">
							Heal the world with banking blog.
						</h2>
						<p className="ezy__blog4-sub-heading px-lg-5 mb-4">
							Banking crises have developed many times throughout history when
							one or more risks have emerged.
						</p>
						<Button variant="warning" className="ezy__blog4-btn">
							All Posts
						</Button>
					</Col>
				</Row>

				<Row className="align-items-center mt-5">
					<Col xs={12} className="mb-4">
						<FeaturedBlogItem />
					</Col>
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

export default Blog4;

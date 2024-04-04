import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import moment from "moment";
import PropTypes from "prop-types";

import "./Blog3.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }",
	"moment": "moment",
    "prop-types": "PropTypes"
}
*/

const blogs = [
	{
		title: "Not Your Regular Home Decoration?",
		description:
			"Urna molestie at eleme ntum eu facilisis sed odio Male suada fames.",
		author: "Alex Hales",
		date: "2020-01-17 18:01:34",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
	},
	{
		title: "How I’m Styling Everyday Black Outfits",
		description:
			"It’s no secret that the digital industry is booming. From exciting startups to global brands.",
		author: "Mitwa Dadkan",
		date: "2020-01-16 18:01:34",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg",
	},
	{
		title: "Fashion Essentials All Men Should Know",
		description:
			"More off this less hello salamander lied porpoise much over tightly circa horse taped.",
		author: "Mahws Georgia",
		date: "2020-01-17 18:01:34",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_14_1.jpg",
	},
];

const BlogItem = ({ blog }) => {
	return (
		<article className="ezy__blog3-post">
			<div className="position-relative">
				<img src={blog.image} alt="" className="img-fluid w-100" />
				<div className="position-absolute top-0 start-0 px-4 py-3 fw-bold ezy__blog3-calendar">
					{moment(blog.date).format("D")}
					<br />
					{moment(blog.date).format("MMM")}
					<br />
					{moment(blog.date).format("Y")}
				</div>
			</div>
			<div className="p-3 p-md-4">
				<p className="ezy__blog3-author">
					By{" "}
					<a
						href="src/components/bootstrap/categories/blogs/Blog3#!"
						className="text-decoration-none"
					>
						{blog.author}
					</a>
				</p>
				<h4 className="mt-3 ezy__blog3-title">{blog.title}</h4>
				<p className="ezy__blog3-description mt-3 mb-4">{blog.description}</p>
				<Button variant="" className="ezy__blog3-btn-read-more">
					Read More
				</Button>
			</div>
		</article>
	);
};

BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
};

const Blog3 = () => {
	return (
		<section className="ezy__blog3">
			<Container>
				<Row className="justify-content-center">
					<Col lg={8} className="text-center">
						<h2 className="ezy__blog3-heading mb-3 mt-0">
							The Body Type Of Models Is Far From Reality.
						</h2>
						<p className="ezy__blog3-sub-heading px-lg-5 mb-4">
							Sed ut in perspiciatis unde omnis iste natus error sit on i tatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae.
						</p>
						<Button variant="" className="ezy__blog3-btn">
							All Posts
						</Button>
					</Col>
				</Row>
				<Row className="mt-5">
					{blogs.map((blog, i) => (
						<Col md={4} key={i} className="mb-3">
							<BlogItem blog={blog} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Blog3;

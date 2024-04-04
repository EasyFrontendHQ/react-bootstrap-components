import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./Blog1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Row }",
    "prop-types": "PropTypes"
}
*/

const blogs = [
	{
		title: "How I’m Styling Everyday Black Outfits",
		description:
			"It’s no secret that the digital industry is booming. From exciting startups.",
		author: " Abraham Leo",
		date: "26",
		month: "Oct",
		year: "2016",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_13_2.jpg",
	},
	{
		title: "Not Your Regular Home Decoration Trends",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
		author: " Mahws Georgia",
		date: "26",
		month: "Oct",
		year: "2016",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
	},
];

const BlogItem = ({ blog }) => {
	return (
		<article className="ezy__blog1-post">
			<div className="position-relative">
				<img src={blog.image} alt="" className="img-fluid w-100" />
				<div className="position-absolute top-0 start-0 px-4 py-3 fw-bold ezy__blog1-calendar">
					{blog.date}
					<br />
					{blog.month}
					<br />
					{blog.year}
				</div>
			</div>
			<div className="p-3 p-md-4">
				<p className="ezy__blog1-author">
					By
					<a
						href="src/components/bootstrap/categories/blogs/Blog1#!"
						className="text-decoration-none"
					>
						{blog.author}
					</a>
				</p>
				<h4 className="mt-3 ezy__blog1-title fs-4 mb-3">{blog.title}</h4>
				<p className="ezy__blog1-description mb-4">{blog.description}</p>
				<Button variant="" className="ezy__blog1-btn-read-more">
					Read More
				</Button>
			</div>
		</article>
	);
};

BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
};

const Blog1 = () => {
	return (
		<section className="ezy__blog1">
			<Container>
				<Row className="align-items-center">
					<Col lg={5} className="mb-4 mb-lg-0">
						<div className="px-lg-5">
							<h2 className="ezy__blog1-heading mb-3">
								A Guide to Latest in Fashion
							</h2>
							<p className="ezy__blog1-sub-heading mb-5">
								Vitae bibendum egestas magna sit elit non. Netus volutpat
								dignissim pharetra felis. Orci commodo mauris adipiscing semper
								amet.
							</p>
							<Button variant="primary" className="ezy__blog1-btn">
								All Posts
							</Button>
						</div>
					</Col>
					<Col lg={7} className="mt-4 mt-md-0">
						<Row>
							{blogs.map((blog, i) => (
								<Col xs={12} md={6} className="mb-3" key={i}>
									<BlogItem blog={blog} />
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Blog1;

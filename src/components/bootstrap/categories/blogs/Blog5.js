import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./Blog5.css";

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
		title: "Long lasting fall scent for women sale offer",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
		author: "Mahws Georgia",
		date: "13 Jan, 2022",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_2.jpg",
	},
	{
		title: "Fashion Essentials All Men Should Know",
		description:
			"Sed ut in perspiciatis unde omnis iste natus error sit tatem doloremque laudantium.",
		author: "Mary Gold",
		date: "27 Oct, 2022",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
	},
	{
		title: "Dolor sit amet, adiplscing eliyt sed",
		description:
			"Viverra tellus in hac habitasse platea dictumst. Sollicitudin tempor id eu nisl.",
		author: "Hardik Finn",
		date: "11 Mar, 2022",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg",
	},
];

const BlogItem = ({ blog }) => {
	return (
		<article className="ezy__blog5-post rounded overflow-hidden">
			<img src={blog.image} alt="" className="img-fluid w-100" />
			<div className="p-3 p-lg-4">
				<h4 className="ezy__blog5-title fs-4 mb-1">{blog.title}</h4>
				<p className="ezy__blog5-author">
					<span className="me-2">
						By{" "}
						<a
							href="src/components/bootstrap/categories/blogs/Blog5#!"
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
				<p className="ezy__blog5-description mt-3 mb-4">{blog.description}</p>
				<Button variant="" className="ezy__blog5-btn-read-more">
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
		<article className="ezy__blog5-featured-post">
			<Row className="align-items-center">
				<Col lg={7} className="order-lg-2">
					<img
						src="https://cdn.easyfrontend.com/pictures/blog/blog_7.jpg"
						alt=""
						className="img-fluid rounded-3"
					/>
				</Col>
				<Col lg={5}>
					<div className="mt-4 mt-lg-0 pe-lg-4">
						<h4 className="ezy__blog5-title mb-2">
							Tellus in metus vulp utate eu scele risque scele viverra mauris in
							al?
						</h4>
						<p className="ezy__blog5-description mt-3 mb-4">
							This is a factor in the economy of a nation, and the
							administration takes the major choices.This is a factor in the
							economy of a nation, and the administration takes the major
							choices.Banking crises have developed many times throughout
							history when one or more risks have emerged for a banking sector
							as a whole.
						</p>
						<div className="ezy__blog5-author d-flex align-items-center">
							<div className="me-2">
								<img
									src="https://cdn.easyfrontend.com/pictures/users/user18.jpg"
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

const Blog5 = () => {
	return (
		<section className="ezy__blog5">
			<Container>
				<Row className="justify-content-center">
					<Col lg={8} className="text-center">
						<h2 className="ezy__blog5-heading mb-3 mt-0">
							Pros & Cons of Being a Model
						</h2>
						<p className="ezy__blog5-sub-heading px-lg-5 mb-4">
							Banking crises have developed many times throughout history when
							one or more risks have emerged.
						</p>
						<Button variant="warning" className="ezy__blog5-btn">
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

export default Blog5;

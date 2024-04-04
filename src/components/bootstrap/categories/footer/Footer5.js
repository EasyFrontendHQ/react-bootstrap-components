import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faPinterestP,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

import "./Footer5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Nav, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-brands-svg-icons": "{ faFacebookF, faTwitter, faPinterestP, faLinkedinIn, }",
	"prop-types": "PropTypes",
}
*/

const quickLinks = [
	{ value: "Terms & Conditions", href: "#!" },
	{ value: "Privacy Policy", href: "#!" },
	{ value: "Refund Policy", href: "#!" },
];

const socialMedia = [
	{ value: "Facebook", href: "#!" },
	{ value: "Instagram", href: "#!" },
	{ value: "LinkedIn", href: "#!" },
	{ value: "Twitter", href: "#!" },
];

const jobInfo = [
	{ value: "Select", href: "#!" },
	{ value: "Service", href: "#!" },
	{ value: "Payment", href: "#!" },
];

const articles = [
	{
		img: "https://cdn.easyfrontend.com/pictures/footers/article-1.png",
		href: "#!",
		title: "Time for a Sharp banking blog",
		date: "Dec 16, 2021 at 7:30PM",
		text: "Assumenda non repellendus distinctio nihil dicta sapiente",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/footers/article-2.png",
		href: "#!",
		title: "Time for a Sharp banking blog",
		date: "Dec 16, 2021 at 7:30PM",
		text: "Assumenda non repellendus distinctio nihil dicta sapiente",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/footers/article-3.png",
		href: "#!",
		title: "Time for a Sharp banking blog",
		date: "Dec 16, 2021 at 7:30PM",
		text: "Assumenda non repellendus distinctio nihil dicta sapiente",
	},
];

const navigations = [
	{
		value: "Home",
		href: "#!",
	},
	{
		value: "About",
		href: "#!",
	},
	{
		value: "Contact",
		href: "#!",
	},
];

const sociaIcons = [
	{
		icon: faFacebookF,
		href: "#!",
	},
	{
		icon: faTwitter,
		href: "#!",
	},
	{
		icon: faPinterestP,
		href: "#!",
	},
	{
		icon: faLinkedinIn,
		href: "#!",
	},
];

const QuickLinks = ({ qLink }) => (
	<li>
		<a href={qLink.href}>{qLink.value}</a>
	</li>
);
QuickLinks.propTypes = {
	qLink: PropTypes.object.isRequired,
};

const SocialMedia = ({ media }) => (
	<li>
		<a href={media.href}>{media.value}</a>
	</li>
);
SocialMedia.propTypes = {
	media: PropTypes.object.isRequired,
};

const JobInfo = ({ job }) => (
	<li>
		<a href={job.href}>{job.value}</a>
	</li>
);
JobInfo.propTypes = {
	job: PropTypes.object.isRequired,
};

const ArticleItem = ({ article }) => (
	<li className="mt-3">
		<article className="d-flex">
			<div className="me-3">
				<img src={article.img} width="70" alt="" className="rounded-3" />
			</div>
			<div>
				<h5 className="fs-6 fw-semi-bold mb-0 ezy__footer5-article-title">
					<a href={article.href} className="text-decoration-none">
						{article.title}
					</a>
				</h5>
				<small className="text-secondary opacity-75 ezy__footer5-article-time">
					{article.date}
				</small>
				<p className="mb-0 mt-1 text-secondary opacity-75 ezy__footer5-article-content">
					{article.text}
				</p>
			</div>
		</article>
	</li>
);
ArticleItem.propTypes = {
	article: PropTypes.object.isRequired,
};

const NavigationItem = ({ item }) => (
	<Nav.Item>
		<Nav.Link href={item.href}>{item.value}</Nav.Link>
	</Nav.Item>
);

NavigationItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const SocialItem = ({ social }) => (
	<li>
		<a href={social.href}>
			<FontAwesomeIcon icon={social.icon} />
		</a>
	</li>
);

SocialItem.propTypes = {
	social: PropTypes.object.isRequired,
};

const Footer5 = () => {
	return (
		<section className="ezy__footer5">
			<Container>
				<Row className="text-center py-5">
					<Col xs={12}>
						<img
							src="https://cdn.easyfrontend.com/pictures/footers/site-logo.png"
							height="50"
							alt=""
						/>
					</Col>
				</Row>
				<Row className="text-start mb-md-5">
					<Col sm={4} lg={3} className="mt-4 mt-lg-0">
						<h5>Quick Links</h5>
						<Nav className="flex-column ezy__footer5-quick-links">
							{quickLinks.map((qLink, i) => (
								<QuickLinks qLink={qLink} key={i} />
							))}
						</Nav>

						<h5 className="mt-4">Quick Links</h5>
						<Nav className="ezy__footer5-social">
							{sociaIcons.map((social, i) => (
								<SocialItem social={social} key={i} />
							))}
						</Nav>
					</Col>
					<Col sm={4} lg={3} className="mt-4 mt-lg-0">
						<h5>Social Media</h5>
						<Nav className="flex-column ezy__footer5-quick-links">
							{socialMedia.map((media, i) => (
								<SocialMedia media={media} key={i} />
							))}
						</Nav>
					</Col>
					<Col sm={4} lg={2} className="mt-4 mt-lg-0">
						<h5>Job Info</h5>
						<Nav className="flex-column ezy__footer5-quick-links">
							{jobInfo.map((job, i) => (
								<JobInfo job={job} key={i} />
							))}
						</Nav>
					</Col>
					<Col xs={12} lg={4} className="mt-4 mt-lg-0">
						<h5>Recent Articles</h5>
						<Nav className="flex-column">
							{articles.map((article, i) => (
								<ArticleItem article={article} key={i} />
							))}
						</Nav>
					</Col>
				</Row>
				<hr className="ezy__footer5-hr" />
				<Row className="d-flex justify-content-between align-items-center text-center text-lg-start pb-4">
					<Col md={6}>
						<p className="mb-0 mt-1 opacity-50">
							Copyright &copy; Easy Frontend, All rights reserved
						</p>
					</Col>
					<Col md={6}>
						<Nav className="ezy__footer5-nav justify-content-center justify-content-md-end mt-1">
							{navigations.map((item, i) => (
								<NavigationItem item={item} key={i} />
							))}
						</Nav>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Footer5;

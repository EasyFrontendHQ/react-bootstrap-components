import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
	faFacebookF,
	faLinkedinIn,
	faTwitter,
	faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./TeamMember4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-brands-svg-icons": "{ faFacebookF, faLinkedinIn, faTwitter, faBehance }",
	"classnames": "classNames",
	"prop-types": "PropTypes",
}
*/

const teamMembers = [
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user18.jpg",
		fullName: "Akshay Kumar",
		designation: "Founder / CEO",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user11.jpg",
		fullName: "Raima Ray",
		designation: "Business Head",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user20.jpg",
		fullName: "Arjun Kapur",
		designation: "UI Design",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user16.jpg",
		fullName: "Alia Bhatt",
		designation: "Marketing Head",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
];

const TeamMemberItem = ({ member }) => (
	<div className="ezy__team4-item mt-4">
		<img
			src={member.picture}
			alt={member.fullName}
			className="img-fluid w-100"
		/>
		<div className="ezy__team4-content px-3 py-4 px-xl-4">
			<h4 className="mb-1">{member.fullName}</h4>
			<p className="mb-3 small">{member.designation}</p>
			<p className="opacity-50 mb-0">{member.bio}</p>
			<div className="ezy__team4-social-links mt-4">
				{member.socialLinks.map((link, i) => (
					<a href={link.href} className={classNames({ "ms-3": i })} key={i}>
						<FontAwesomeIcon icon={link.icon} />
					</a>
				))}
			</div>
		</div>
	</div>
);

TeamMemberItem.propTypes = {
	member: PropTypes.object.isRequired,
};

const TeamMember4 = () => {
	return (
		<section className="ezy__team4">
			<Container>
				<Row className="justify-content-center mb-4 mb-md-5">
					<Col lg={6} xl={5} className="text-center">
						<h2 className="ezy__team4-heading mb-3">Our Experts Team</h2>
						<p className="ezy__team4-sub-heading mb-0">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at qui.
						</p>
					</Col>
				</Row>
				<Row className="text-center">
					{teamMembers.map((member, i) => (
						<Col md={6} lg={3} key={i}>
							<TeamMemberItem member={member} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default TeamMember4;

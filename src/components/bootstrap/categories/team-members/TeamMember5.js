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

import "./TeamMember5.css";

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
		picture: "https://cdn.easyfrontend.com/pictures/users/user27.jpg",
		fullName: "Akshay Kumar",
		designation: "Founder / CEO",
		bio: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
		fullName: "Raima Ray",
		designation: "Business Head",
		bio: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user17.jpg",
		fullName: "Arjun Kapur",
		designation: "UI Design",
		bio: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/team/team_square_4.jpeg",
		fullName: "Alia Bhatt",
		designation: "Marketing Head",
		bio: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
];

const TeamMemberItem = ({ member, index }) => (
	<Row className="align-items-center justify-content-between mt-5">
		<Col md={5} className={classNames({ "order-md-2": index % 2 })}>
			<img
				src={member.picture}
				alt={member.fullName}
				className="img-fluid w-100 rounded-3"
			/>
		</Col>
		<Col md={6} className="ezy__team5-content mt-3 mt-md-0">
			<h4 className="mb-1">{member.fullName}</h4>
			<p className="mb-4">{member.designation}</p>

			<p className="opacity-50 mb-0">{member.bio}</p>
			<div className="ezy__team5-social-links mt-4">
				{member.socialLinks.map((link, i) => (
					<a href={link.href} className={classNames({ "ms-3": i })} key={i}>
						<FontAwesomeIcon icon={link.icon} />
					</a>
				))}
			</div>
		</Col>
	</Row>
);

TeamMemberItem.propTypes = {
	member: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const TeamMember5 = () => {
	return (
		<section className="ezy__team5">
			<Container>
				<Row className="justify-content-center mb-4 mb-md-5">
					<Col lg={6} xl={5} className="text-center">
						<h2 className="ezy__team5-heading mb-3">Our Experts Team</h2>
						<p className="ezy__team5-sub-heading mb-0">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at qui.
						</p>
					</Col>
				</Row>

				{teamMembers.map((member, i) => (
					<TeamMemberItem member={member} index={i} key={i} />
				))}
			</Container>
		</section>
	);
};

export default TeamMember5;

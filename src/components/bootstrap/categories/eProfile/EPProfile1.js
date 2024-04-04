import React, { useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarCheck,
	faChevronRight,
	faClock,
	faDollarSign,
	faGift,
	faHeart,
	faIdCard,
	faReceipt,
	faShippingFast,
	faUsers,
	faWallet,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./EPProfile1.css";

/*
{
	"react": "React, { useState }",
	"react-bootstrap": "{ Col, Container,Nav, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faCalendarCheck, faChevronRight, faClock, faDollarSign, faGift, faHeart, faIdCard, faReceipt, faShippingFast, faUsers, faWallet }",
    "prop-types": "PropTypes",
}
*/

const sidebarData = [
	{
		type: "link",
		title: "Overview",
	},
	{
		type: "link",
		title: "Orders",
	},
	{
		type: "link",
		title: "Payment",
	},
	{
		type: "link",
		title: "Refund & Return",
	},
	{
		type: "link",
		title: "Feedback",
	},
	{
		type: "link",
		title: "Setting",
	},

	{
		type: "divider",
	},
	{
		type: "link",
		title: "Invite friends",
	},
	{
		type: "divider",
	},

	{
		type: "link",
		title: "Help Center",
	},
	{
		type: "link",
		title: "Manage reports",
	},
	{
		type: "link",
		title: "Suggestion",
	},
	{
		type: "link",
		title: "DS center",
	},
];

const profileList = [
	{
		icon: faHeart,
		text: "Wish List",
	},
	{
		icon: faUsers,
		text: "Following",
	},
	{
		icon: faClock,
		text: "Viewed",
	},
	{
		icon: faIdCard,
		text: "Coupons",
	},
];

const ordersList = [
	{
		icon: faWallet,
		text: "Unpaid",
	},
	{
		icon: faGift,
		text: "To Be Shipped",
	},
	{
		icon: faShippingFast,
		text: "Shipped",
	},
	{
		icon: faCalendarCheck,
		text: "To Be Reviewed",
	},
];

const links = [
	{
		icon: faReceipt,
		text: "My Appeal",
	},
	{
		icon: faDollarSign,
		text: "In dispute",
	},
];

const SideBar = () => {
	const [value, setValue] = useState(0);

	return (
		<div className="ezy__epprofile1-card py-4">
			<h5 className="mx-3 mb-3">Account</h5>

			<Nav className="ezy__epprofile1-sidebar-nav flex-column">
				{sidebarData.map((item, i) => {
					if (item.type === "divider") {
						return <hr className="my-2 mx-3" key={i} />;
					}

					return (
						<li
							className={`px-3 py-2 ${i === value && "active"}`}
							key={i}
							onClick={() => setValue(i)}
						>
							<a href="src/components/bootstrap/categories/eProfile/EPProfile1#!">
								{item.title}
							</a>
						</li>
					);
				})}
			</Nav>
		</div>
	);
};

const Profile = ({ list }) => {
	return (
		<>
			<div className="mb-2">
				<FontAwesomeIcon icon={list.icon} className="fs-2 opacity-25" />
				<i></i>
			</div>
			<p className="mb-0 ezy__epprofile1-icon-title">{list.text}</p>
		</>
	);
};

Profile.propTypes = {
	list: PropTypes.object.isRequired,
};

const Orders = ({ list }) => {
	return (
		<a href="src/components/bootstrap/categories/eProfile/EPProfile1#!">
			<div className="ezy__epprofile1-orders-icon mb-3">
				<FontAwesomeIcon icon={list.icon} className="fs-1" />
			</div>
			<p className="mb-0 ezy__epprofile1-icon-title">{list.text}</p>
		</a>
	);
};

Orders.propTypes = {
	list: PropTypes.object.isRequired,
};

const Links = ({ link }) => {
	return (
		<>
			<hr className="ms-3" />

			<a href="src/components/bootstrap/categories/eProfile/EPProfile1#!">
				<div className="d-flex align-items-center justify-content-between px-3">
					<div className="d-flex align-items-center opacity-75">
						<FontAwesomeIcon icon={link.icon} className="fs-5 opacity-50" />
						<p className="mb-0 ms-2">{link.text}</p>
					</div>
					<FontAwesomeIcon icon={faChevronRight} className="fs-5 opacity-50" />
				</div>
			</a>
		</>
	);
};

Links.propTypes = {
	link: PropTypes.object.isRequired,
};

const EProfile1 = () => {
	return (
		<section className="ezy__epprofile1">
			<Container>
				<Row>
					{/* sidebar  */}
					<Col xs={12} md={3}>
						<SideBar />

						<div className="ezy__epprofile1-card d-flex flex-column text-center p-4 px-3 px-md-4 mt-4">
							<h6 className="fw-normal fs-5 mb-1">EZY Mobile App</h6>
							<p className="small opacity-50 mb-0">Search Anywhere, Anytime!</p>
							<a href="src/components/bootstrap/categories/eProfile/EPProfile1#!">
								<img
									src="https://cdn.easyfrontend.com/pictures/qr-code.png"
									alt=""
									className="img-fluid"
								/>
							</a>
							<a
								href="src/components/bootstrap/categories/eProfile/EPProfile1#!"
								className="small mb-0 opacity-75"
							>
								Search or click to download
							</a>
						</div>
					</Col>

					{/* profile  */}
					<Col xs={12} md={9} className="mt-4 mt-md-0">
						<div className="ezy__epprofile1-card p-4">
							<div className="d-flex align-items-center">
								<img
									src="https://cdn.easyfrontend.com/pictures/team/team_square_3.jpeg"
									alt=""
									width="70"
									height="70"
									className="rounded-circle"
								/>
								<h6 className="fw-bold ms-3">Shafayetur Rahman</h6>
							</div>

							<Row className="mt-4">
								{profileList.map((list, i) => (
									<Col xs={12} sm={3} className="text-center mt-4" key={i}>
										<Profile list={list} />
									</Col>
								))}
							</Row>
						</div>

						<div className="ezy__epprofile1-card p-4 mt-4">
							<div className="d-flex align-items-center justify-content-between">
								<h6 className="fw-bold ms-3">My Orders</h6>
								<a
									href="src/components/bootstrap/categories/eProfile/EPProfile1#!"
									className="opacity-50"
								>
									View All
									<FontAwesomeIcon
										icon={faChevronRight}
										className="ms-2 small"
									/>
								</a>
							</div>

							<hr className="ms-3" />

							<Row className="my-4">
								{ordersList.map((list, i) => (
									<Col xs={12} sm={3} className="text-center mt-4" key={i}>
										<Orders list={list} />
									</Col>
								))}
							</Row>

							{links.map((link, i) => (
								<Links link={link} key={i} />
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default EProfile1;

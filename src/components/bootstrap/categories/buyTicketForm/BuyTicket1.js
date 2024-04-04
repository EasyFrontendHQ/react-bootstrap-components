import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./BuyTicket1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Nav, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faArrowRight }",
	"classnames": "classNames",
	"prop-types": "PropTypes",
}
*/

const tickets = [
	{
		label: "Full conference Pass",
		desc: "2 Days Full Access + Launch + Gifts",
	},
	{
		label: "Full conference Pass",
		desc: "2 Days Full Access + Launch + Gifts",
	},
];

const sponsors = [
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/dark-logo-1.png",
		alt: "Sponsors 1",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/dark-logo-2.png",
		alt: "Sponsors 2",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/dark-logo-3.png",
		alt: "Sponsors 3",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/dark-logo-4.png",
		alt: "Sponsors 4",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/dark-logo-2.png",
		alt: "Sponsors 5",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/dark-logo-4.png",
		alt: "Sponsors 6",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/dark-logo-1.png",
		alt: "Sponsors 7",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/dark-logo-3.png",
		alt: "Sponsors 8",
	},
];

const SponsorItem = ({ item }) => (
	<li className="ezy__buyticket1-sponsors-item">
		<img src={item.src} alt="" />
	</li>
);

SponsorItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Sponsors = ({ sponsors }) => (
	<Nav className="ezy__buyticket1-sponsors text-center">
		{sponsors.map((item, i) => {
			return <SponsorItem item={item} key={i} />;
		})}
	</Nav>
);

Sponsors.propTypes = {
	sponsors: PropTypes.array.isRequired,
};

const Ticket = ({ ticket }) => (
	<Row className="ezy__buyticket1-inner">
		<Col md={6} className="d-flex flex-column">
			<span className="ezy__buyticket1-heading">{ticket.label}</span>
			<span className="ezy__buyticket1-sub-heading">{ticket.desc}</span>
		</Col>
		<Col
			md={6}
			className="d-flex justify-content-md-end align-items-center my-2 m-md-0"
		>
			<Button className="ezy__buyticket1-btn px-5 py-3">
				Order full pass{" "}
				<FontAwesomeIcon
					icon={faArrowRight}
					className="ezy__buyticket1-btn-icon ms-2"
				/>
			</Button>
		</Col>
	</Row>
);

Ticket.propTypes = {
	ticket: PropTypes.object.isRequired,
};

const Buyticket1 = () => {
	return (
		<section className="ezy__buyticket1">
			<div className="ezy__buyticket1-triangle-shape" />

			<Container>
				<div className="ezy__buyticket1-inner-wrapper">
					<Row className="d-flex justify-content-center">
						<Col md={11} lg={10} xl={8} className="ezy__buyticket1-buy-ticket">
							<div className="ezy__buyticket1-buy-ticket-inner">
								<div className="section-header mb-5">
									<h2 className="ezy__buyticket1-headline position-relative">
										Buy Ticket
									</h2>
								</div>

								{tickets.map((ticket, i) => (
									<Col xs={12} className={classNames({ "mt-4": i })} key={i}>
										<Ticket ticket={ticket} />
									</Col>
								))}
							</div>
						</Col>

						<div className="ezy__buyticket1-heading-line">
							<div className="ezy__buyticket1-heading-line-inner">
								<div className="ezy__buyticket1-start">CONFERENCE SPONSORS</div>
								<hr className="ezy__buyticket1-long-line d-inline-block m-0" />
							</div>
						</div>

						<Col md={8} className="mt-5">
							<Sponsors sponsors={sponsors} />
						</Col>
					</Row>
				</div>
			</Container>
		</section>
	);
};

export default Buyticket1;

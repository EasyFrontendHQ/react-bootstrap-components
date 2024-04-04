import React from "react";
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	InputGroup,
	Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheckCircle,
	faMapMarkerAlt,
	faPlus,
	faFileInvoiceDollar,
	faTrashAlt,
	faPhoneAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./EPCheckout4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Form, InputGroup, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faCheckCircle, faMapMarkerAlt, faPlus, faFileInvoiceDollar, faTrashAlt, faPhoneAlt, faEnvelope }",
    "prop-types": "PropTypes",
}
*/
const billingInfo = [
	{
		icon: faMapMarkerAlt,
		value: "Provati-73, East Pirmoholla, Amborkhana, Sylhet",
	},
	{
		icon: faFileInvoiceDollar,
		value: "Bill to the same address",
	},
	{
		icon: faPhoneAlt,
		value: "1742***080",
	},
	{
		icon: faEnvelope,
		value: "xyz@gmail.com",
	},
];

const orders = [
	{
		seller: "NIDIN Factory Online Store",
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_2.png",
		title:
			"Forsining 3d Logo Design Hollow Engraving Black Gold Case Leather Skeleton Mechanical Watches Men Luxury Brand Heren Horloge",
		color: "black",
		country: "China",
		bdPrice: "6,638.89",
		usPrice: "44.07",
		shipper: "BrandName Premium Shipping Estimated",
		shippingTime: "50-53",
		subTotal: "6,638.89",
		shipping: "0.00",
		total: "6,638.89",
	},
	{
		seller: "NIDIN Factory Online Store",
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio20.jpg",
		title:
			"Wholesale Hexagon Pine Solid Wood Brand Women Watch Display Box Custom Logo Wooden Watch Luxury Box",
		color: "black",
		country: "China",
		bdPrice: "6,638.89",
		usPrice: "44.07",
		shipper: "BrandName Premium Shipping Estimated",
		shippingTime: "50-53",
		subTotal: "6,638.89",
		shipping: "0.00",
		total: "6,638.89",
	},
];

const TopBar = () => {
	return (
		<Card className="ezy__epcheckout4-card mb-3">
			<Card.Body className="px-md-4">
				<h6 className="fs-6 fw-bold mb-0">Order Review</h6>
			</Card.Body>
		</Card>
	);
};

const BillingItem = ({ bill }) => (
	<div className="ezy__epcheckout4-content d-flex mb-3">
		<div>
			<FontAwesomeIcon icon={bill.icon} />
		</div>
		<div className="flex-grow-1 px-2">
			<p className="mb-0">{bill.value}</p>
		</div>
		<div>
			<a
				href="src/components/bootstrap/categories/epCheckout/EPCheckout4#!"
				className="fw-bold"
			>
				Edit
			</a>
		</div>
	</div>
);
BillingItem.propTypes = {
	bill: PropTypes.object.isRequired,
};

const PromoCode = () => (
	<div className="mt-4">
		<span className="ezy__epcheckout4-content mb-1">Promo Code</span>
		<InputGroup className="ezy__epcheckout4-promo-code">
			<Form.Control
				type="text"
				className="me-2 rounded-3"
				placeholder="Recipient's username"
			/>
			<Button
				variant=""
				className="ezy__epcheckout4-btn-outline h-auto rounded-3"
			>
				Apply
			</Button>
		</InputGroup>
	</div>
);

const SideBar = () => {
	return (
		<Card className="ezy__epcheckout4-card">
			<Card.Body className="p-md-4">
				<h6 className="fs-5 fw-bold mb-3">Shipping {"&"} Billing</h6>
				{billingInfo.map((bill, i) => (
					<BillingItem bill={bill} key={i} />
				))}

				<h6 className="fs-5 fw-bold mt-4 mb-3">Order Summary</h6>
				<div className="ezy__epcheckout4-content d-flex justify-content-between align-items-center mb-2">
					<span>Subtotal (2 Items)</span>
					<span>BDT 6,638.89</span>
				</div>
				<div className="ezy__epcheckout4-content d-flex justify-content-between align-items-center mb-2">
					<span>Shipping Fee</span>
					<span>BDT 110.00</span>
				</div>

				<PromoCode />

				<hr className="ezy__epcheckout4-hr mb-3 mt-4" />
				<div className="d-flex justify-content-between align-items-center">
					<span className="fw-bold">Total</span>
					<span className="fs-4 fw-bold">US $0.00</span>
				</div>
				<p className="ezy__epcheckout4-content text-end opacity-50 mb-0">
					VAT included, where applicable
				</p>

				<Button variant="" className="ezy__epcheckout4-btn w-100 mt-4 fs-6">
					Proceed to Pay
				</Button>
			</Card.Body>
		</Card>
	);
};

const Quantity = () => {
	return (
		<InputGroup className="ezy__epcheckout4-qty align-items-center">
			<Button variant="" type="button">
				-
			</Button>
			<Form.Control
				type="text"
				placeholder=""
				defaultValue="2"
				aria-label="Example text with button addon"
				aria-describedby="button-addon1"
			/>
			<Button variant="" type="button">
				+
			</Button>
		</InputGroup>
	);
};

const OrderItem = ({ item }) => {
	return (
		<Card className="ezy__epcheckout4-card mb-3">
			<Card.Body className="px-md-4">
				<p className="ezy__epcheckout4-content mb-0">Seller: {item.seller}</p>
				<hr className="ezy__epcheckout4-hr" />
				<Row>
					<Col lg={5}>
						<div className="ezy__epcheckout4-delivery-card d-flex rounded-3 mb-3 p-3">
							<div className="me-2">
								<FontAwesomeIcon icon={faCheckCircle} />
							</div>
							<div>
								<p className="fw-bold mb-2">BDT 55</p>
								<p className="ezy__epcheckout4-content opacity-75 mb-0">
									Home Delivery
								</p>
								<p className="ezy__epcheckout4-content opacity-75 mb-0">
									Estimated Delivery Time: 53-53 Days
								</p>
							</div>
						</div>
					</Col>
				</Row>
				<div className="d-flex">
					<div className="me-3">
						<div className="ezy__epcheckout4-image">
							<a href="src/components/bootstrap/categories/epCheckout/EPCheckout4#!">
								<img src={item.img} alt="" className="img-fluid" />
							</a>
						</div>
					</div>
					<div>
						<Row>
							<Col xs={12} xl={6} xxl={7}>
								<div className="ezy__epcheckout4-heading mb-1">
									<a href="src/components/bootstrap/categories/epCheckout/EPCheckout4#!">
										{item.title}
									</a>
								</div>
								<p className="ezy__epcheckout4-content mb-2">
									<span className="me-3">
										<b>Color</b>: {item.color}
									</span>
									<span>
										<b>Ships From</b>: {item.country}
									</span>
								</p>
								<div>
									<a
										href="src/components/bootstrap/categories/epCheckout/EPCheckout4#!"
										className="ezy__epcheckout4-content d-inline-block mb-1"
									>
										<FontAwesomeIcon icon={faPlus} className="me-1 fs-6" />{" "}
										Leave message
									</a>
								</div>
							</Col>
							<Col xs={12} sm={6} xl={3} className="mt-3 mt-xl-0">
								<div className="mb-3">
									<span className="ezy__epcheckout4-price me-2">
										BDT {item.bdPrice}
									</span>
								</div>
							</Col>
							<Col xs={12} sm={6} xl={3} xxl={2} className="mt-3 mt-xl-0">
								<Quantity />
								<div className="mt-3 text-center">
									<Button
										variant=""
										className="ezy__epcheckout4-btn-text ezy__epcheckout4-theme-color py-0 d-inline-flex justify-content-center align-items-center text-decoration-none"
									>
										<FontAwesomeIcon icon={faTrashAlt} className="fs-6 me-2" />{" "}
										Remove
									</Button>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

OrderItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Epcheckout4 = () => {
	return (
		<section className="ezy__epcheckout4" id="ezy__epcheckout4">
			<Container>
				<Row className="justify-content-center">
					<Col lg={8}>
						<TopBar />
						{orders.map((item, i) => (
							<OrderItem item={item} key={i} />
						))}
					</Col>
					<Col lg={4}>
						<SideBar />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Epcheckout4;

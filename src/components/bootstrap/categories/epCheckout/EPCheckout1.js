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
	faPlus,
	faFileInvoiceDollar,
	faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

import "./EPCheckout1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Form, InputGroup, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faPlus, faFileInvoiceDollar, faChevronDown  }",
	"@fortawesome/free-brands-svg-icons": "{ faCcMastercard }",
    "prop-types": "PropTypes",
}
*/

const orders = [
	{
		seller: "NIDIN Factory Online Store",
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio3.jpg",
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
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio19.jpg",
		title:
			"Factory Direct Sales Stainless Steel Heat Resistant Custom Compression Spring Manufacturer Spring Steel",
		color: "Yellow",
		country: "Japan",
		bdPrice: "2,341.21",
		usPrice: "44.07",
		shipper: "BrandName Premium Shipping Estimated",
		shippingTime: "50-53",
		subTotal: "2,341.21",
		shipping: "0.00",
		total: "2,341.21",
	},
];

const coupons = [
	{
		value: "Store Coupons",
	},
	{
		value: "BusinessName Coupon",
	},
];

const TopBar = () => {
	return (
		<>
			<Card className="ezy__epcheckout1-card mb-3">
				<Card.Body className="p-md-4">
					<h6 className="fs-6 fw-bold mb-3">Shipping Information</h6>
					<Row>
						<Col>
							<p className="ezy__epcheckout1-content">
								<b>Santush Deb Nath, +880 1742031080</b> <br />
								<span className="opacity-75">
									Iron Man Fitness Club, Zindabazar, Sylhet
								</span>
								<br />
								<span className="opacity-75">
									Sylhet, Sylhet Sadar, Bangladesh, 3100
								</span>
							</p>
						</Col>
						<Col xs={"auto"} className="text-end ezy__epcheckout1-content">
							<a
								href="src/components/bootstrap/categories/epCheckout/EPCheckout1#!"
								className="d-inline-block mb-1"
							>
								<FontAwesomeIcon icon={faPlus} className="me-1 fs-6" />
								Add New Address
							</a>
							<br />
							<a href="src/components/bootstrap/categories/epCheckout/EPCheckout1#!">
								Select Other Addresses
							</a>
						</Col>
					</Row>
				</Card.Body>
			</Card>
			<Card className="ezy__epcheckout1-card mb-3">
				<Card.Body className="px-md-4">
					<h6 className="fs-6 fw-bold mb-3">Payment Methods</h6>
					<Row>
						<Col>
							<p className="ezy__epcheckout1-content mb-sm-0">
								<FontAwesomeIcon icon={faCcMastercard} className="me-3" />
								<span>544407******0943</span>
							</p>
						</Col>
						<Col xs={"auto"} className="text-end ezy__epcheckout1-content">
							<a href="src/components/bootstrap/categories/epCheckout/EPCheckout1#!">
								Change
							</a>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</>
	);
};

const CouponItem = ({ coupon }) => (
	<div className="d-flex justify-content-between align-items-center mb-2">
		<span>
			<FontAwesomeIcon
				icon={faFileInvoiceDollar}
				className="me-2 ezy__epcheckout1-theme-color"
			/>
			{coupon.value}
		</span>
		<span>
			<a href="src/components/bootstrap/categories/epCheckout/EPCheckout1#!">
				View <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
			</a>
		</span>
	</div>
);

CouponItem.propTypes = {
	coupon: PropTypes.object.isRequired,
};

const PromoCode = () => (
	<div className="mt-3">
		<span className="ezy__epcheckout1-content mb-1">Promo Code</span>
		<InputGroup className="ezy__epcheckout1-promo-code">
			<Form.Control
				type="text"
				className="me-2 rounded-3"
				placeholder="Recipient's username"
			/>
			<Button
				variant=""
				className="ezy__epcheckout1-btn-outline h-auto rounded-3"
			>
				Apply
			</Button>
		</InputGroup>
	</div>
);
const SideBar = () => {
	return (
		<Card className="ezy__epcheckout1-card">
			<Card.Body className="p-md-4">
				<h6 className="fs-4 fw-bold mb-4">Order Summary</h6>

				{coupons.map((coupon, i) => (
					<CouponItem coupon={coupon} key={i} />
				))}

				<PromoCode />

				<hr className="ezy__epcheckout1-hr mb-3 mt-4" />
				<div className="d-flex justify-content-between align-items-center">
					<span className="fw-bold">Total</span>
					<span className="fs-4 fw-bold">US $1231.00</span>
				</div>
				<p className="ezy__epcheckout1-content text-end opacity-50 mb-0">
					Approximately BDT 94,856.76
				</p>

				<Button className="ezy__epcheckout1-btn w-100 mt-4 fs-6">
					Place Order
				</Button>
			</Card.Body>
		</Card>
	);
};

const Quantity = () => {
	return (
		<InputGroup className="ezy__epcheckout1-qty align-items-center">
			<Button variant="" type="button">
				-
			</Button>
			<Form.Control type="text" placeholder="" defaultValue="2" />
			<Button variant="" type="button">
				+
			</Button>
		</InputGroup>
	);
};

const OrderItem = ({ item }) => {
	return (
		<div className="mt-4">
			<p className="ezy__epcheckout1-content mb-0">Seller: {item.seller}</p>
			<hr className="ezy__epcheckout1-hr" />
			<div className="d-flex">
				<div className="me-3">
					<div className="ezy__epcheckout1-image">
						<a href="src/components/bootstrap/categories/epCheckout/EPCheckout1#!">
							<img src={item.img} alt="" className="img-fluid" />
						</a>
					</div>
				</div>
				<div>
					<Row>
						<Col>
							<div className="ezy__epcheckout1-heading mb-1">
								<a href="src/components/bootstrap/categories/epCheckout/EPCheckout1#!">
									{item.title}
								</a>
							</div>
							<p className="ezy__epcheckout1-content mb-2">
								<span className="me-3">
									<b>Color</b>: {item.color}
								</span>
								<span>
									<b>Ships From</b>: {item.country}
								</span>
							</p>
							<div className="mb-2">
								<span className="ezy__epcheckout1-price me-2">
									BDT {item.bdPrice}
								</span>
							</div>
							<p className="ezy__epcheckout1-content mb-2">
								<a href="src/components/bootstrap/categories/epCheckout/EPCheckout1#!">
									Shipping: US ${item.usPrice}
								</a>{" "}
								via {item.shipper} Delivery Time:{item.shippingTime} Days
							</p>
							<div>
								<a
									href="src/components/bootstrap/categories/epCheckout/EPCheckout1#!"
									className="ezy__epcheckout1-content d-inline-block mb-1"
								>
									<FontAwesomeIcon icon={faPlus} className="me-1 fs-6" />
									Leave message
								</a>
							</div>
						</Col>
						<Col xs={12} md={"auto"} className="mt-3 mt-md-0">
							<Quantity />
						</Col>
					</Row>
				</div>
			</div>
			<hr className="ezy__epcheckout1-hr" />
			<Row className="justify-content-end">
				<Col sm={10} md={6} lg={5}>
					<div className="ezy__epcheckout1-content d-flex justify-content-between align-items-center mb-1">
						<span className="opacity-50">Subtotal</span>
						<span className="opacity-50">BDT {item.subTotal}</span>
					</div>
					<div className="ezy__epcheckout1-content d-flex justify-content-between align-items-center mb-1">
						<span className="opacity-75">
							<FontAwesomeIcon
								icon={faFileInvoiceDollar}
								className="me-2 ezy__epcheckout1-theme-color"
							/>
							Store Coupons
						</span>
						<span>
							<a href="src/components/bootstrap/categories/epCheckout/EPCheckout1#!">
								View
								<FontAwesomeIcon icon={faChevronDown} className="ms-1" />
							</a>
						</span>
					</div>
					<div className="ezy__epcheckout1-content d-flex justify-content-between align-items-center mb-1">
						<span className="opacity-50">Shipping</span>
						<span className="opacity-50">BDT {item.shipping}</span>
					</div>
					<div className="ezy__epcheckout1-content d-flex justify-content-between align-items-center">
						<span className="fw-bold">Total</span>
						<span className="fw-bold">BDT {item.total}</span>
					</div>
				</Col>
			</Row>
		</div>
	);
};

OrderItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Epcheckout1 = () => {
	return (
		<section className="ezy__epcheckout1" id="ezy__epcheckout1">
			<Container>
				<Row className="justify-content-center">
					<Col lg={8}>
						<TopBar />
						<Card className="ezy__epcheckout1-card mb-3">
							<Card.Body className="px-md-4">
								<h6 className="fs-6 fw-bold mb-0">Order Review</h6>
								{orders.map((item, i) => (
									<OrderItem item={item} key={i} />
								))}
							</Card.Body>
						</Card>
					</Col>
					<Col lg={4}>
						<SideBar />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Epcheckout1;

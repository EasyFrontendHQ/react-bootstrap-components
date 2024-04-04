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
	faFileInvoiceDollar,
	faTrashAlt,
	faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./EPCheckout5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Form, InputGroup, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faFileInvoiceDollar, faTrashAlt, faChevronDown, }",
    "prop-types": "PropTypes",
}
*/

const coupons = [
	{
		value: "Store Coupons",
	},
	{
		value: "BusinessName Coupon",
	},
];

const orders = [
	{
		seller: "NIDIN Factory Online Store",
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16.jpg",
		title:
			"PD-04 Carbon Fiber Insole Poron Plantar Fasciitis Arch Support Flat Feet Orthopedic Insoles Custom Orthotics",
		color: "black",
		country: "China",
		bdPrice: "6,638.89",
		subTotal: "6,638.89",
		shipping: "0.00",
		total: "6,638.89",
	},
	{
		seller: "NIDIN Factory Online Store",
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio12.jpg",
		title:
			"Factory Direct Queendom Certipur-Us Luxury Comfortable Sell Top Spring Bed 'Matress' Hotel Mattress Springs",
		color: "Gray ",
		country: "Russia",
		bdPrice: "6,638.89",
		subTotal: "6,638.89",
		shipping: "0.00",
		total: "6,638.89",
	},
	{
		seller: "NIDIN Factory Online Store",
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio3.jpg",
		title:
			"Forsining 3d Logo Design Hollow Engraving Black Gold Case Leather Skeleton Mechanical Watches Men Luxury Brand Heren Horloge",
		color: "black",
		country: "China",
		bdPrice: "6,638.89",
		subTotal: "6,638.89",
		shipping: "0.00",
		total: "6,638.89",
	},
	{
		seller: "NIDIN Factory Online Store",
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio8.jpg",
		title:
			"ABUK Home Appliance Surge Protector Voltage Brownout Plug Outlet Power Strip Surge Protector With Pass Button",
		color: "black",
		country: "China",
		bdPrice: "6,638.89",
		subTotal: "6,638.89",
		shipping: "0.00",
		total: "6,638.89",
	},
];

const CouponItem = ({ coupon }) => (
	<div className="d-flex justify-content-between align-items-center mb-2">
		<span>
			<FontAwesomeIcon
				icon={faFileInvoiceDollar}
				className="me-2 ezy__epcheckout3-theme-color"
			/>
			{coupon.value}
		</span>
		<span>
			<a href="src/components/bootstrap/categories/epCheckout/EPCheckout5#!">
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
		<span className="ezy__epcheckout3-content mb-1">Promo Code</span>
		<InputGroup className="ezy__epcheckout3-promo-code">
			<Form.Control
				type="text"
				className="me-2 rounded-3"
				placeholder="Recipient's username"
			/>
			<Button
				variant=""
				className="ezy__epcheckout3-btn-outline h-auto rounded-3"
			>
				Apply
			</Button>
		</InputGroup>
	</div>
);
const SideBar = () => {
	return (
		<Card className="ezy__epcheckout3-card">
			<Card.Body className="p-md-4">
				<h6 className="fs-4 fw-bold mb-4">Order Summary</h6>

				{coupons.map((coupon, i) => (
					<CouponItem coupon={coupon} key={i} />
				))}

				<PromoCode />

				<hr className="ezy__epcheckout3-hr mb-3 mt-4" />
				<div className="d-flex justify-content-between align-items-center">
					<span className="fw-bold">Total</span>
					<span className="fs-4 fw-bold">US $1231.00</span>
				</div>
				<p className="ezy__epcheckout3-content text-end opacity-50 mb-0">
					Approximately BDT 94,856.76
				</p>

				<Button className="ezy__epcheckout3-btn w-100 mt-4 fs-6">
					Place Order
				</Button>
			</Card.Body>
		</Card>
	);
};

const Quantity = () => {
	return (
		<InputGroup className="ezy__epcheckout5-qty mt-3">
			<Button
				variant=""
				className="px-3 py-0 d-inline-flex justify-content-center"
				type="button"
			>
				-
			</Button>
			<Form.Control
				type="text"
				placeholder=""
				defaultValue="2"
				aria-label="Example text with button addon"
				aria-describedby="button-addon1"
			/>
			<Button
				variant=""
				className="px-3 py-0 d-inline-flex justify-content-center"
				type="button"
			>
				+
			</Button>
		</InputGroup>
	);
};

const OrderItem = ({ item, index }) => {
	return (
		<Card className="ezy__epcheckout5-card mb-3">
			<Card.Body className="px-md-4">
				<Row>
					<Col lg={6}>
						<p className="ezy__epcheckout5-content mb-0">
							Package {index + 1} of {orders.length}
						</p>
					</Col>
					<Col lg={6} className="text-lg-end">
						<p className="ezy__epcheckout5-content mb-0">
							Shipped by <b>Md. Parves Hossain</b>
						</p>
					</Col>
				</Row>
			</Card.Body>
			<hr className="ezy__epcheckout5-hr my-0" />
			<Card.Body className="d-flex align-items-start p-md-4">
				<div className="ezy__epcheckout5-image me-3 me-md-4">
					<a href="src/components/bootstrap/categories/epCheckout/EPCheckout5#!">
						<img src={item.img} alt="" className="img-fluid" />
					</a>
				</div>
				<div>
					<div className="ezy__epcheckout5-heading mb-2">
						<a href="src/components/bootstrap/categories/epCheckout/EPCheckout5#!">
							{item.title}
						</a>
					</div>
					<p className="ezy__epcheckout5-content mb-3">
						<span className="me-3">
							<b>Color</b>: {item.color}
						</span>
						<span>
							<b>Ships From</b>: {item.country}
						</span>
					</p>
					<div>
						<h3 className="ezy__epcheckout5-price mb-0">Rs. {item.bdPrice}</h3>
						<Quantity />
					</div>
				</div>
				<div>
					<Button
						variant=""
						className="ezy__epcheckout5-del d-inline-flex align-items-center rounded-circle"
					>
						<FontAwesomeIcon icon={faTrashAlt} className="fs-6" />
					</Button>
				</div>
			</Card.Body>
			<hr className="ezy__epcheckout5-hr my-0" />
			<Card.Body className="p-md-4">
				<Row className="justify-content-end">
					<Col sm={10} md={6} lg={5}>
						<div className="ezy__epcheckout5-content d-flex justify-content-between align-items-center mb-1">
							<span className="opacity-75">Subtotal</span>
							<span className="opacity-75">BDT {item.subTotal}</span>
						</div>
						<div className="ezy__epcheckout5-content d-flex justify-content-between align-items-center mb-1">
							<span>
								<FontAwesomeIcon
									icon={faFileInvoiceDollar}
									className="me-2 ezy__epcheckout5-theme-color"
								/>
								Store Coupons
							</span>
							<span className="fw-bold">
								<a href="src/components/bootstrap/categories/epCheckout/EPCheckout5#!">
									View
									<FontAwesomeIcon icon={faChevronDown} className="ms-1" />
								</a>
							</span>
						</div>
						<div className="ezy__epcheckout5-content d-flex justify-content-between align-items-center mb-1">
							<span className="opacity-75">Shipping</span>
							<span className="opacity-75">BDT {item.shipping}</span>
						</div>
						<div className="ezy__epcheckout5-content d-flex justify-content-between align-items-center">
							<span className="fw-bold">Total</span>
							<span className="fw-bold">BDT {item.total}</span>
						</div>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

OrderItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const Epcheckout5 = () => {
	return (
		<section className="ezy__epcheckout5" id="ezy__epcheckout5">
			<Container>
				<Row className="justify-content-center">
					<Col lg={8}>
						{orders.map((item, i) => (
							<OrderItem item={item} index={i} key={i} />
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

export default Epcheckout5;

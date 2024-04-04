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
	faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

import "./EPCheckout2.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Card, Col, Container, Form, InputGroup, Row }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faPlus, faFileInvoiceDollar, faChevronDown, faTrashAlt }",
	"@fortawesome/free-brands-svg-icons": "{ faCcMastercard }",
    "prop-types": "PropTypes",
}
*/

const orders = [
	{
		seller: "NIDIN Factory Online Store",
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio17.jpg",
		title:
			"Iron Handle 60 90 Sheets Clothes Pet Dog Cat Hair Adhesive Sticky Lint. Storage Welded Nesting Metal Foldable Logistics Steel Wire Mesh",
		color: "Green",
		country: "Korea",
		bdPrice: "3,112.12",
		usPrice: "44.07",
		shipper: "BrandName Premium Shipping Estimated",
		shippingTime: "50-53",
		subTotal: "3,112.12",
		shipping: "0.00",
		total: "3,112.12",
	},
	{
		seller: "NIDIN Factory Online Store",
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio15.jpg",
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
			<Card className="ezy__epcheckout2-card mb-3">
				<Card.Body className="p-md-4">
					<h6 className="fs-6 fw-bold mb-3">Shipping Information</h6>
					<Row>
						<Col>
							<p className="ezy__epcheckout2-content">
								<b>Santush Deb Nath, +880 1742031080</b> <br />
								<span className="opacity-75">
									Iron Man Fitness Club, Zindabazar, Sylhet
								</span>{" "}
								<br />
								<span className="opacity-75">
									Sylhet, Sylhet Sadar, Bangladesh, 3100
								</span>
							</p>
						</Col>
						<Col xs={"auto"} className="text-end ezy__epcheckout2-content">
							<a
								href="src/components/bootstrap/categories/epCheckout/EPCheckout2#!"
								className="d-inline-block mb-1"
							>
								<FontAwesomeIcon icon={faPlus} className="me-1 fs-6" />
								Add New Address
							</a>
							<br />
							<a href="src/components/bootstrap/categories/epCheckout/EPCheckout2#!">
								Select Other Addresses
							</a>
						</Col>
					</Row>
				</Card.Body>
			</Card>
			<Card className="ezy__epcheckout2-card mb-3">
				<Card.Body className="px-md-4">
					<h6 className="fs-6 fw-bold mb-3">Payment Methods</h6>
					<Row>
						<Col>
							<p className="ezy__epcheckout2-content mb-sm-0">
								<FontAwesomeIcon icon={faCcMastercard} className="me-3" />
								<span>544407******0943</span>
							</p>
						</Col>
						<Col xs={"auto"} className="text-end ezy__epcheckout2-content">
							<a href="src/components/bootstrap/categories/epCheckout/EPCheckout2#!">
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
				className="me-2 ezy__epcheckout2-theme-color"
			/>
			{coupon.value}
		</span>
		<span>
			<a href="src/components/bootstrap/categories/epCheckout/EPCheckout2#!">
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
		<span className="ezy__epcheckout2-content mb-1">Promo Code</span>
		<InputGroup className="ezy__epcheckout2-promo-code">
			<Form.Control
				type="text"
				className="me-2 rounded-3"
				placeholder="Recipient's username"
			/>
			<Button
				variant=""
				className="ezy__epcheckout2-btn-outline h-auto rounded-3"
			>
				Apply
			</Button>
		</InputGroup>
	</div>
);
const SideBar = () => {
	return (
		<Card className="ezy__epcheckout2-card">
			<Card.Body className="p-md-4">
				<h6 className="fs-4 fw-bold mb-4">Order Summary</h6>

				{coupons.map((coupon, i) => (
					<CouponItem coupon={coupon} key={i} />
				))}

				<PromoCode />

				<hr className="ezy__epcheckout2-hr mb-3 mt-4" />
				<div className="d-flex justify-content-between align-items-center">
					<span className="fw-bold">Total</span>
					<span className="fs-4 fw-bold">US $1231.21</span>
				</div>
				<p className="ezy__epcheckout2-content text-end opacity-50 mb-0">
					Approximately BDT 94,856.76
				</p>

				<Button className="ezy__epcheckout2-btn w-100 mt-4 fs-6">
					Place Order
				</Button>
			</Card.Body>
		</Card>
	);
};

const Quantity = () => {
	return (
		<InputGroup className="ezy__epcheckout2-qty align-items-center">
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
		<div className="mt-4">
			<p className="ezy__epcheckout2-content mb-0">Seller: {item.seller}</p>
			<hr className="ezy__epcheckout2-hr" />
			<div className="d-flex">
				<div className="me-3">
					<div className="ezy__epcheckout2-image">
						<a href="src/components/bootstrap/categories/epCheckout/EPCheckout2#!">
							<img src={item.img} alt="" className="img-fluid" />
						</a>
					</div>
				</div>
				<div>
					<Row>
						<Col xs={12} xl={6} xxl={7}>
							<div className="ezy__epcheckout2-heading mb-1">
								<a href="src/components/bootstrap/categories/epCheckout/EPCheckout2#!">
									{item.title}
								</a>
							</div>
							<p className="ezy__epcheckout2-content mb-2">
								<span className="me-3">
									<b>Color</b>: {item.color}
								</span>
								<span>
									<b>Ships From</b>: {item.country}
								</span>
							</p>
							<div>
								<a
									href="src/components/bootstrap/categories/epCheckout/EPCheckout2#!"
									className="ezy__epcheckout2-content d-inline-block mb-1"
								>
									<FontAwesomeIcon icon={faPlus} className="me-1 fs-6" /> Leave
									message
								</a>
							</div>
						</Col>
						<Col xs={12} sm={6} xl={3} className="mt-3 mt-xl-0">
							<div className="mb-3">
								<span className="ezy__epcheckout2-price me-2">
									BDT {item.bdPrice}
								</span>
							</div>
						</Col>
						<Col xs={12} sm={6} xl={3} xxl={2} className="mt-3 mt-xl-0">
							<Quantity />
							<div className="mt-3 text-center">
								<Button
									variant=""
									className="ezy__epcheckout2-btn-text ezy__epcheckout2-theme-color py-0 d-inline-flex justify-content-center align-items-center text-decoration-none"
								>
									<FontAwesomeIcon icon={faTrashAlt} className="fs-6 me-2" />
									Remove
								</Button>
							</div>
						</Col>
					</Row>
				</div>
			</div>
			<hr className="ezy__epcheckout2-hr" />
			<Row className="justify-content-end">
				<Col sm={10} md={6} lg={5}>
					<div className="ezy__epcheckout2-content d-flex justify-content-between align-items-center mb-1">
						<span className="opacity-50">Subtotal</span>
						<span className="opacity-50">BDT {item.subTotal}</span>
					</div>
					<div className="ezy__epcheckout2-content d-flex justify-content-between align-items-center mb-1">
						<span className="opacity-75">
							<FontAwesomeIcon
								icon={faFileInvoiceDollar}
								className="me-2 ezy__epcheckout2-theme-color"
							/>
							Store Coupons
						</span>
						<span>
							<a href="src/components/bootstrap/categories/epCheckout/EPCheckout2#!">
								View
								<FontAwesomeIcon icon={faChevronDown} className="ms-1" />
							</a>
						</span>
					</div>
					<div className="ezy__epcheckout2-content d-flex justify-content-between align-items-center mb-1">
						<span className="opacity-50">Shipping</span>
						<span className="opacity-50">BDT {item.shipping}</span>
					</div>
					<div className="ezy__epcheckout2-content d-flex justify-content-between align-items-center">
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

const Epcheckout2 = () => {
	return (
		<section className="ezy__epcheckout2" id="ezy__epcheckout2">
			<Container>
				<Row className="justify-content-center">
					<Col lg={8}>
						<TopBar />
						<Card className="ezy__epcheckout2-card mb-3">
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

export default Epcheckout2;

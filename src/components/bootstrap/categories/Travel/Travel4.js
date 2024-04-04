import React, { useState } from "react";
import {
	Button,
	Col,
	Container,
	Form,
	Row,
	Accordion,
	Collapse,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronDown,
	faChevronUp,
	faCloudMoon,
	faCloudSun,
	faMoon,
	faPaperPlane,
	faSun,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Travel4.css";

/*
{
	"react": "React, { useState }",
	"react-bootstrap": "{ Button, Col, Container, Form, Row, Accordion, Collapse, }",
	"@fortawesome/react-fontawesome": { FontAwesomeIcon },
	"@fortawesome/free-solid-svg-icons": { faChevronDown, faChevronUp, faCloudMoon, faCloudSun, faMoon, faPaperPlane, faSun, },
	"classnames": "classNames",
	"prop-types": "PropTypes",
}
*/

const departTimeItemData = [
	{
		icon: faCloudSun,
		text: "Before 6 am",
	},
	{
		icon: faCloudMoon,
		text: "Before 6 am",
	},
	{
		icon: faSun,
		text: "Before 6 am",
	},
	{
		icon: faMoon,
		text: "Before 6 am",
	},
];

const stopsData = [
	{
		value: "0",
	},
	{
		value: "1",
	},
	{
		value: "2+",
	},
];

const airlinesData = [
	{
		label: "Aeroflot",
	},
	{
		label: "Aeroflot",
	},
	{
		label: "Aeroflot",
	},
	{
		label: "Aeroflot",
	},
	{
		label: "Aeroflot",
	},
	{
		label: "Aeroflot",
	},
];

const flightData = [
	{
		firstAirlineName: "American Airlines BA- 3271",
		firstAirlineImg: "https://cdn.easyfrontend.com/pictures/airlines_logo1.png",
		firstFlightTime: "9:45 PM",
		firstFlightDate: "Jun 04, SUN",
		firstFlightPlace: "Istambul IST",
		secondAirlineName: "American Airlines BA- 3271",
		secondAirlineImg:
			"https://cdn.easyfrontend.com/pictures/airlines_logo1.png",
		secondFlightTime: "9:45 PM",
		secondFlightDate: "Jun 04, SUN",
		secondFlightPlace: "Istambul IST",
		totalTime: "31h 10m",
		totalStops: "2 Stops",
		totalPrice: "$600",
	},
	{
		firstAirlineName: "American Airlines BA- 3271",
		firstAirlineImg: "https://cdn.easyfrontend.com/pictures/airlines_logo1.png",
		firstFlightTime: "9:45 PM",
		firstFlightDate: "Jun 04, SUN",
		firstFlightPlace: "Istambul IST",
		secondAirlineName: "American Airlines BA- 3271",
		secondAirlineImg:
			"https://cdn.easyfrontend.com/pictures/airlines_logo1.png",
		secondFlightTime: "9:45 PM",
		secondFlightDate: "Jun 04, SUN",
		secondFlightPlace: "Istambul IST",
		totalTime: "31h 10m",
		totalStops: "2 Stops",
		totalPrice: "$600",
	},
	{
		firstAirlineName: "American Airlines BA- 3271",
		firstAirlineImg: "https://cdn.easyfrontend.com/pictures/airlines_logo1.png",
		firstFlightTime: "9:45 PM",
		firstFlightDate: "Jun 04, SUN",
		firstFlightPlace: "Istambul IST",
		secondAirlineName: "American Airlines BA- 3271",
		secondAirlineImg:
			"https://cdn.easyfrontend.com/pictures/airlines_logo1.png",
		secondFlightTime: "9:45 PM",
		secondFlightDate: "Jun 04, SUN",
		secondFlightPlace: "Istambul IST",
		totalTime: "31h 10m",
		totalStops: "2 Stops",
		totalPrice: "$600",
	},
	{
		firstAirlineName: "American Airlines BA- 3271",
		firstAirlineImg: "https://cdn.easyfrontend.com/pictures/airlines_logo1.png",
		firstFlightTime: "9:45 PM",
		firstFlightDate: "Jun 04, SUN",
		firstFlightPlace: "Istambul IST",
		secondAirlineName: "American Airlines BA- 3271",
		secondAirlineImg:
			"https://cdn.easyfrontend.com/pictures/airlines_logo1.png",
		secondFlightTime: "9:45 PM",
		secondFlightDate: "Jun 04, SUN",
		secondFlightPlace: "Istambul IST",
		totalTime: "31h 10m",
		totalStops: "2 Stops",
		totalPrice: "$600",
	},
	{
		firstAirlineName: "American Airlines BA- 3271",
		firstAirlineImg: "https://cdn.easyfrontend.com/pictures/airlines_logo1.png",
		firstFlightTime: "9:45 PM",
		firstFlightDate: "Jun 04, SUN",
		firstFlightPlace: "Istambul IST",
		secondAirlineName: "American Airlines BA- 3271",
		secondAirlineImg:
			"https://cdn.easyfrontend.com/pictures/airlines_logo1.png",
		secondFlightTime: "9:45 PM",
		secondFlightDate: "Jun 04, SUN",
		secondFlightPlace: "Istambul IST",
		totalTime: "31h 10m",
		totalStops: "2 Stops",
		totalPrice: "$600",
	},
];

const FlightItem = ({ item }) => {
	return (
		<Row className="mt-4">
			<Col xs={12} lg={10} className="pe-lg-0">
				<div className="ezy__travel4-card ezy__travel4-details align-items-center h-100 p-2">
					{/* airlines name  */}
					<div>
						<div className="d-flex align-items-center">
							<div className="me-2">
								<img
									src={item.firstAirlineImg}
									alt=""
									className="img-fluid"
									width="47"
								/>
							</div>
							<div>
								<h4 className="mb-0 fs-6 opacity-75">
									{item.firstAirlineName}
								</h4>
							</div>
						</div>
						<div className="d-flex align-items-center mt-3">
							<div className="me-2">
								<img
									src={item.secondAirlineImg}
									alt=""
									className="img-fluid"
									width="47"
								/>
							</div>
							<div>
								<h4 className="mb-0 fs-6 opacity-75">
									{item.secondAirlineName}
								</h4>
							</div>
						</div>
					</div>
					{/* time  */}
					<div className="text-center">
						<h4 className="fs-2">{item.firstFlightTime}</h4>
						<p className="mb-1 mt-2 opacity-50">{item.firstFlightDate}</p>
						<p className="mb-0 opacity-100 fw-bold fs-6">
							{item.firstFlightPlace}
						</p>
					</div>
					{/* stops  */}
					<div className="text-center">
						<p className="mb-0 opacity-50">{item.totalTime}</p>
						<hr className="ezy__travel4-divider my-2" />
						<p className="mb-0 opacity-50">{item.totalStops}</p>
					</div>

					{/* time  */}
					<div className="text-center">
						<h4 className="fs-2">{item.secondFlightTime}</h4>
						<p className="mb-1 mt-2 opacity-50">{item.secondFlightDate}</p>
						<p className="mb-0 opacity-100 fw-bold fs-6">
							{item.secondFlightPlace}
						</p>
					</div>
				</div>
			</Col>
			<Col xs={12} lg={2} className="ps-lg-0">
				<div className="ezy__travel4-card ezy__travel4-price p-2 p-lg-4 text-center h-100 d-flex flex-column align-items-center justify-content-center ms-0">
					<h2 className="fw-bold">{item.totalPrice}</h2>
					<Button variant="" className="ezy__travel4-btn fw-bold">
						Book
					</Button>
				</div>
			</Col>
		</Row>
	);
};
FlightItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const SidebarAccordion = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(true);
	const toggleFaq = () => setIsOpen(!isOpen);

	return (
		<div className="ezy__travel4-accordion">
			<Button
				variant=""
				className={classNames(
					"p-3 p-lg-4 w-100 text-start d-flex justify-content-between align-items-center ezy__travel4-btn-collapse",
					{ active: isOpen }
				)}
				type="button"
				onClick={toggleFaq}
			>
				<h5 className="mb-0">{title}</h5>
				<FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
			</Button>
			<Collapse in={isOpen}>
				<div className="ezy__travel4-content px-3 px-lg-4 pb-lg-4 mt-4">
					{children}
				</div>
			</Collapse>
		</div>
	);
};

SidebarAccordion.propTypes = {
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	children: PropTypes.node,
};

const PriceRange = () => {
	return (
		<SidebarAccordion title="Price Range">
			<div>
				<Form.Label
					htmlFor="ezy__travel4-range1"
					className="fw-bold mb-2 opacity-75"
				>
					Min Price($200)
				</Form.Label>
				<Form.Range id="ezy__travel4-range1" />
			</div>
			<div>
				<Form.Label
					htmlFor="ezy__travel4-range1"
					className="fw-bold mb-2 opacity-75"
				>
					Max Price($2000)
				</Form.Label>
				<Form.Range type="range" id="ezy__travel4-range1" />
			</div>
		</SidebarAccordion>
	);
};

const DepartTimeItem = ({ item, index }) => {
	return (
		<Button
			variant=""
			className={classNames("w-100 ezy__travel4-depart-option", {
				"mt-2": index,
			})}
		>
			<FontAwesomeIcon icon={item.icon} className="me-3" />
			{item.text}
		</Button>
	);
};
DepartTimeItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number,
};

const DepartTime = () => {
	return (
		<SidebarAccordion title="Depart Time">
			{departTimeItemData.map((item, i) => (
				<DepartTimeItem key={i} item={item} index={i} />
			))}
		</SidebarAccordion>
	);
};

const StopsItem = ({ item }) => {
	return (
		<Button variant="" className="w-100 ezy__travel4-depart-option">
			{item.value}
		</Button>
	);
};
StopsItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Stops = () => {
	return (
		<SidebarAccordion title="Stops">
			<Row>
				{stopsData.map((item, i) => (
					<Col xs={4} key={i}>
						<StopsItem item={item} />
					</Col>
				))}
			</Row>
		</SidebarAccordion>
	);
};

const AirlinesItem = ({ item, index }) => {
	return (
		<Form.Check className={index && "mt-3"}>
			<Form.Check.Input className="me-3" type="checkbox" value="" />
			<Form.Check.Label> {item.label} </Form.Check.Label>
		</Form.Check>
	);
};
AirlinesItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number,
};

const Airlines = () => {
	return (
		<SidebarAccordion title="Airlines">
			<div>
				{airlinesData.map((item, i) => (
					<AirlinesItem key={i} item={item} index={i} />
				))}
			</div>
		</SidebarAccordion>
	);
};

const Travel4 = () => {
	return (
		<section className="ezy__travel4">
			<Container>
				{/* header portion  */}
				<Row>
					<Col xs={12}>
						<Row className="ezy__travel4-header p-4 p-lg-5 rounded-3 border-0">
							<Col sm={8} className="d-flex">
								<div className="ezy__travel4-plane-icon d-flex align-items-center justify-content-center rounded-circle me-4">
									<FontAwesomeIcon icon={faPaperPlane} />
								</div>
								<div>
									<h3>Los Angeles-Istanbul</h3>
									<p className="mb-0 opacity-75 fw-normal">
										JUN 04,SAT | 2TRAVELLERS
									</p>
								</div>
							</Col>
							<Col
								sm={4}
								className="d-flex align-items-center justify-content-center justify-content-sm-end"
							>
								<Button
									variant=""
									className="ezy__travel4-btn fw-bold mt-4 mt-sm-0"
								>
									Change
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>

				{/* body portion  */}
				<Row className="mt-5">
					{/* filter  */}
					<Col lg={3} className="ps-md-0">
						<div className="ezy__travel4-filters h-100 rounded pb-4">
							<div className="ezy__travel4-header p-3 text-center">
								<h3 className="mb-0">FILTERS</h3>
							</div>

							<Form action="src/components/bootstrap/categories/Travel/Travel4">
								<Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen>
									{/* price range  */}
									<PriceRange />

									{/* depart time  */}
									<DepartTime />

									{/* stops  */}
									<Stops />

									{/* airlines  */}
									<Airlines />
								</Accordion>
								<div className="px-4 mt-4">
									<Button variant="" className="w-100 ezy__travel4-btn">
										Reset All Filters
									</Button>
								</div>
							</Form>
						</div>
					</Col>

					{/* results  */}
					<Col lg={9} className="mt-4 mt-lg-0">
						<Row className="justify-content-between">
							<Col xs={12} sm={6}>
								<h4 className="mb-0">565 Results</h4>
							</Col>
							<Col xs={12} sm={4} className="text-end">
								<Form
									action="src/components/bootstrap/categories/Travel/Travel4"
									className="d-flex align-items-center"
								>
									<h5 className="fw-normal mb-0 me-3 text-nowrap">Sort By:</h5>
									<Form.Select aria-label="Default select example">
										<option selected>Price per Adult</option>
										<option value="1">Price per Child</option>
									</Form.Select>
								</Form>
							</Col>
						</Row>

						<div>
							{flightData.map((item, i) => (
								<FlightItem item={item} key={i} />
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Travel4;

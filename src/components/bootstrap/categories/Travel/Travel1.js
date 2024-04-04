import React, { useState } from "react";
import {
	Button,
	Col,
	Container,
	Form,
	Row,
	InputGroup,
	Carousel,
	Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faArrowRight,
	faSync,
} from "@fortawesome/free-solid-svg-icons";

import "./Travel1.css";

/*
{
	"react": "React, { useState }",
	"react-bootstrap": "{ Button, Col, Container, Form, Row, InputGroup, Carousel, Card }",
    "@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
    "@fortawesome/free-solid-svg-icons": "{ faArrowLeft, faArrowRight, faSync, }",
}
*/
const carouselData = [
	{
		heading: "Your Journey Begins",
		subHeading:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere ipsum molestie sem volutpat, non imperdiet leo porttitor. Nullam tortor nibh, dictum vitae porttitor eu, pharetra nec tellus.",
	},
	{
		heading: "Your Journey Begins",
		subHeading:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere ipsum molestie sem volutpat, non imperdiet leo porttitor. Nullam tortor nibh, dictum vitae porttitor eu, pharetra nec tellus.",
	},
	{
		heading: "Your Journey Begins",
		subHeading:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere ipsum molestie sem volutpat, non imperdiet leo porttitor. Nullam tortor nibh, dictum vitae porttitor eu, pharetra nec tellus.",
	},
];

const OrderForm = () => {
	return (
		<Form action="src/components/bootstrap/categories/Travel/Travel1">
			{/* from  */}
			<Form.Group className="d-flex align-items-center">
				<Form.Control type="text" id="from" placeholder="From" />
				<FontAwesomeIcon
					icon={faSync}
					className="ezy__travel1-refresh-icon ms-2"
				/>
			</Form.Group>

			{/* to  */}
			<Form.Group>
				<Form.Control type="text" id="to" placeholder="To" />
			</Form.Group>

			{/* depart  */}
			<Form.Group>
				<Form.Control type="date" id="depart" placeholder="depart" />
			</Form.Group>

			{/* way  */}
			<Form.Group>
				<InputGroup>
					<Form.Select type="inputWay">
						<option defaultValue={1}>One Way</option>
						<option>Multiple Way</option>
					</Form.Select>
				</InputGroup>
			</Form.Group>

			{/* passengers  */}
			<Form.Group>
				<Form.Select>
					<option>1 Passenger</option>
					<option>2 Passengers</option>
					<option>3 Passengers</option>
					<option>4 Passengers</option>
					<option>5 Passengers</option>
				</Form.Select>
			</Form.Group>

			{/* type  */}
			<Form.Group>
				<Form.Select>
					<option>Business</option>
					<option>Economy</option>
					<option>1st ClassName</option>
				</Form.Select>
			</Form.Group>

			{/* button  */}
			<div>
				<Button variant="" className=" ezy__travel1-search-btn w-100">
					Search
				</Button>
			</div>
		</Form>
	);
};

const Travel1 = () => {
	const [index, setIndex] = useState(0);

	const handleControl = (type) => {
		if (type === "prev") {
			setIndex(index === 0 ? carouselData.length - 1 : index - 1);
		} else {
			setIndex(index === carouselData.length - 1 ? 0 : index + 1);
		}
	};

	return (
		<section
			className="ezy__travel1"
			style={{
				backgroundImage:
					"url(https://cdn.easyfrontend.com/pictures/hero/header35-img.png)",
			}}
		>
			<Container>
				<Row>
					<Col xs={12}>
						<Carousel
							id="ezy__travel1-controls"
							activeIndex={index}
							controls={false}
							indicators={false}
						>
							{carouselData.map((item, i) => (
								<Carousel.Item item={item} key={i}>
									<Row className="justify-content-center">
										<Col xs={12} lg={10} xl={8} className="text-center">
											<h2 className="ezy__travel1-heading mb-4">
												{item.heading}
											</h2>
											<Row className="justify-content-center">
												<Col xs={12} lg={11} xl={9}>
													<p className="ezy__travel1-sub-heading">
														{item.subHeading}
													</p>
												</Col>
											</Row>
										</Col>
									</Row>
								</Carousel.Item>
							))}

							<div className="ezy__travel1-arrows d-flex align-items-center">
								<Button
									variant=""
									className="carousel-control-prev ezy__travel1-arrow-left me-4"
									onClick={() => handleControl("prev")}
								>
									<FontAwesomeIcon icon={faArrowLeft} />
								</Button>
								<Button
									variant=""
									className="carousel-control-next ezy__travel1-arrow-right"
									onClick={() => handleControl("next")}
								>
									<FontAwesomeIcon icon={faArrowRight} />
								</Button>
							</div>
						</Carousel>
					</Col>
				</Row>

				{/* search bar  */}
				<Row className="ezy__travel1-search-bar">
					<Col xs={12}>
						<Card className="border-0 p-4">
							<OrderForm />
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Travel1;

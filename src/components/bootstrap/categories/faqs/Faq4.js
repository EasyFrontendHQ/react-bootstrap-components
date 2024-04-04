import React, { useState } from "react";
import { Button, Col, Collapse, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Faq4.css";

/*
{
	"react": "React, { useState }",
	"react-bootstrap": "{ Button, Col, Collapse, Container, Row }",
	"@fortawesome/react-fontawesome": "{ FontAwesomeIcon }",
	"@fortawesome/free-solid-svg-icons": "{ faChevronDown }",
	"prop-types": "PropTypes"
}
*/

const faqList = [
	{
		isActive: true,
		question: "What is Easy Frontend?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		isActive: false,
		question: "Who is Easy Frontend for?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		isActive: false,
		question: "How does Easy Frontend work?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		isActive: false,
		question: "How often does your team upload resources?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		isActive: false,
		question: "Can I get a refund if I cancel my subscription?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		isActive: false,
		question: "Can I use Easy Frontend designs in my portfolio?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		isActive: false,
		question: "Can I buy Easy Frontend extended license?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
];

const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(faq.isActive || false);

	const toggleFaq = () => setIsOpen(!isOpen);

	return (
		<div className="ezy__faq4-item mt-4">
			<Button
				variant=""
				className="p-3 p-lg-4 w-100 text-start d-flex justify-content-between align-items-center ezy__faq4-btn-collapse"
				type="button"
				onClick={toggleFaq}
			>
				<span>{faq.question}</span>
				<FontAwesomeIcon icon={faChevronDown} />
			</Button>
			<Collapse in={isOpen}>
				<div>
					<div className="ezy__faq4-content p-3 p-lg-4">
						<p className="opacity-50 mb-0">{faq.answer}</p>
					</div>
				</div>
			</Collapse>
		</div>
	);
};

FaqItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

const Faq4 = () => {
	return (
		<section className="ezy__faq4">
			<Container>
				<Row className="justify-content-center mb-md-4">
					<Col lg={8} xl={7} className="text-center">
						<h2 className="ezy__faq4-heading mb-3">
							Frequently Asked Questions
						</h2>
						<p className="ezy__faq4-sub-heading mb-0">
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!
						</p>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col md={8}>
						{faqList.slice(0, 5).map((faq, i) => (
							<FaqItem faq={faq} key={i} />
						))}
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Faq4;

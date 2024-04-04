import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Faq5.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }",
	"prop-types": "PropTypes"
}
*/

const faqList = [
	{
		question: "What is Easy Frontend?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		question: "Who is Easy Frontend for?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		question: "How does Easy Frontend work?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		question: "How often does your team upload resources?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		question: "Can I get a refund if I cancel my subscription?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		question: "Can I use Easy Frontend designs in my portfolio?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
];

const FaqItem = ({ faq }) => (
	<div className="ezy__faq5-item mt-4">
		<h5 className="p-3 p-lg-4 mb-0 w-100 text-start d-flex justify-content-between align-items-center ezy__faq5-btn-collapse">
			<span>{faq.question}</span>
		</h5>
		<div className="ezy__faq5-content px-3 px-lg-4 pb-lg-4">
			<p className="opacity-50 mb-0">{faq.answer}</p>
		</div>
	</div>
);

FaqItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

const Faq5 = () => {
	return (
		<section className="ezy__faq5">
			<Container>
				<Row className="justify-content-center mb-md-4">
					<Col lg={8} xl={7} className="text-center">
						<h2 className="ezy__faq5-heading mb-3">
							Frequently Asked Questions
						</h2>
						<p className="ezy__faq5-sub-heading mb-0">
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!
						</p>
					</Col>
				</Row>
				<Row>
					{faqList.map((faq, i) => (
						<Col md={6} key={i}>
							<FaqItem faq={faq} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Faq5;

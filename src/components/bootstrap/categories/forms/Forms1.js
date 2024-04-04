import React, { Fragment } from "react";
import {
	Button,
	Col,
	Container,
	Form,
	ProgressBar,
	Row,
} from "react-bootstrap";
import PropTypes from "prop-types";

import "./Forms1.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Button, Col, Container, Form, Row }",
    "prop-types": "PropTypes"
}
*/

const options = [
	{
		label: "In person, informally",
	},
	{
		label: "In person, professionally",
	},
	{
		label: "Online",
	},
	{
		label: "Other",
	},
];

const Shapes = () => (
	<>
		{" "}
		<svg
			className="ezy__forms1-svg svg-1"
			width="461"
			height="460"
			viewBox="0 0 461 460"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="230.373"
				cy="229.779"
				r="229.634"
				fill="var(--ezy-svg-color)"
			/>
		</svg>
		<svg
			className="ezy__forms1-svg svg-2"
			width="155"
			height="155"
			viewBox="0 0 155 155"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="77.4241"
				cy="77.3816"
				r="76.889"
				fill="var(--ezy-svg-color)"
			/>
		</svg>
	</>
);

const StepProgressBar = () => (
	<div>
		<h4>Step 1 of 3</h4>
		<ProgressBar now={33.33} label="" className="mt-3 px-0" />
	</div>
);

const Options = ({ options }) => (
	<Fragment>
		{options.map((item, i) => (
			<Form.Check
				id={`ezy__forms1-option-${i}`}
				name={`ezy__forms1-option`}
				type="radio"
				label={item.label}
				className="p-3 ps-5 mb-4"
				key={i}
			/>
		))}
	</Fragment>
);

Options.propTypes = {
	options: PropTypes.array.isRequired,
};

const Forms1 = () => {
	return (
		<section className="ezy__forms1">
			<Container>
				<Row>
					<Col xs={12}>
						<StepProgressBar />
					</Col>
					<Col xs={12} md={6}>
						<Form action="src/components/bootstrap/categories/forms/Forms1">
							<h4 className="my-5">
								What kind of teaching have you done before?
							</h4>
							<Options options={options} />

							<div className="text-md-end mt-5">
								<Button
									variant=""
									className="ezy__forms1-btn-outline me-2 mb-md-0"
								>
									Exit
								</Button>
								<Button variant="" className="ezy__forms1-btn">
									Continue
								</Button>
							</div>
						</Form>
					</Col>
					<Col xs={12} md={6}>
						<div className="text-center position-relative">
							<Shapes />

							<img
								src="https://cdn.easyfrontend.com/pictures/quiz_1.png"
								alt=""
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Forms1;

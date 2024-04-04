import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "./EPFeature3.css";

/*
{
	"react": "React,
	"react-bootstrap": "{ Col, Container, Row }",
	"prop-types": "PropTypes",
}
*/
const features = [
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_1.png",
		title: "Modern and New style",
		desc: "Series overview Introduction to colors The colortbl package The xcolor package The colortab package,Series overview Introduction to colors The colortbl package The xcolor package The colortab package. Series overview Introduction to colors The colortbl package The xcolor package The colortab package,Series overview Introduction to colors The colortbl package The xcolor package The colortab package.",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_2.png",
		title: "Flexible and stylish",
		desc: "Series overview Introduction to colors The colortbl package The xcolor package The colortab package,Series overview Introduction to colors The colortbl package The xcolor package The colortab package. Series overview Introduction to colors The colortbl package The xcolor package The colortab package,Series overview Introduction to colors The colortbl package The xcolor package The colortab package.",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_3.png",
		title: "Comfort and good for Health",
		desc: "Series overview Introduction to colors The colortbl package The xcolor package The colortab package,Series overview Introduction to colors The colortbl package The xcolor package The colortab package. Series overview Introduction to colors The colortbl package The xcolor package The colortab package,Series overview Introduction to colors The colortbl package The xcolor package The colortab package.",
	},
];

const FeatureItem = ({ item }) => (
	<div className="ezy__feature3-item mt-4">
		<a
			className="p-3 p-lg-4 w-100 text-start d-flex justify-content-between align-items-center ezy__epfeature3-btn-collapse"
			data-bs-toggle="collapse"
			href="src/components/bootstrap/categories/epFeature/EPFeature3#ezy-epfeature3-collapse-1"
			role="button"
			aria-expanded="true"
			aria-controls="ezy-epfeature3-collapse-1"
		>
			<h4>What is Easy Frontend?</h4>
			<span className="fas fa-chevron-down"></span>
		</a>
		<div className="collapse show" id="ezy-epfeature3-collapse-1">
			<div className="ezy__epfeature3-content px-3 px-lg-4 pb-lg-4">
				<p className="opacity-75 mb-0">
					When it comes to booking a holiday, we know everyone likes something
					different - so we've designed our getaways with you in mind. When it
					comes to booking a holiday, we know everyone likes something
					different.
				</p>
			</div>
		</div>
	</div>
);

FeatureItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const ePFeature3 = () => {
	return (
		<section className="ezy__epfeature3">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="text-center">
							<img
								src="https://cdn.easyfrontend.com/pictures/ecommerce/feature3.png"
								alt=""
								className="img-fluid"
							/>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div>
							<div className="ezy__feature3-item mt-4">
								<a
									className="btn p-3 p-lg-4 w-100 text-start d-flex justify-content-between align-items-center ezy__epfeature3-btn-collapse"
									data-bs-toggle="collapse"
									href="src/components/bootstrap/categories/epFeature/EPFeature3#ezy-epfeature3-collapse-1"
									role="button"
									aria-expanded="true"
									aria-controls="ezy-epfeature3-collapse-1"
								>
									<h4>What is Easy Frontend?</h4>
									<span className="fas fa-chevron-down"></span>
								</a>
								<div className="collapse show" id="ezy-epfeature3-collapse-1">
									<div className="ezy__epfeature3-content px-3 px-lg-4 pb-lg-4">
										<p className="opacity-75 mb-0">
											When it comes to booking a holiday, we know everyone likes
											something different - so we've designed our getaways with
											you in mind. When it comes to booking a holiday, we know
											everyone likes something different.
										</p>
									</div>
								</div>
							</div>
							<div className="ezy__epfeature3-item mt-4">
								<a
									className="btn p-3 p-lg-4 w-100 text-start d-flex justify-content-between align-items-center ezy__epfeature3-btn-collapse"
									data-bs-toggle="collapse"
									href="src/components/bootstrap/categories/epFeature/EPFeature3#ezy-epfeature3-collapse-2"
									role="button"
									aria-expanded="false"
									aria-controls="ezy-epfeature3-collapse-2"
								>
									<h4>Who is Easy Frontend for?</h4>
									<span className="fas fa-chevron-down"></span>
								</a>
								<div className="collapse" id="ezy-epfeature3-collapse-2">
									<div className="ezy__epfeature3-content px-3 px-lg-4 pb-lg-4">
										<p className="opacity-75 mb-0">
											When it comes to booking a holiday, we know everyone likes
											something different - so we've designed our getaways with
											you in mind.
										</p>
									</div>
								</div>
							</div>
							<div className="ezy__epfeature3-item mt-4">
								<a
									className="btn p-3 p-lg-4 w-100 text-start d-flex justify-content-between align-items-center ezy__epfeature3-btn-collapse"
									data-bs-toggle="collapse"
									href="src/components/bootstrap/categories/epFeature/EPFeature3#ezy-epfeature3-collapse-3"
									role="button"
									aria-expanded="false"
									aria-controls="ezy-epfeature3-collapse-3"
								>
									<h4>How does Easy Frontend work?</h4>
									<span className="fas fa-chevron-down"></span>
								</a>
								<div className="collapse" id="ezy-epfeature3-collapse-3">
									<div className="ezy__epfeature3-content px-3 px-lg-4 pb-lg-4">
										<p className="opacity-75 mb-0">
											When it comes to booking a holiday, we know everyone likes
											something different - so we've designed our getaways with
											you in mind.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ePFeature3;

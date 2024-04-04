import React, { Fragment } from "react";
import Testimonial1 from "./testimonials/Testimonial1";
import Testimonial2 from "./testimonials/Testimonial2";
import Testimonial3 from "./testimonials/Testimonial3";
import Testimonial4 from "./testimonials/Testimonial4";
import Testimonial5 from "./testimonials/Testimonial5";

const Testimonials = () => {
	return (
		<Fragment>
			<Testimonial1 />
			<br />
			<Testimonial2 />
			<br />
			<Testimonial3 />
			<br />
			<Testimonial4 />
			<br />
			<Testimonial5 />
			<br />
		</Fragment>
	);
};

export default Testimonials;

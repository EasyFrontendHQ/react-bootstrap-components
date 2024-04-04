import React, { Fragment } from "react";
import BlogDetails1 from "./blogDetails/BlogDetails1";
import BlogDetails2 from "./blogDetails/BlogDetails2";

const BlogDetails = () => {
	return (
		<Fragment>
			<BlogDetails1 />
			<br />
			<BlogDetails2 />
			<br />
		</Fragment>
	);
};

export default BlogDetails;

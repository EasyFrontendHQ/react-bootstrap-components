import React, { Fragment } from "react";
import Blog1 from "./blogs/Blog1";
import Blog2 from "./blogs/Blog2";
import Blog3 from "./blogs/Blog3";
import Blog4 from "./blogs/Blog4";
import Blog5 from "./blogs/Blog5";

const Blogs = () => {
	return (
		<Fragment>
			<Blog1 />
			<br />
			<Blog2 />
			<br />
			<Blog3 />
			<br />
			<Blog4 />
			<br />
			<Blog5 />
			<br />
		</Fragment>
	);
};

export default Blogs;

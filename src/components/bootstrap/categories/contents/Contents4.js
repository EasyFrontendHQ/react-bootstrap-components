import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./Contents4.css";

/*
{
	"react": "React",
	"react-bootstrap": "{ Col, Container, Row }"
}
*/

const Contents = () => (
	<>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.
			Hic, nisi! Perspiciatis veritatis quibusdam esse! Corrupti aut unde neque
			sit alias repudiandae ratione debitis id pariatur? Nesciunt quam officia
			enim repudiandae, voluptatibus, culpa veniam sapiente sunt nisi ratione
			tenetur.
		</p>
		<br />
		<hr />
		<br />
		<h4>Lorem Ipsum</h4>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.
			Hic, nisi! Perspiciatis veritatis quibusdam esse! Corrupti aut unde neque
			sit alias repudiandae ratione debitis id pariatur? Nesciunt quam officia
			enim repudiandae, voluptatibus, culpa veniam sapiente sunt nisi ratione
			tenetur.
		</p>
		<br />
		<p>
			Lorem ipsum dolor sit amet consectetur{" "}
			<a href="src/components/bootstrap/categories/contents/Contents4#!">
				adipisicing elit
			</a>
			. Pariatur, odio. Hic, nisi! Perspiciatis veritatis quibusdam esse!
			Corrupti aut unde neque sit alias repudiandae ratione debitis id pariatur?
			Nesciunt quam officia enim repudiandae, voluptatibus, culpa veniam
			sapiente sunt nisi ratione tenetur.
		</p>

		<br />
		<img
			src="https://cdn.easyfrontend.com/pictures/blog/blog_14_3.jpg"
			alt=""
		/>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo
			doloremque.
		</p>

		<br />
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias quam
			ut at voluptatem, illum id repudiandae libero labore deserunt voluptates
			vero accusantium suscipit quae possimus beatae velit. Repellat cupiditate
			amet, consequatur eaque vel autem accusantium excepturi sed unde sunt
			pariatur nobis qui nam, minima ullam. Quos quasi quidem consequatur sequi
			veniam doloribus quisquam, ipsam cum provident hic impedit eos!
		</p>
		<br />
		<blockquote cite="https://easyfrontend.com">
			<b>
				For 50 years, WWF has been protecting the future of nature. The world's
				leading conservation organization, WWF works in 100 countries and is
				supported by 1.2 million members in the United States and close to 5
				million globally
			</b>
			<p></p>
			<p>- John Doe, CEO {`&`} Founder</p>
		</blockquote>
		<br />
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias quam
			ut at voluptatem, illum id repudiandae libero labore deserunt voluptates
			vero accusantium suscipit quae possimus beatae velit. Repellat cupiditate
			amet, consequatur eaque vel autem accusantium excepturi sed unde sunt
			pariatur nobis qui nam, minima ullam. Quos quasi quidem consequatur sequi
			veniam doloribus quisquam, ipsam cum provident hic impedit eos!
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias quam
			ut at voluptatem, illum id repudiandae libero labore deserunt voluptates
			vero accusantium suscipit quae possimus beatae velit. Repellat cupiditate
			amet, consequatur eaque vel autem accusantium excepturi sed unde sunt
			pariatur nobis qui nam, minima ullam. Quos quasi quidem consequatur sequi
			veniam doloribus quisquam, ipsam cum provident hic impedit eos!
		</p>
	</>
);

const Contents4 = () => {
	return (
		<section className="ezy__contents4">
			<Container>
				<Row>
					{/* heading  */}
					<Col xs={12} md={8}>
						<h5 className="ezy__contents4-date">Published 08 June 2004</h5>
						<h1 className="ezy__contents4-heading mb-3">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit Dolorum.
						</h1>
						<p className="ezy__contents4-sub-heading">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							sit commodi blanditiis distinctio expedita fuga ab. Magni, amet!
							Esse quaerat ducimus quisquam? Qui accusamus, cupiditate sed
						</p>
					</Col>

					{/* banner  */}
					<Col xs={12}>
						<img
							src="https://cdn.easyfrontend.com/pictures/blog/blog_2.jpg"
							alt=""
							className="img-fluid my-3 my-md-5"
						/>
					</Col>
				</Row>
				<Row className="justify-content-center">
					{/* contents  */}
					<Col xs={12} md={8} className="ezy__contents4-content">
						<Contents />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Contents4;

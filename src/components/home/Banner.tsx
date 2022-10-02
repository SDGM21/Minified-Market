import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
export const HeaderBanner = () => {
	return (<>
		<section id="header-banner">
			<Container>
				<Row className="d-flex justify-content-center text-center">
					<Col xs={12}>
						<nav>
							<ul className="d-flex justify-content-center">
								<li className="mx-3 px-4 py-2"><Link to="">Lorem.</Link></li>
								<li className="mx-3 px-4 py-2"><Link to="">Lorem.</Link></li>
								<li className="mx-3 px-4 py-2"><Link to="">Lorem.</Link></li>
								<li className="mx-3 px-4 py-2"><Link to="">Lorem.</Link></li>
								<li className="mx-3 px-4 py-2"><Link to="">Lorem.</Link></li>
								<li className="mx-3 px-4 py-2"><Link to="">Lorem.</Link></li>
								<li className="mx-3 px-4 py-2"><Link to="">Lorem.</Link></li>
							</ul>
						</nav>
					</Col>
					<Col xs={6}>
						<h1 className="mb-5">Explore the world’s leading design portfolios</h1>
						<span>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</span>
					</Col>
					<Col xs={12} className="my-5">
						<input type="text" />
					</Col>
				</Row>
			</Container>
		</section>
	</>);
}
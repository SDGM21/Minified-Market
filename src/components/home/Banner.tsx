import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
export const HeaderBanner = () => {
	return (<>
		<section id="header-banner">
			<Container>
				<Row className="d-flex justify-center">
					<Col>
						<nav>
							<ul className="d-flex">
								<li><Link to=""></Link></li>
								<li><Link to=""></Link></li>
								<li><Link to=""></Link></li>
								<li><Link to=""></Link></li>
							</ul>
						</nav>
					</Col>
				</Row>
				<Row >
					<Col>
						<h1>Explore the world’s leading design portfolios</h1>
						<span>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</span>
					</Col>
				</Row>
				<Row>

				</Row>
			</Container>
		</section>
	</>);
}
import React from "react";
import { Link } from "react-router-dom";
import {Container, Row, Col} from "reactstrap";

export const Footer =() => {
	return (<>
		<section className="" id="footer">
			<Container>
				<Row>
					<Col xs={12} sm={6} lg={3}>
						<nav>
							<ul className="text-center d-flex flex-column">
								<li><Link className="footer-logo" to=""> Logo </Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
							</ul>
						</nav>
					</Col>
					<Col xs={12} sm={6} lg={3}>
						<nav>
							<ul className="text-center d-flex flex-column">
								<li><h4 className="font-weight-bold">Lorem, ipsum.</h4></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
							</ul>
						</nav>
					</Col>
					<Col xs={12} sm={6} lg={3}>
						<nav>
							<ul className="text-center d-flex flex-column">
								<li><h4 className="font-weight-bold">Lorem, ipsum.</h4></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
							</ul>
						</nav>
					</Col>
					<Col xs={12} sm={6} lg={3}>
						<nav>
							<ul className="text-center d-flex flex-column">
								<li><h4 className="font-weight-bold">Lorem, ipsum.</h4></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
								<li><Link to=""><span>Lorem, ipsum dolor.</span></Link></li>
							</ul>
						</nav>
					</Col>
				</Row>
			</Container>
		</section>
	</>);
}
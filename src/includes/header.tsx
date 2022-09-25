import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
	return ( <>
		<header id="header">
			<div className="container mx-auto">
				<div className="col-2">
					<div className="logo-container">
						<Link to="/">
							Logo-Wannabe
						</Link>
					</div>
					<nav>
						<ul>
							<li><Link to="/">Sections Links</Link></li>
							<li><Link to="/">Sections Links</Link></li>
							<li><Link to="/">Sections Links</Link></li>
							<li><Link to="/">Sections Links</Link></li>
							<li><Link to="/">Sections Links</Link></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	</> );
};
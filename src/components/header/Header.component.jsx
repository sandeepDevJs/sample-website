import React from "react";
import "./header.styles.css";
import Navbar from "./navbar/Navbar.component";

const Header = () => {
	return (
		<div className="header-area header-transparent">
			<div className="main-header header-sticky">
				<div className="container-fluid">
					<Navbar />
				</div>
			</div>
		</div>
	);
};

export default Header;

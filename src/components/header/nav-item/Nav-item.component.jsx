import React from "react";

const NavItem = ({ text }) => {
	return (
		<li className="nav-item">
			<a className="nav-link" href="/" style={{ color: "white" }}>
				{text}
			</a>
		</li>
	);
};

export default NavItem;

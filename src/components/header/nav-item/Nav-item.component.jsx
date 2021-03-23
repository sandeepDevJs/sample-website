import React from "react";

const NavItem = ({ text }) => {
	return (
		<li class="nav-item">
			<a class="nav-link" href="/">
				{text}
			</a>
		</li>
	);
};

export default NavItem;

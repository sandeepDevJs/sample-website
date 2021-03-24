import React from "react";

const Dropdown = ({ title }) => {
	return (
		<span className="dropdown-item" style={{ color: "#ff8553" }} href="/">
			{title}
		</span>
	);
};

export default Dropdown;

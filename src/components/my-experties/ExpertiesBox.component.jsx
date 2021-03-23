import React from "react";

const ExpertiesBox = ({ img }) => {
	return (
		<div className="experties-box">
			<img src={img} alt="box" />
			<h4>Strategy & Direction</h4>
			<p>
				Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing
				elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<button className="btn">Head of design at Calvino</button>
		</div>
	);
};

export default ExpertiesBox;

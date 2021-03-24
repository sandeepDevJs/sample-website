import React from "react";

const ProgessBar = ({ width, skill }) => {
	return (
		<div className="single-skill">
			<div className="progress-count">
				<p>{skill}</p>
				<span>{width}</span>
			</div>
			<div className="progress">
				<div
					className="progress-bar wow slideInLeft"
					data-wow-duration="1s"
					data-wow-delay=".5s"
					aria-valuenow="25"
					role="progressbar"
					style={{
						width: width,
						visibility: "visible",
						animationDuration: "1s",
						animationDelay: "0.5s",
						animationName: "slideInLeft",
						color: "#ff8553",
						backgroundColor: "#ff8553",
					}}
					aria-valuemin="0"
					aria-valuemax="100"
				></div>
			</div>
		</div>
	);
};

export default ProgessBar;

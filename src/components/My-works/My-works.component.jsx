import React from "react";
import { Col, Row } from "react-bootstrap";
import "./my-works.styles.css";

const MyWorks = () => {
	return (
		<div className="myworks-cnt">
			<div className="container">
				<h1>My Works</h1>
				<Row>
					<Col md={6}>
						<div
							className="box-img"
							style={{
								backgroundImage: `url("https://preview.colorlib.com/theme/calvin/assets/img/gallery/gallery1.png")`,
							}}
						>
							<div className="overlay">
								<h5>Strategy & Direction</h5>
							</div>
						</div>
					</Col>
					<Col md={6}>
						<div className="box-img">
							<img
								src="https://preview.colorlib.com/theme/calvin/assets/img/gallery/gallery2.png"
								alt=""
								srcset=""
							/>
							<div className="overlay">
								<h5>Strategy & Direction</h5>
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<div className="box-img">
							<img
								src="https://preview.colorlib.com/theme/calvin/assets/img/gallery/gallery3.png"
								alt=""
								srcset=""
							/>
							<div className="overlay">
								<h5>Strategy & Direction</h5>
							</div>
						</div>
					</Col>
					<Col md={6}>
						<div className="box-img">
							<img
								src="https://preview.colorlib.com/theme/calvin/assets/img/gallery/gallery4.png"
								alt=""
								srcset=""
							/>
							<div className="overlay">
								<h5>Strategy & Direction</h5>
							</div>
						</div>
					</Col>
				</Row>
				<div className="text-center mt-40 text-center">
					<button className="work-btn2">see more</button>
				</div>
			</div>
		</div>
	);
};

export default MyWorks;

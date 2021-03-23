import React from "react";
import { Col, Row } from "react-bootstrap";
import "./about-me.styles.css";
import ProgessBar from "./ProgessBar.component";

const AboutMe = () => {
	return (
		<div className="about-me-cnt">
			<div className="container">
				<h1>About Me</h1>
				<Row>
					<Col md={6}>
						<div className="text-container">
							<p>
								In the mean time shall soon find out the cause of this: What was
								the epicurus towards their children; each of these can have a
								chain of not to have been taken in the broad plain in what is
								the reason why
							</p>
							<b className="bottom-text">
								"What was the epicurus towards their children; each of these can
								have a chain."
							</b>
						</div>
					</Col>
					<Col md={6}>
						<ProgessBar width="60%" skill="User Interface Design" />
						<ProgessBar width="89%" skill="User Experience" />
						<ProgessBar width="95%" skill="Illustration" />
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<img
							src="https://preview.colorlib.com/theme/calvin/assets/img/gallery/brand1.png"
							alt="img"
						/>
					</Col>
					<Col md={3}>
						<img
							src="https://preview.colorlib.com/theme/calvin/assets/img/gallery/brand3.png"
							alt="img"
						/>
					</Col>
					<Col md={3}>
						<img
							src="https://preview.colorlib.com/theme/calvin/assets/img/gallery/brand4.png"
							alt="img"
						/>
					</Col>
					<Col md={3}>
						<img
							src="https://preview.colorlib.com/theme/calvin/assets/img/gallery/brand5.png"
							alt="img"
						/>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default AboutMe;

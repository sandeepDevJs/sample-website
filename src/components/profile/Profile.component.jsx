import React from "react";
import { Row, Col } from "react-bootstrap";
import "./profile.styles.css";

const Profile = () => {
	return (
		<div className="header-area header-transparent profile-container">
			<div className="container">
				<Row>
					<Col md={4}>
						<img
							src="https://preview.colorlib.com/theme/calvin/assets/img/hero/empolye.png"
							alt="img"
						/>
					</Col>
					<Col md={8}>
						<div className="profile-big-cnt">
							<h1>
								My name is Calvin. <br /> Digital Product Designer
							</h1>
							<p>Head of design at Calvino</p>
						</div>
					</Col>
				</Row>

				<Row>
					<Col md={4}>
						<div className="about-info">
							<p>Design For</p>
							<span>Web &amp; Mobile</span>
						</div>
					</Col>
					<Col md={4}>
						<div className="about-info float-right">
							<p className="float-right">Phone</p>
							<br />
							<span className="float-right">+10 (67) 367-9034</span>
						</div>
					</Col>
					<Col md={4}>
						<Row>
							<Col md={10}>
								<div className="about-info float-right">
									<p className="float-right">Drop your Message</p>
									<span className="float-right">calvino90@gmail.com</span>
								</div>
							</Col>
							<Col md={2}>
								<img
									src="https://preview.colorlib.com/theme/calvin/assets/img/gallery/email-icon.png"
									alt="mail-icon"
								/>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Profile;

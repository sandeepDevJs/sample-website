import React from "react";
import { Col, Row } from "react-bootstrap";
import Navbar from "../header/navbar/Navbar.component";
import "./footer.styles.css";

const Footer = () => {
	return (
		<div>
			<footer>
				<div className="container" style={{ marginBottom: "60px" }}>
					<Row>
						<Col md={6}>
							<div className="footer-left-part">
								<img
									src="https://preview.colorlib.com/theme/calvin/assets/img/logo/logo2_footer.png"
									alt=""
								/>
								<p>
									In the mean time shall soon find out the cause of this: What
									was the epicurus towards their children.
								</p>
								<div className="footer-left-part-social">
									<a href="/">
										<i className="fab fa-twitter"></i>
									</a>
									<a href="/">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a href="/">
										<i className="fab fa-pinterest-p"></i>
									</a>
									<a href="/">
										<i className="fas fa-globe"></i>
									</a>
									<a href="/">
										<i className="fab fa-instagram"></i>
									</a>
								</div>
							</div>
						</Col>
						<Col md={6}>
							<div className="footer-right-part">
								<button className="cv-btn">Download CV</button>
								<button className="talk-btn">Let's Talk</button>
							</div>
						</Col>
					</Row>
				</div>
				<Row>
					<div className="container second-part">
						<div>
							<p>
								Copyright ©2021 All rights reserved | This template is made with{" "}
								<i className="fas fa-heart"></i>
								<a
									href="https://github.com/sandeepDevJs"
									target="_blank"
									rel="noreferrer"
								>
									SandeepDevJs
								</a>
							</p>
						</div>
						<div className="footer-nav">
							<Navbar footerNav />
						</div>
					</div>
				</Row>
			</footer>
		</div>
	);
};

export default Footer;

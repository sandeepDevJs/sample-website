import React from "react";
import { Col, Row } from "react-bootstrap";
import "./latest-news.styles.css";

const LatestNews = () => {
	return (
		<div className="latest-cnt">
			<div className="container">
				<h1>Latest News</h1>
				<Row>
					<Col md={6}>
						<div className="single-location mb-30">
							<div className="location-img">
								<img
									src="https://preview.colorlib.com/theme/calvin/assets/img/gallery/home-blog1.png"
									alt=""
								/>
							</div>
							<div className="location-details">
								<a href="/" className="location-btn">
									Tips
								</a>
								<ul>
									<li>12 March I by Alan</li>
								</ul>
								<p>
									<a href="blog_details.html">
										The Best SPA Salons For Your Relaxation
									</a>
								</p>
							</div>
						</div>
					</Col>
					<Col md={6}>
						<div className="single-location mb-30">
							<div className="location-img">
								<img
									src="https://preview.colorlib.com/theme/calvin/assets/img/gallery/home-blog2.png"
									alt=""
								/>
							</div>
							<div className="location-details">
								<a href="/" className="location-btn">
									Tips
								</a>
								<ul>
									<li>12 March I by Alan</li>
								</ul>
								<p>
									<a href="blog_details.html">
										The Best SPA Salons For Your Relaxation
									</a>
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default LatestNews;

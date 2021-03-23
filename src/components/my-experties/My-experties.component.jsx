import React from "react";
import { Row, Col } from "react-bootstrap";
import ExpertiesBox from "./ExpertiesBox.component";
import "./my-experties.styles.css";

const MyExperties = () => {
	return (
		<div className="my-experties-cnt">
			<div className="container">
				<h1>My Experties</h1>
			</div>

			<Row>
				<Col md={6}>
					<ExpertiesBox
						img={
							"https://preview.colorlib.com/theme/calvin/assets/img/icon/services4.svg"
						}
					/>
				</Col>
				<Col md={6}>
					<ExpertiesBox
						img={
							"https://preview.colorlib.com/theme/calvin/assets/img/icon/services3.svg"
						}
					/>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<ExpertiesBox
						img={
							"https://preview.colorlib.com/theme/calvin/assets/img/icon/services2.svg"
						}
					/>
				</Col>
				<Col md={6}>
					<ExpertiesBox
						img={
							"https://preview.colorlib.com/theme/calvin/assets/img/icon/services1.svg"
						}
					/>
				</Col>
			</Row>
		</div>
	);
};

export default MyExperties;

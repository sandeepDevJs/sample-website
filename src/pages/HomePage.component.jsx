import React from "react";
import AboutMe from "../components/about-me/About-me.component";
import Header from "../components/header/Header.component";
import MyExperties from "../components/my-experties/My-experties.component";
import MyWorks from "../components/My-works/My-works.component";
import Profile from "../components/profile/Profile.component";

const HomePage = () => {
	return (
		<div>
			<Header />
			<Profile />
			<MyExperties />
			<MyWorks />
			<AboutMe />
		</div>
	);
};

export default HomePage;

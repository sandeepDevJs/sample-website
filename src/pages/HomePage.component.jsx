import React from "react";
import AboutMe from "../components/about-me/About-me.component";
import ClientTestimonial from "../components/client-testimonial/Client-testimonial.component";
import Footer from "../components/footer/Footer.component";
import Header from "../components/header/Header.component";
import LatestNews from "../components/latest-news/Latest-news.component";
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
			<ClientTestimonial />
			<LatestNews />
			<Footer />
		</div>
	);
};

export default HomePage;

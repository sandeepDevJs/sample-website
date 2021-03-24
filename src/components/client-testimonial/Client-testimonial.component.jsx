import React from "react";
// import { Swiper, Navigation, Pagination } from "swiper/dist/js/swiper.esm";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import { Swiper, Navigation, Pagination } from "swiper/swiper.esm";
import "swiper/swiper.scss";
import "./client-testimonial.styles.css";

const ClientTestimonial = () => {
	const params = {
		Swiper,
		modules: [Navigation, Pagination],
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
	};
	return (
		<div className="client-testimonial-cnt">
			<div className="container text-center">
				<h1>Client Testimonial</h1>
				<ReactIdSwiperCustom {...params}>
					<div>
						<p>
							"Supercharge your WordPress hosting with detailed website
							analytics, marketing tools. Our experts are just part of the
							reason Bluehost is the ideal home for your WordPress website.
							We're here to help you succeed!"
						</p>
						<div className="client-profile">
							<div>
								<img
									src="https://preview.colorlib.com/theme/calvin/assets/img/icon/testimonial.png"
									alt="img"
								/>
							</div>
							<div>
								<span>Jacson Miller</span>
								<p>Designer @Colorlib</p>
							</div>
						</div>
					</div>
				</ReactIdSwiperCustom>
			</div>
		</div>
	);
};

export default ClientTestimonial;

import React from "react";
import NavItem from "../nav-item/Nav-item.component";
import "./navbar.styles.css";

const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg">
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
				<a class="navbar-brand" href="/">
					<img
						src="https://preview.colorlib.com/theme/calvin/assets/img/logo/logo.png"
						className="d-inline-block align-top"
						alt="logo"
					/>
				</a>

				<ul class="navbar-nav mr-auto mt-2 mt-lg-0 menu-wrapper">
					<NavItem text={"Home"} />
					<NavItem text={"Work"} />
					<NavItem text={"Service"} />
					<li class="nav-item dropdown">
						<a
							class="nav-link"
							href="/"
							id="navbarDropdownMenuLink"
							data-toggle="dropdown"
							aria-expanded="false"
						>
							Blog
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<span class="dropdown-item" style={{ color: "#ff8553" }} href="/">
								Action
							</span>
							<span class="dropdown-item" style={{ color: "#ff8553" }} href="/">
								Another action
							</span>
							<span class="dropdown-item" style={{ color: "#ff8553" }} href="/">
								Something else here
							</span>
						</div>
					</li>
					<NavItem text={"Contact"} />
				</ul>
				<div class="form-inline my-2 my-lg-0">
					<button class="nav-btn">Let's Talk</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

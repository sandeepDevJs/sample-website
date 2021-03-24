import React from "react";
import NavItem from "../nav-item/Nav-item.component";
import Dropdown from "./Dropdown.component";
import "./navbar.styles.css";

const Navbar = ({ footerNav }) => {
	return (
		<nav className="navbar navbar-expand-lg">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarTogglerDemo0156">
				{!footerNav && (
					<a className="navbar-brand" href="/">
						<img
							src="https://preview.colorlib.com/theme/calvin/assets/img/logo/logo.png"
							className="d-inline-block align-top"
							alt="logo"
						/>
					</a>
				)}

				<ul className="navbar-nav mr-auto mt-2 mt-lg-0 menu-wrapper">
					<NavItem text={"Home"} />
					<NavItem text={"Work"} />
					<NavItem text={"Service"} />
					<li className="nav-item dropdown">
						<a
							className="nav-link"
							href="/"
							id="navbarDropdownMenuLink"
							data-toggle="dropdown"
							aria-expanded="false"
							style={{ color: "white" }}
						>
							Blog
						</a>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdownMenuLink"
						>
							<Dropdown title={"Action"} />
							<Dropdown title={"Some Action"} />
							<Dropdown title={"Some Other Action"} />
						</div>
					</li>
					<NavItem text={"Contact"} />
				</ul>
				{!footerNav && (
					<div className="form-inline my-2 my-lg-0">
						<button className="nav-btn">Let's Talk</button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;

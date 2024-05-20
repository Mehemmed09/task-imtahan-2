import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.scss";
const Navbar = () => {
	return (
		<>
				<div className="NavbarElements">
					<div className="NavbarLogo">
						<NavLink to={"/Home"}>
							{" "}
							<img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png.webp" alt="" />
						</NavLink>
					</div>
					<div className="NavbarList">
						<ul>
							<li>
								<NavLink to={"/Home"} style={{color:"white",textDecoration:"none"}} >Home</NavLink>
							</li>
							<li>
								<NavLink to={"/Basket"} style={{color:"white",textDecoration:"none"}}>Basket</NavLink>
							</li>
						</ul>
					</div>
				</div>
		</>
	);
};

export default Navbar;

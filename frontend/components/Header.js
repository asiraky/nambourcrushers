import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ }) => {
	const router = useRouter();
    return (
        <div className="header">
			<div className="container">
				<div className="header-content">
					<div className="header-content-logo"></div>
					<div className="header-content-hamburger">
						<span></span>
					</div>
					<nav className="header-content-nav">
						<ul className="header-content-nav-list left">
							<li className={router.pathname == "/" ? "active" : ""}>
								<Link href="/">News</Link>
							</li>
							<li className={router.pathname == "/fixtures" ? "active" : ""}>
								<Link href="/fixtures">Fixtures</Link>
							</li>
							<li className={router.pathname == "/events" ? "active" : ""}>
								<Link href="/events">Events</Link>
							</li>
						</ul>
						<ul className="header-content-nav-list right">
							<li className={router.pathname == "/contact" ? "active" : ""}>
								<Link href="/contact">Contact</Link>
							</li>
							<li className={router.pathname == "/venue" ? "active" : ""}>
								<Link href="/venue">Venue</Link>
							</li>
							<li className={router.pathname == "/history" ? "active" : ""}>
				            	<Link href="/history">History</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
        </div>
    );
};

export default Header;

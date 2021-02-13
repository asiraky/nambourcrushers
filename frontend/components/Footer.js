import React from "react";
import Link from "next/link";

const Footer = ({ }) => {
    return (
        <div className="footer">
			<div className="container">
				<div className="row middle">
					<div className="col-lg-6">
						<div className="footer-about">
							<Link href="/">
								<a className="footer-about-logo"></a>
							</Link>
							<div className="footer-about-content">
								<h3>
									Follow us
								</h3>
								<ul className="footer-about-content-social">
									<li>
										<Link href="/">
											<a className="footer-about-social-icon facebook"></a>
										</Link>
									</li>
									<li>
										<Link href="/">
											<a className="footer-about-social-icon twitter"></a>
										</Link>
									</li>
									<li>
										<Link href="/">
											<a className="footer-about-social-icon instagram"></a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="footer-contact">
							<h3>
								Contact
							</h3>
							<p>
								E-mail: <a href="mailto:wendy@googlemail.com">wendy@googlemail.com</a><br />
								Phone: <a href="0414123456">0414123456</a><br />
								Address: Gregory Street, Golden Beach 4551
							</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="footer-credits">
								© 2021 - Nambour Crushers - Rugby League Sunshine Coast
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Footer;

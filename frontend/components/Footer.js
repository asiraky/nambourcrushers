import React from "react";

import Link from "next/link";

const Footer = ({ social, contact, credits }) => {
    return (
        <div className="footer">
			<div className="container">
				<div className="row middle">
					<div className="col-lg-6">
						<div className="footer-about">
							<Link href="/">
								<div className="footer-about-logo"></div>
							</Link>
							<div className="footer-about-content">
								<h3>
									Follow us
								</h3>
								<ul className="footer-about-content-social">
									{social.facebook &&
									<li>
										<Link href="/">
											<a href={social.facebook} className="footer-about-social-icon facebook" target="_blank"></a>
										</Link>
									</li>
									}
									{social.twitter &&
									<li>
										<Link href="/">
											<a href={social.twitter} className="footer-about-social-icon twitter" target="_blank"></a>
										</Link>
									</li>
									}
									{social.instagram &&
									<li>
										<Link href="/">
											<a href={social.instagram} className="footer-about-social-icon instagram" target="_blank"></a>
										</Link>
									</li>
									}
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="footer-contact">
							<h3>
								Contact
							</h3>
							{contact.email &&
								<div>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></div>
							}
							{contact.phone &&
								<div>Phone: <a href={`tel:${contact.phone}`}>{contact.phone}</a></div>
							}
							{contact.address &&
								<div>Address: {contact.address}</div>
							}
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="footer-credits">
								© {new Date().getFullYear()} - {credits}
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Footer;

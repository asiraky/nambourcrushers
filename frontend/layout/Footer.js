import React from "react";

const Footer = ({ social, contact, credits }) => {
    return (
        <footer className="footer">
			<div className="container">
				<div className="row middle">
					<div className="col-lg-6 col-sm-12">
						<div className="footer-about">
							<div className="footer-about-logo"></div>
							<div className="footer-about-content">
								<h3>
									Follow us
								</h3>
								<ul className="footer-about-content-social">
									{social.facebook &&
									<li>
										<a href={social.facebook} className="footer-about-social-icon facebook" target="_blank"></a>
									</li>
									}
									{social.twitter &&
									<li>
										<a href={social.twitter} className="footer-about-social-icon twitter" target="_blank"></a>
									</li>
									}
									{social.instagram &&
									<li>
										<a href={social.instagram} className="footer-about-social-icon instagram" target="_blank"></a>
									</li>
									}
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12">
						<div className="footer-contact">
							<h3>
								Contact
							</h3>
							{contact.email &&
								<div>
									Email: <a href={`mailto:${contact.email}`} className="medium">{contact.email}</a>
								</div>
							}
							{contact.phone &&
								<div>
									Phone: <a href={`tel:${contact.phone}`} className="medium">{contact.phone}</a>
								</div>
							}
							{contact.address &&
								<div>
									Address: <span className="medium">{contact.address}</span>
								</div>
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
        </footer>
    );
};

export default Footer;

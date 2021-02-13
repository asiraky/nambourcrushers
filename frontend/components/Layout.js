import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Image from "./Image";
import Sponsors from "./Sponsors";
import { GlobalContext } from "../components/GlobalContext";

const Layout = ({ children }) => (
    <GlobalContext.Consumer>
        {({ bannerImage, sponsors, social, footerContact, footerCredit }) => (
            <div className="wrapper">
                <Header />
                <Hero image={bannerImage} />
				<section className="main">
					<div className="container">
						<div className="row stretch">
							<div className="col-lg-8 col-md-12">
								{children}
							</div>
							<div className="col-lg-4 col-md-12">
								<Sponsors sponsors={sponsors} />
							</div>
						</div>
					</div>
				</section>
				<Footer social={social} contact={footerContact} credits={footerCredit} />
            </div>
        )}
    </GlobalContext.Consumer>
);

export default Layout;

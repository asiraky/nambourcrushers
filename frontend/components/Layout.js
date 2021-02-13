import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Image from "./Image";
import Sponsors from "./Sponsors";
import { GlobalContext } from "../components/GlobalContext";

const Layout = ({ children }) => (
    <GlobalContext.Consumer>
        {({ bannerImage, sponsors }) => (
            <div>
                <Header />
                <Hero image={bannerImage} />
                {children}
                <Sponsors sponsors={sponsors} />
				<Footer />
            </div>
        )}
    </GlobalContext.Consumer>
);

export default Layout;

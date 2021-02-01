import Nav from "./Nav";
import Image from "./Image";
import Sponsors from "./Sponsors";
import { GlobalContext } from "../components/GlobalContext";

const Layout = ({ children }) => (
    <GlobalContext.Consumer>
        {({ bannerImage, sponsors }) => (
            <div>
                <Nav />
                <Image image={bannerImage} style={{ width: '200px' }} />
                {children}
                <Sponsors sponsors={sponsors} />
            </div>
        )}
    </GlobalContext.Consumer>
);

export default Layout;
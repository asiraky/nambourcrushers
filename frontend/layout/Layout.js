import Header from './Header';
import Footer from './Footer';
import { GlobalContext } from './GlobalContext';

const Layout = ({ children }) => (
    <GlobalContext.Consumer>
        {({ social, footerContact, footerCredit }) => (
            <div className="wrapper">
                <Header />
				{children}
				<Footer social={social} contact={footerContact} credits={footerCredit} />
            </div>
        )}
    </GlobalContext.Consumer>
);

export default Layout;

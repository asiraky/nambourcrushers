import App from "next/app";
import Head from "next/head";

import '../sass/application.scss'

import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { GlobalContext } from "../components/GlobalContext";

const MyApp = ({ Component, pageProps }) => {
    const { global } = pageProps;
    return (
        <>
            <GlobalContext.Provider value={global}>
                <Component {...pageProps} />
            </GlobalContext.Provider>
        </>
    );
};

MyApp.getInitialProps = async (ctx) => {
    const appProps = await App.getInitialProps(ctx);
    const global = await fetchAPI("/global");
    return { ...appProps, pageProps: { global } };
};

export default MyApp;

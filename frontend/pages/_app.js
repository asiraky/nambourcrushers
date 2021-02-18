import App from "next/app";
import Head from "next/head";

import '../sass/application.scss'

import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { GlobalContext } from "../layout/GlobalContext";
import { DateTime } from 'luxon';

const MyApp = ({ Component, pageProps }) => {
    const { global } = pageProps;
    return (
        <GlobalContext.Provider value={global}>
            <Component {...pageProps} />
        </GlobalContext.Provider>
    );
};

MyApp.getInitialProps = async (ctx) => {
	const now = DateTime.now().toFormat('yyyy-LL-dd');
    const appProps = await App.getInitialProps(ctx);
	const [global, upcoming] = await Promise.all([
        fetchAPI("/global"),
        fetchAPI(`/fixtures?_sort=round:ASC&date_gte=${now}&_limit=1`)
    ]);
	global.upcoming = upcoming.length === 1 ? upcoming[0] : null;
	return { ...appProps, pageProps: { global } };
};

export default MyApp;

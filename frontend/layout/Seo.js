import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { getStrapiMedia } from "../lib/media";

const Seo = ({ seo }) => {
    const { defaultSeo, siteName } = useContext(GlobalContext);
    const seoWithDefaults = {
        ...defaultSeo,
        ...seo,
    };
    const fullSeo = {
        ...seoWithDefaults,
        metaTitle: `${seoWithDefaults.metaTitle}`,
        shareImage: getStrapiMedia(seoWithDefaults.shareImage),
    };
    return (
        <Head>
            {fullSeo.metaTitle && (
                <>
                    <title>{fullSeo.metaTitle}</title>
                    <meta property="og:title" content={fullSeo.metaTitle} />
                    <meta name="twitter:title" content={fullSeo.metaTitle} />
                </>
            )}
            {fullSeo.metaDescription && (
                <>
                    <meta name="description" content={fullSeo.metaDescription} />
                    <meta property="og:description" content={fullSeo.metaDescription} />
                    <meta name="twitter:description" content={fullSeo.metaDescription} />
                </>
            )}
            {fullSeo.shareImage && (
                <>
                    <meta property="og:image" content={fullSeo.shareImage} />
                    <meta name="twitter:image" content={fullSeo.shareImage} />
                    <meta name="image" content={fullSeo.shareImage} />
                </>
            )}
            {fullSeo.article && <meta property="og:type" content="article" />}
            <meta name="twitter:card" content="summary_large_image" />

			<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
			<link rel="manifest" href="/favicons/site.webmanifest" />

			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap" rel="stylesheet" />
        </Head>
    );
};

export default Seo;

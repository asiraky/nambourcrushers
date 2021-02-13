import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { fetchAPI } from "../lib/api";
import { replaceImages } from "../lib/replaceImages";

const Venue = ({ venuePage }) => {
    return (
        <Layout>
            <Seo seo={venuePage.seo} />
            <div className="row">
				<div className="col-lg-12">
					<h1>
						{venuePage.hero.title}
					</h1>
				</div>
            </div>
            <div className="row">
				<div className="col-lg-12">
					<ReactMarkdown source={replaceImages(venuePage.content)} escapeHtml={false} />
				</div>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const [venuePage] = await Promise.all([
        fetchAPI("/venue-page"),
    ]);

    return {
        props: { venuePage },
        revalidate: 1,
    };
}

export default Venue;

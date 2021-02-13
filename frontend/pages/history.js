import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { fetchAPI } from "../lib/api";
import { replaceImages } from "../lib/replaceImages";

const History = ({ historyPage }) => {
    return (
        <Layout>
            <Seo seo={historyPage.seo} />
			<div className="row">
				<div className="col-lg-12">
					<h1>
						{historyPage.hero.title}
					</h1>
				</div>
            </div>
            <div className="row">
				<div className="col-lg-12">
					<ReactMarkdown source={replaceImages(historyPage.content)} escapeHtml={false} />
				</div>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const [historyPage] = await Promise.all([
        fetchAPI("/history-page"),
    ]);
    return {
        props: { historyPage },
        revalidate: 1,
    };
}

export default History;

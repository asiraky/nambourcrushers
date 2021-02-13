import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { fetchAPI } from "../../lib/api";
import { replaceImages } from "../../lib/replaceImages";

const News = ({ newsPage, news }) => {
    return (
        <Layout>
            <Seo seo={newsPage.seo} />
            <div>
                <h1>{news.name}</h1>
                <div>
                    <ReactMarkdown source={replaceImages(news.article.content)} escapeHtml={false} />
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const news = await fetchAPI("/stories");

    return {
        paths: news.map(noos => ({
            params: {
                slug: noos.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const [newsPage, news] = await Promise.all([
        fetchAPI("/news-page"),
        fetchAPI(`/stories?slug=${params.slug}`),
    ]);

    return {
        props: { newsPage, news: news[0] },
        revalidate: 1,
    };
}

export default News;

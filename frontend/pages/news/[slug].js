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
                <h1>{newsPage.hero.title}</h1>
                <div>
                    <h2>{news.name}</h2>
                    <ReactMarkdown source={replaceImages(news.description)} escapeHtml={false} />
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
        fetchAPI(`/news?slug=${params.slug}`),
    ]);

    return {
        props: { newsPage, news: news[0] },
        revalidate: 1,
    };
}

export default News;
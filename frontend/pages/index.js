import React from "react";

import Layout from "../components/Layout";
import Article from "../components/Article";
import Seo from "../components/Seo";
import { fetchAPI } from "../lib/api";

const News = ({ newsPage, news }) => {
    return (
        <Layout>
            <Seo seo={newsPage.seo} />
            <div>
                <h1>{newsPage.hero.title}</h1>
                <ul>
                    {news.map(n => <Article key={n.slug} article={n.article} link={`/news/${n.slug}`} />)}
                </ul>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const [newsPage, news] = await Promise.all([
        fetchAPI("/news-page"),
        fetchAPI("/stories"),
    ]);

    return {
        props: { newsPage, news },
        revalidate: 1,
    };
}

export default News;

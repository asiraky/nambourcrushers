import React from "react";

import Layout from "../components/Layout";
import Article from "../components/Article";
import Seo from "../components/Seo";
import { fetchAPI } from "../lib/api";

const News = ({ newsPage, news }) => {
    return (
        <Layout>
            <Seo seo={newsPage.seo} />
			<div className="row">
				<div className="col-lg-12">
					<h1>{newsPage.hero.title}</h1>
				</div>
				{news.map(item => <Article key={item.slug} item={item} link={`/news/${item.slug}`} />).reverse()}
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

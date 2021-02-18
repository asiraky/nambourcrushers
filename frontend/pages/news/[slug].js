import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../../layout/Layout";
import Seo from "../../layout/Seo";

import Article from "../../components/Article";
import Sidebar from "../../components/Sidebar";

import { fetchAPI } from "../../lib/api";
import { replaceImages } from "../../lib/replaceImages";
import { getStrapiMedia } from "../../lib/media";

const News = ({ newsPage, news }) => {
    return (
        <Layout>
            <Seo seo={newsPage.seo} />
			<section className="main">
				<div className="container">
					<div className="row stretch">
						<div className="col-lg-8 col-md-12">
							<div className="row">
								<div className="col-lg-12">
									<h1>
										{news.article.title}
									</h1>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<img src={getStrapiMedia(news.article.image)} className="news-article-image" />
								</div>
				            </div>
							<div className="row">
								<div className="col-lg-12">
									<ReactMarkdown source={replaceImages(news.article.content)} escapeHtml={false} />
								</div>
				            </div>
							<div className="row margin-top-30">
								<div className="col-lg-12">
									<Link href="/">
										← Back to News
									</Link>
								</div>
				            </div>
						</div>
						<div className="col-lg-4 col-md-12">
							<Sidebar />
						</div>
					</div>
				</div>
			</section>
        </Layout>
    );
};

export async function getServerSideProps({ params }) {
    const [newsPage, news] = await Promise.all([
        fetchAPI("/news-page"),
        fetchAPI(`/stories?slug=${params.slug}`),
    ]);
    return {
        props: { newsPage, news: news[0] }
    };
}

export default News;

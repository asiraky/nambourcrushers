import React from 'react';

import Layout from '../layout/Layout';
import Seo from '../layout/Seo';

import Article from '../components/Article';
import Sidebar from '../components/Sidebar';

import { fetchAPI } from '../lib/api';
import { getStrapiMedia } from '../lib/media';

const News = ({ newsPage, news }) => {
	const image = getStrapiMedia(newsPage.hero.image[0]);
    return (
        <Layout>
            <Seo seo={newsPage.seo} />
			<section className="hero" style={{backgroundImage: "url(" + image + ")"}}>
				<div className="hero-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								{newsPage.hero.text}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="main">
				<div className="container">
					<div className="row stretch">
						<div className="col-lg-8 col-md-12">
							<div className="row">
								<div className="col-lg-12">
									<h1>
										{newsPage.hero.title}
									</h1>
								</div>
								{news.map(item => <Article key={item.slug} item={item} link={`/news/${item.slug}`} />).reverse()}
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

export async function getServerSideProps() {
    const [newsPage, news] = await Promise.all([
        fetchAPI('/news-page'),
        fetchAPI('/stories'),
    ]);
    return {
        props: { newsPage, news }
    };
}

export default News;

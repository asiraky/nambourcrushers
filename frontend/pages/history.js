import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from '../layout/Layout';
import Seo from '../layout/Seo';

import Sidebar from '../components/Sidebar';

import { fetchAPI } from '../lib/api';
import { replaceImages } from '../lib/replaceImages';

const History = ({ historyPage }) => {
    return (
        <Layout>
            <Seo seo={historyPage.seo} />
			<section className="main">
				<div className="container">
					<div className="row stretch">
						<div className="col-lg-8 col-md-12">
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
    const [historyPage] = await Promise.all([
        fetchAPI('/history-page'),
    ]);
    return {
        props: { historyPage }
    };
}

export default History;

import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../../layout/Layout";
import Seo from "../../layout/Seo";

import Sidebar from "../../components/Sidebar";

import { fetchAPI } from "../../lib/api";
import { replaceImages } from "../../lib/replaceImages";
import { getStrapiMedia } from "../../lib/media";

const Event = ({ eventsPage, event }) => {
    return (
        <Layout>
            <Seo seo={eventsPage.seo} />
			<section className="main">
				<div className="container">
					<div className="row stretch">
						<div className="col-lg-8 col-md-12">
							<div className="row">
								<div className="col-lg-12">
									<h1>
										{event.article.title}
									</h1>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<img src={getStrapiMedia(event.article.image)} className="news-article-image" />
								</div>
				            </div>
							<div className="row">
								<div className="col-lg-12">
									<ReactMarkdown source={replaceImages(event.article.content)} escapeHtml={false} />
								</div>
				            </div>
							<div className="row margin-top-30">
								<div className="col-lg-12">
									<Link href="/events">
										← Back to Events
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
    const [eventsPage, events] = await Promise.all([
        fetchAPI("/events-page"),
        fetchAPI(`/events?slug=${params.slug}`),
    ]);
    return {
        props: { eventsPage, event: events[0] }
    };
}

export default Event;

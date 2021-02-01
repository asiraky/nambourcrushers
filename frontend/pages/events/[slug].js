import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { fetchAPI } from "../../lib/api";
import { replaceImages } from "../../lib/replaceImages";

const Event = ({ eventsPage, event }) => {
    return (
        <Layout>
            <Seo seo={eventsPage.seo} />
            <div>
                <h1>{eventsPage.hero.title}</h1>
                <div>
                    <h2>{event.article.title}</h2>
                    <ReactMarkdown source={replaceImages(event.article.content)} escapeHtml={false} />
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const events = await fetchAPI("/events");

    return {
        paths: events.map(event => ({
            params: {
                slug: event.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const [eventsPage, events] = await Promise.all([
        fetchAPI("/events-page"),
        fetchAPI(`/events?slug=${params.slug}`),
    ]);

    return {
        props: { eventsPage, event: events[0] },
        revalidate: 1,
    };
}

export default Event;
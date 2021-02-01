import React from "react";

import Layout from "../components/Layout";
import Article from "../components/Article";
import Seo from "../components/Seo";
import { fetchAPI } from "../lib/api";

const Events = ({ eventsPage, events }) => {
    return (
        <Layout>
            <Seo seo={eventsPage.seo} />
            <div>
                <h1>{eventsPage.hero.title}</h1>
                <ul>
                    {events.map(e => <Article key={e.slug} article={e.article} link={`/events/${e.slug}`} />)}
                </ul>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const [eventsPage, events] = await Promise.all([
        fetchAPI("/events-page"),
        fetchAPI("/events"),
    ]);

    return {
        props: { eventsPage, events },
        revalidate: 1,
    };
}

export default Events;
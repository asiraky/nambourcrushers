import React from "react";

import Layout from "../../components/Layout";
import Article from "../../components/Article";
import Seo from "../../components/Seo";
import { fetchAPI } from "../../lib/api";

const Events = ({ eventsPage, events }) => {
    return (
        <Layout>
            <Seo seo={eventsPage.seo} />
			<div className="row">
				<div className="col-lg-12">
					<h1>
						{eventsPage.hero.title}
					</h1>
				</div>
				{events.map(item => <Article key={item.slug} item={item} link={`/events/${item.slug}`} />).reverse()}
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

import React from "react";

import Layout from "../../layout/Layout";
import Seo from "../../layout/Seo";

import Article from "../../components/Article";
import Sponsors from "../../components/Sponsors";

import { GlobalContext } from "../../layout/GlobalContext";
import { fetchAPI } from "../../lib/api";

const Events = ({ eventsPage, events }) => {
    return (
		<GlobalContext.Consumer>
			{({ sponsors }) => (
		        <Layout>
		            <Seo seo={eventsPage.seo} />
					<section className="main">
						<div className="container">
							<div className="row stretch">
								<div className="col-lg-8 col-md-12">
									<div className="row">
										<div className="col-lg-12">
											<h1>
												{eventsPage.hero.title}
											</h1>
										</div>
									</div>
									{events.map(item => <Article key={item.slug} item={item} link={`/events/${item.slug}`} />).reverse()}
								</div>
								<div className="col-lg-4 col-md-12">
									<Sponsors sponsors={sponsors} />
								</div>
							</div>
						</div>
					</section>
		        </Layout>
			)}
		</GlobalContext.Consumer>
    );
};

export async function getServerSideProps() {
    const [eventsPage, events] = await Promise.all([
        fetchAPI("/events-page"),
        fetchAPI("/events"),
    ]);
    return {
        props: { eventsPage, events },
        //revalidate: 1,
    };
}

export default Events;

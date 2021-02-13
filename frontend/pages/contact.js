import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { fetchAPI } from "../lib/api";
import { replaceImages } from "../lib/replaceImages";

const Contact = ({ contactPage }) => {
    return (
        <Layout>
            <Seo seo={contactPage.seo} />
			<div className="row">
				<div className="col-lg-12">
					<h1>
						{contactPage.hero.title}
					</h1>
				</div>
            </div>
            <div className="row">
				<div className="col-lg-12">
					<ReactMarkdown source={replaceImages(contactPage.content)} escapeHtml={false} />
				</div>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const [contactPage] = await Promise.all([
        fetchAPI("/contact-page"),
    ]);
    return {
        props: { contactPage },
        revalidate: 1,
    };
}

export default Contact;

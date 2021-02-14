import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../layout/Layout";
import Seo from "../layout/Seo";

import Sponsors from "../components/Sponsors";

import { GlobalContext } from "../layout/GlobalContext";
import { fetchAPI } from "../lib/api";
import { replaceImages } from "../lib/replaceImages";

const Contact = ({ contactPage }) => {
    return (
		<GlobalContext.Consumer>
			{({ sponsors }) => (
		        <Layout>
		            <Seo seo={contactPage.seo} />
					<section className="main">
						<div className="container">
							<div className="row stretch">
								<div className="col-lg-8 col-md-12">
									<div className="row">
										<div className="col-lg-12">
											<h1>
												{contactPage.page.title}
											</h1>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<ReactMarkdown source={replaceImages(contactPage.content)} escapeHtml={false} />
										</div>
						            </div>
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
    const [contactPage] = await Promise.all([
        fetchAPI("/contact-page"),
    ]);
    return {
        props: { contactPage },
        //revalidate: 1,
    };
}

export default Contact;

import React from "react";

import Layout from "../layout/Layout";
import Seo from "../layout/Seo";

import Fixture from "../components/Fixture";
import Sponsors from "../components/Sponsors";

import { GlobalContext } from "../layout/GlobalContext";
import { fetchAPI } from "../lib/api";

const Fixtures = ({ fixturesPage, fixtures }) => {
    return (
		<GlobalContext.Consumer>
			{({ sponsors }) => (
		        <Layout>
		            <Seo seo={fixturesPage.seo} />
					<section className="main">
						<div className="container">
							<div className="row stretch">
								<div className="col-lg-8 col-md-12">
									<div className="row">
										<div className="col-lg-12">
											<h1>
												{fixturesPage.hero.title}
											</h1>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<table className="fixtures-table">
												<thead>
													<tr>
														<th width="10%">
															Round
														</th>
														<th width="15%">
															Date
														</th>
														<th width="15%">
															Location
														</th>
														<th width="60%">
															Results
														</th>
													</tr>
												</thead>
												<tbody>
													{fixtures.map(f => <Fixture key={f.round} fixture={f} />)}
												</tbody>
											</table>
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

export async function getStaticProps() {
    const [fixturesPage, fixtures] = await Promise.all([
        fetchAPI("/fixtures-page"),
        fetchAPI("/fixtures?_sort=round:ASC"),
    ]);
    return {
        props: { fixturesPage, fixtures },
        revalidate: 1,
    };
}

export default Fixtures;

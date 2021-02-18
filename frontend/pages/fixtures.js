import React from 'react';

import Layout from '../layout/Layout';
import Seo from '../layout/Seo';

import Fixture from '../components/Fixture';
import Sidebar from '../components/Sidebar';

import { fetchAPI } from '../lib/api';
import { DateTime } from 'luxon';

const Fixtures = ({ fixturesPage, fixtures }) => {
    return (
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
							<Sidebar />
						</div>
					</div>
				</div>
			</section>
        </Layout>
    );
};

export async function getServerSideProps() {
	const now = DateTime.now().toFormat('yyyy-LL-dd');
    const [fixturesPage, fixtures] = await Promise.all([
        fetchAPI('/fixtures-page'),
        fetchAPI(`/fixtures?_sort=round:ASC&date_lte=${now}`)
    ]);
    return {
        props: { fixturesPage, fixtures }
    };
}

export default Fixtures;

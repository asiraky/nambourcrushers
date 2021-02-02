import React from "react";

import Layout from "../components/Layout";
import Fixture from "../components/Fixture";
import Seo from "../components/Seo";
import { fetchAPI } from "../lib/api";

const Fixtures = ({ fixturesPage, fixtures }) => {
    return (
        <Layout>
            <Seo seo={fixturesPage.seo} />
            <div>
                <h1>{fixturesPage.hero.title}</h1>
                <ul>
                    {fixtures.map(f => <Fixture key={f.round} fixture={f} />)}
                </ul>
            </div>
        </Layout>
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
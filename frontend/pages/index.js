import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <div>
        <h1>{homepage.hero.title}</h1>
          HOMEPAGE CONTENT
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const [homepage] = await Promise.all([
    fetchAPI("/homepage"),
  ]);

  return {
    props: { homepage },
    revalidate: 1,
  };
}

export default Home;
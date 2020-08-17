import React from "react";
import Layout from "../components/Layout";
import CardPrimary from "../components/Card-primary";
import { getAllArticles } from "../lib/contentful";

const Homepage = ({ articles }) => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8">
        {articles.map((article, index) => (
          <CardPrimary
            type={index === 0 ? "long" : "normal"}
            key={article.title}
            article={article}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Homepage;

export async function getStaticProps() {
  const articles = await getAllArticles();
  return {
    props: {
      articles,
    },
  };
}

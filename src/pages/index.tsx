import React from "react";
import Layout from "../components/Layout";
import CardPrimary from "../components/Card-primary";
import { getAllArticles, getOtherArticles } from "../lib/contentful";
import CardSecondary from "../components/card-secondary";
import AuthorBox from "../components/Author-box";
import PopularPost from "../components/PopularPost";

const Homepage = ({ featuredArticles, otherArticles }) => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8">
        {featuredArticles.map((article, index) => (
          <CardPrimary
            type={index === 0 ? "long" : "normal"}
            key={article.title}
            article={article}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-8 mt-12">
        <div className="lg:col-span-2 col-span-1 md:col-span-1 ">
          {otherArticles.slice(0, 3).map((article) => (
            <CardSecondary article={article} />
          ))}
        </div>
        <div className="col-span-1">
          <AuthorBox />
          <h4 className="text-sm mb-4">Popular posts</h4>
          {otherArticles
            .slice(3, 6)
            .reverse()
            .map((article) => (
              <PopularPost article={article} />
            ))}
        </div>
        {/* <div className=" flex flex-column justify-end">
          <AuthorBox />
        </div> */}
      </div>
    </Layout>
  );
};

export default Homepage;

export async function getStaticProps() {
  const articles = await getAllArticles();
  const otherArticles = await getOtherArticles();
  return {
    props: {
      featuredArticles: articles.reverse(),
      otherArticles,
    },
  };
}

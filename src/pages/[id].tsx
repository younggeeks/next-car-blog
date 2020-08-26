import React from "react";
import Layout from "../components/Layout";
import { IArticle } from "../components/Card-primary";
import { getSingleArticle } from "../lib/contentful";
import Newsletter from "../components/Newsletter";
import format from "date-fns/format";
import ReactMarkdown from "react-markdown";
const ArticleDetails: React.FC<{ article: IArticle }> = ({ article }) => {
  return (
    <Layout>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-20">
        <div className="rounded-lg overflow-hidden lg:col-span-2 col-span-3">
          <span className="text-gray-600">
            {format(new Date(article.date), "MMM, dd, Y")}
          </span>
          <div className="flex flex-row my-4 items-center">
            <img
              src={article.author.picture}
              alt={article.author.name}
              className="h-20 rounded-full mr-5"
            />
            <span className="block font-semibold text-gray-900">
              {article.author.name}
            </span>
          </div>
          <h3 className="text-5xl font-bold leading-tight font-sans text-gray-900 mb-5">
            {article.title}
          </h3>
          <img
            src={article.image}
            alt={article.title}
            className="h-longCard w-full object-cover object-center rounded-lg"
          />
          <section className="my-12 leading-loose">
            <ReactMarkdown source={article.body} />
          </section>
        </div>
        <div className="relative top-newsletter hidden lg:block">
          <Newsletter theme="light" />
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetails;

export async function getServerSideProps({ params }) {
  const article = await getSingleArticle(params.id);

  return {
    props: {
      article,
    },
  };
}

import React from "react";
import { IArticle } from "./Card-primary";
import format from "date-fns/format";
import Link from "next/link";
const PopularPost: React.FC<{ article: IArticle }> = ({ article }) => {
  return (
    <div className="w-full md:w-full sm:w-56  float-right mb-6">
      <img
        src={article.image}
        alt=""
        className="object-cover object-center rounded-md w-full "
      />

      <Link href="/:id" as={`/${article.id}`}>
        <a>
          <h4 className="font-semibold mt-2 text-gray-800">{article.title}</h4>
        </a>
      </Link>

      <span className="block text-xs i mt-2 text-gray-600">
        {article.author.name} - {format(new Date(article.date), "MMM, dd, Y")}
      </span>
    </div>
  );
};

export default PopularPost;

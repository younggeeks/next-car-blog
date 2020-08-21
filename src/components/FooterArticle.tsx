import React from "react";
import { IArticle } from "./Card-primary";
import format from "date-fns/format";

const FooterArticle: React.FC<{ article: IArticle }> = ({ article }) => {
  return (
    <div className="flex flex-row items-center">
      <img
        src={article.image}
        alt={article.title}
        className="h-20 w-16 object-cover object-right rounded-md"
      />
      <div className="flex flex-col ml-4">
        <h4 className="font-normal  text-white text-xs">{article.title}</h4>
        <span className="block text-xs i mt-1 text-gray-600">
          {article.author.name} - {format(new Date(article.date), "MMM, dd, Y")}
        </span>
      </div>
    </div>
  );
};

export default FooterArticle;

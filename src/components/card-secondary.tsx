import React from "react";
import { IArticle } from "./Card-primary";
import format from "date-fns/format";

const CardSecondary: React.FC<{ article: IArticle }> = ({ article }) => {
  return (
    <>
      <img
        src={article.image}
        alt=""
        className="object-center object-cover h-88 w-full rounded-md"
      />
      <div className="bg-white shadow-lg mx-6 relative -top-5  rounded-lg p-5 flex flex-col justify-between">
        <span className="bg-blue-600 py-1 px-2 rounded-sm text-xs text-white block self-start mb-4 w-100 ">
          {article.make}
        </span>
        <div>
          <span className="font-bold  block mb-2 text-gray-800">
            {article.title}
          </span>
          <span className=" text-xs font-thin block mb-2 text-gray-600 i">
            {article.author.name} -{" "}
            {format(new Date(article.date), "MMM, dd, Y")}
          </span>
          <p className="text-sm text-gray-700 excerpt">{article.body}</p>
        </div>
      </div>
    </>
  );
};

export default CardSecondary;

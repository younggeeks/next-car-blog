import React from "react";
import { IArticle } from "./Card-primary";
import format from "date-fns/format";

const CardSecondary: React.FC<{ article: IArticle }> = ({ article }) => {
  return (
    <div>
      <img
        src={article.image}
        alt=""
        className="object-center object-cover h-64 md:h-88 lg:h-88 w-full rounded-md"
      />
      <div className="bg-white shadow-lg mx-6 relative -top-5  rounded-lg sm:p-5 p-2 flex flex-col justify-between">
        <span className="bg-blue-600 py-1 px-2 rounded-sm text-xs text-white block self-start sm:mb-4 mb-2 w-100 ">
          {article.make}
        </span>
        <div>
          <span className="text-xs md:text-base lg:text-base font-bold  block sm:mb-2 mb-1 text-gray-800 ">
            {article.title}
          </span>
          <span className=" text-xs font-thin block sm:mb-2 mb-1 text-gray-600 i">
            {article.author.name} -{" "}
            {format(new Date(article.date), "MMM, dd, Y")}
          </span>
          <p className="text-sm text-gray-700 sm:excerpt excerpt-sm">
            {article.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSecondary;

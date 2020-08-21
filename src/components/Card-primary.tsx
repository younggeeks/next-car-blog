import React from "react";
import format from "date-fns/format";

export interface IArticle {
  title: string;
  author: IAuthor;
  date: Date;
  make: string;
  image: string;
  body: string;
  tags: string[];
  sendUsers: () => void;
}

export interface IAuthor {
  name: string;
  picture: string;
}

interface ICardPrimaryProps {
  article: IArticle;
  type: "long" | "normal";
}
const CardPrimary: React.FunctionComponent<ICardPrimaryProps> = ({
  type = "normal",
  article,
}) => {
  return (
    <div
      className={`h-${type === "long" ? "" : "64"} col-span-1 row-span-${
        type === "normal" ? 1 : 2
      } rounded-md`}
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.1),rgba(0,0,0,0.31),rgba(0,0,0,1)),url(${article.image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col h-full justify-between">
        <span className="bg-blue-600 py-1 px-2 rounded-sm text-xs text-white block self-start m-3 w-100 ">
          {article.make}
        </span>
        <div className=" self-end  text-white mx-4 mb-4">
          <span className="text-xs font-thin block">
            {article.author.name} -{" "}
            {format(new Date(article.date), "MMM, dd, Y")}
          </span>
          <span className="text-md">{article.title}</span>
        </div>
      </div>
    </div>
  );
};

export default CardPrimary;

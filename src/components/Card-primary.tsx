import React from "react";
import format from "date-fns/format";
import Link from "next/link";

export interface IArticle {
  id: string;
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
      className={` col-span-1  rounded-md ${
        type === "long" ? "row-span-2" : "h-64 row-span-1"
      } `}
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
          <Link href="/:id" as={`/${article.id}`}>
            <a>
              <span className="text-md">{article.title}</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardPrimary;

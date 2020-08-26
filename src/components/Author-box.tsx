import React from "react";

const AuthorBox = () => {
  return (
    <div className="w-full hidden md:hidden  lg:block float-right mb-6">
      <img
        src="https://avatars2.githubusercontent.com/u/5984570?s=460&u=c55a6dbf5a34552634b98c37114bef53bbb60514&v=4"
        alt=""
        className="object-cover object-center rounded-md w-full "
      />
      <h4 className="font-semibold mt-2 text-gray-800">Samjunior</h4>
      <span className="block text-xs i mt-2 text-gray-600">
        Distinguished Procrastinator
      </span>
      <p className="mt-3 text-gray-700 font-thin">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        accusantium dicta sint totam quod eaque veniam unde ab excepturi amet!
      </p>
      <button className="bg-gray-900 text-white text-md p-3 w-full rounded-md text-xs font-semibold mt-5">
        Continue Reading
      </button>
    </div>
  );
};

export default AuthorBox;

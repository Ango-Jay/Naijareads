import React from "react";
import news from "../../public/assets/newsgr.jpg";

const NewSect = () => {
  return (
    <div className="my-5">
      <h3>News and Interviews </h3>
      <p>the top romances burning up goodreads this summer</p>
      <img src={news} alt="news" />
      <p className="d-inline">19 likes .</p>
      <p className="d-inline">1 comment</p>
    </div>
  );
};

export default NewSect;

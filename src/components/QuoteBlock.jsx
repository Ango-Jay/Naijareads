import React, { useState } from "react";

const QuoteBlock = () => {
  return (
    <div>
      <div className="mt-5">
        <a href="/author/show/3565.Oscar_Wilde">
          <img
            alt="Oscar Wilde"
            src="https://images.gr-assets.com/authors/1521044377p2/3565.jpg"
          />
        </a>
      </div>
      <div>
        “Be yourself; everyone else is already taken.”
        <br /> ―<span>Oscar Wilde</span>
      </div>
    </div>
  );
};

export default QuoteBlock;

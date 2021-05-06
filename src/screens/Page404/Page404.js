import React from "react";
import { Link } from "react-router-dom";
import "./_page404.scss";

const Page404 = () => {
  return (
    <div className="page404">
      <div className="page404__container">
        <img
          src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
          alt="Not found page"
        />
        <p>
          This page isn't available. Sorry about that.
          <br /> Try searching for something else.
        </p>

        <span>
          <form>
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </form>
        </span>
        <div className="back">
          <Link to="/">Go home</Link>
          <a href="mailto:tunezepatrick@gmail.com">Contact Patrick</a>
        </div>
      </div>
    </div>
  );
};

export default Page404;

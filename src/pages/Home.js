import React from "react";

import SearchForm from "../components/SearchForm";
import Filters from "../components/Filters";
import Jobs from "../components/Jobs";

const Home = () => {
  return (
    <>
      <header className="header">
        <h1>
          Github <span>Jobs</span>
        </h1>

        <SearchForm />
      </header>

      <div className="content">
        <Filters />
        <Jobs />
      </div>
    </>
  );
};

export default Home;

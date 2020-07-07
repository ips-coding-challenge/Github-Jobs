import React, { useEffect, useState } from "react";

import SearchForm from "../components/SearchForm";
import Filters from "../components/Filters";
import Jobs from "../components/Jobs";
import axios from "axios";

let cachedJobs = [];

const Home = () => {
  const BASE_URL = "http://localhost:1337/jobs";
  const [location, setLocation] = useState("Paris");
  const [description, setDescription] = useState("python");
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    try {
      const response = await axios.get(BASE_URL, {
        params: { location, description, page },
      });
      console.log(`Response`, response);
      cachedJobs = response.data;
      setJobs(response.data);
    } catch (e) {
      console.log(`Error`, e);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    console.log(`Window innerwidth ${window.innerWidth}`);
    let listeners = {};
    if (window.innerWidth > 767) {
      listeners.scroll = scrollListener();
    }
    return () => {
      window.removeEventListener(listeners.scroll);
    };
  }, []);

  const scrollListener = () => {
    document.addEventListener("scroll", () => {
      const filters = document.querySelector(".home__filters");
      const jobs = document.querySelector(".home__jobs");

      if (window.scrollY > 200) {
        filters.classList.add("fixed");
        jobs.classList.add("filters-open");
      } else {
        filters.classList.remove("fixed");
        jobs.classList.remove("filters-open");
      }
    });
  };

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
        <Jobs jobs={jobs} />
      </div>
    </>
  );
};

export default Home;
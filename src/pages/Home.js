import React, { useEffect, useState, cloneElement } from "react";

import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import Filters from "../components/Filters";
import Jobs from "../components/Jobs";
import { findAllJobs } from "../api/ApiService";

const Home = () => {
  const [location, setLocation] = useState("New York");
  const [description, setDescription] = useState("");
  const [fulltime, setFulltime] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    setLoading(true);
    try {
      const data = await findAllJobs(description, location, fulltime);
      console.log(`Data`, data);
      setJobs(data);
      setLoading(false);
    } catch (e) {
      console.log(`Error`, e);
      setLoading(false);
    }
  };

  const addFilter = (filter) => {
    console.log(`Called`, filter.type);
    switch (filter.type) {
      case "location":
        setLocation(filter.value);
        break;
      case "fulltime":
        setFulltime(filter.value);
        break;
      case "description":
        setDescription(filter.value);
        break;
    }
  };

  useEffect(() => {
    getJobs();
  }, [location, description, fulltime]);

  return (
    <>
      <Header>
        <SearchForm addFilter={addFilter} />
      </Header>

      <div className="content">
        <Filters addFilter={addFilter} />
        {loading && <div className="loader">Loading...</div>}
        {!loading && jobs.length > 0 && <Jobs jobs={jobs} />}
        {!loading && jobs.length === 0 && (
          <div className="no-result">No result found...</div>
        )}
      </div>
    </>
  );
};

export default Home;

import React from "react";
import Job from "./Job";

const Jobs = ({ jobs }) => {
  // console.log(`jobs`, jobs);
  return (
    <div className="home__jobs">
      {jobs.map((item) => (
        <Job job={item} key={item.id} />
      ))}
    </div>
  );
};

export default Jobs;

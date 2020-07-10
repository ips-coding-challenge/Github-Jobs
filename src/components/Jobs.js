import React, { useEffect, useState } from "react";
import Job from "./Job";
import ReactPaginate from "react-paginate";

const Jobs = ({ jobs }) => {
  const [state, setState] = useState(jobs);
  const [offset, setOffset] = useState(0);
  const PER_PAGE = 5;

  useEffect(() => {
    setState(jobs);
  }, [jobs]);

  const handlePageClick = (data) => {
    setOffset(data.selected * PER_PAGE);
    window.scrollTo(0, 0);
  };

  return (
    <div className="home__jobs">
      {state.slice(offset, offset + PER_PAGE).map((item) => (
        <Job job={item} key={item.id} />
      ))}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(jobs.length / PER_PAGE)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Jobs;

import React from "react";

const Pagination = ({ currentPage, totalPage }) => {
  let items = [];

  for (let i = 1; i < totalPage; i++) {
    items.push(
      <li key={i} className="pagination-item">
        {i}
      </li>
    );
  }

  return <ul className="pagination">{items}</ul>;
};

export default Pagination;

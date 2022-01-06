import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pageCount = Math.ceil(itemsCount / pageSize);
  console.log(pageCount);
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a
              onClick={() => {
                onPageChange(page);
              }}
              className="page-link"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

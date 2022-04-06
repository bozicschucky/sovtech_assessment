import React, { useState, useRef } from "react";
import ReactPaginate from "react-paginate";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_ALL_PEOPLE_QUERY } from "../queries/people";
import { ITEMS_PER_PAGE } from "../constants";

export default function GetPeople() {
  const [pageState, setPageState] = useState(1);
  let { loading, error, data, refetch } = useQuery(GET_ALL_PEOPLE_QUERY, {
    variables: { page: pageState },
  });
  const pageCountValue = useRef(0);
  const currentPage = useRef(0);

  const dataset = data?.people;

  if (dataset) {
    pageCountValue.current = Math.trunc(dataset?.count / ITEMS_PER_PAGE);
  }

  //@ts-ignore
  const handlePageClick = (e) => {
    const { selected } = e;
    setPageState(selected + 1);
    refetch();
    currentPage.current = selected;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <div>
        <h2>All the Star Wars People's details you've ever wanted</h2>
        {dataset.results?.map(({ name = "" }) => (
          <div key={name} className="card">
            <Link to={`person/${name}`}>
              <div>
                <p>{name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="paginate">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCountValue.current}
          forcePage={currentPage.current}
          previousLabel="<<"
          containerClassName="pagination "
          pageClassName="page-item"
          activeClassName="active-item"
          previousClassName="previous-item"
          nextClassName="next-item"
        />
      </div>
    </>
  );
}

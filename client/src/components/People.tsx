import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_ALL_PEOPLE_QUERY } from "../queries/people";

type props = {
  page: number;
};
export default function GetPeople(props: props) {
  const page = props?.page || 1;
  const { loading, error, data } = useQuery(GET_ALL_PEOPLE_QUERY, {
    variables: { page },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <div>
        <h2>All the Star Wars People's details you've ever wanted</h2>
        {
          // @ts-ignore
          data?.people?.results?.map(({ name }) => (
            <div key={name} className="card">
              <Link to={`person/${name}`}>
                <div>
                  <p>{name}</p>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </>
  );
}

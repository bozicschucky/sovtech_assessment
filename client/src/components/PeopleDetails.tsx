import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PERSON_DETAILS_QUERY } from "../queries/personDetails";

export default function PeopleDetails() {
  const { name } = useParams();
  const { loading, error, data } = useQuery(GET_PERSON_DETAILS_QUERY, {
    variables: { name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const personDetails = data?.search?.results[0];
  return (
    <div className="card">
      <h3>User Info</h3>
      <p>Name: {personDetails.name}</p>
      <p>Gender: {personDetails.gender}</p>
      <p>Height: {personDetails.height}</p>
      <p>Mass: {personDetails.mass}</p>
      <p>HomeWorld : {personDetails.homeworld}</p>
    </div>
  );
}

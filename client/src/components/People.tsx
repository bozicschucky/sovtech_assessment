import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PEOPLE_QUERY } from "../queries/people";

export default function GetPeople() {
  const { loading, error, data } = useQuery(GET_ALL_PEOPLE_QUERY);
  console.log("🚀 ~ file: People.tsx ~ line 7 ~ GetPeople ~ data", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  // @ts-ignore
  return data?.people?.results?.map(({ name, gender, height }) => (
    <div key={name}>
      <div>
        <p>
          {name}: {gender} :{height}
        </p>
      </div>
    </div>
  ));
}

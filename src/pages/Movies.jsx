import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/ui/Card";

const Movies = () => {
  const moviesData = useLoaderData();
  // console.log(moviesData);
  return (
    <ul className="container grid grid-four--cols">
      {moviesData.Search.map((currMovie) => {
        return <Card key={currMovie.imdbID} currMovie={currMovie} />;
      })}
    </ul>
  );
};

export default Movies;

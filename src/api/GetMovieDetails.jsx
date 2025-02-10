const getMovieDetails = async ({ params }) => {
  console.log("Helooo", params);
  const id = params.movieID;
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=1c12799f`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getMovieDetails;

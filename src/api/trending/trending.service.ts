import config from "../../config";
import axios from "axios";

export const trendingService = async (): Promise<unknown> => {
  //   const { trendingType } = params;
  const movieResponse = await axios.get(
    `${config.tmdb.api_url}/trending/movie/week?api_key=${config.tmdb.api_key}`
  );
//   const movieList = movieResponse.data.results;
  const tvResponse = await axios.get(
    `${config.tmdb.api_url}/trending/tv/week?api_key=${config.tmdb.api_key}`
  );
  const trendingList = movieResponse.data.results.slice(0, 5).concat(tvResponse.data.results.slice(0,5));
  // Shuffle
  return trendingList.sort(() => Math.random() - 0.5);
};

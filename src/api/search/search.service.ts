import config from "../../config";
import axios from "axios";
export const searchService = async (params: {
  searchTerm: string;
  searchType: string;
}): Promise<unknown> => {
  const { searchTerm, searchType } = params;
  const response = await axios.get(
    `${config.tmdb.api_url}/search/${searchType}?api_key=${config.tmdb.api_key}&language=en-US&query=${searchTerm}&include_adult=falseappend_to_response=external_ids`
  )

  return response.data;
};

const tmdbAPI_KEY = '19f84e11932abbc79e6d83f82d6d1045';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${tmdbAPI_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${tmdbAPI_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${tmdbAPI_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${tmdbAPI_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${tmdbAPI_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${tmdbAPI_KEY}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${tmdbAPI_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${tmdbAPI_KEY}&with_genres=99`
};

export default requests;

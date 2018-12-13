import MOVIEDB_API_KEY from "../config/movieDB.js"

var searchMovieDB = (query, callback) => {

	query = query.trim().split(' ').join('%20');

	var settings = {
  "async": true,
  "crossDomain": true,
  "url": `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&query=${query}&page=2&include_adult=true`,
  "method": "GET",
  "headers": {},
  "data": "{}"
	}

	$.ajax(settings).done((response) => {
		  callback(response.results)
	});

}

export default searchMovieDB;
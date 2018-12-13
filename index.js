import App from './components/App.js';
import searchMovieDB from './lib/searchMovieDB.js'

var root = document.getElementById('app');
ReactDOM.render(<App searchMovieDB={searchMovieDB}/>, root);

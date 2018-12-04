// App will be my only stateful class component. The rest of my modules 
// will be functional classless components.
import exampleData from '../exampleData.js'
import MovieList from './MovieList.js'

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			movieList: exampleData,
			isHidden: false
		}
	}

	updateData(data) {
		this.setState({
			movieList: data
		})
	}

	filterMovieList () {
		//if the value of the li elements are not equal to what the user submits, then 
			//they should be toggled off. 
		var $input = document.getElementsByClassName('input');
		var $listElements = document.getElementsByClassName('movie-title')



		//this is how you would filter the HTML Collection on the DOM
		$listElements = Array.prototype.filter.call($listElements, movie => {
			return movie.textContent === $input[0].value
		})


		var filteredData = exampleData.filter(movie =>
			movie.title === $input[0].value
		)


		this.updateData(filteredData);


	}

	render() {
		return (
			<div className='container'>
				<h1>Movie List</h1>	
					<input className="input" type="text" placeholder="Search..." />
					<button className="go-button" onClick={
						(event) => this.filterMovieList()
					}>GO</button>
				<MovieList movies={this.state.movieList} />
			</div>
		);
	}


}

export default App;

class AddMovies extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			movieInput: ''
		}
	}

	handleChange (userInput) {
		this.setState({
			movieInput: userInput
		})
	}

	clearInput() {
		this.setState({
			movieInput: ''
		})
	}

	render() {

	return (

		<div className="add-movies">
			<input value={this.state.movieInput} onChange={(event) => this.handleChange(event.target.value)} 
				id="add-movies" type="text" placeholder="Add a Movie Title!"/>

			<button className="add-movie-button" 
				onClick={(event) => {
					this.props.addMovie(this.state.movieInput);
					this.clearInput()
				}


			}

			>Add Movie</button>
		</div>

		)

	}
}

export default AddMovies;

//logic for making a 
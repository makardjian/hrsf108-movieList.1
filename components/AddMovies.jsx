
class AddMovies extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			addMovieInput: ''
		}
	}

	handleChange () {

	}

	render() {

	return (

		<div>
			<input value='' id="add-movies" type="text" placeholder="Add a Movie Title!"/>
			<button className="add-movie-button" onClick={(event) => {} }>GO</button>
		</div>

		)

	}
}

export default AddMovies;



//the input field will have an onChange attribute that records anychanges to the field.
	//when something changes, we invoke handleChange
		//handleChange sets the state of addMovieInput to the event.target.value



//the button click function will contain an event listener which will invoke a clearExampleData function
//in the App. 
	//this funciton should clear the movies that are currently on this.state.currentList
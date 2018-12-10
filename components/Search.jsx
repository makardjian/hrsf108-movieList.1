

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: ''
		}
	}

	handleChange(event) {
		this.setState({
			input: event.target.value
		})
	}

	clearInput() {
		this.setState({
			input: ''
		})
	}

	render() {
		return (
		<div>
			<input value={this.state.input} onChange={(event) => this.handleChange(event)} 
				type="text" placeholder="Search Me..."/>

			<button className="search-button" onClick={(event) => {
				var currentData = {title: this.state.input};
				this.props.updateMovieList(this.state.input);
				this.clearInput()
				}
			}
				>Search</button>
		</div>
		)
	}
}

export default Search;




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

	render() {
		return (
		<div>
			<input value={this.state.input} onChange={(event) => this.handleChange(event)} type="text" placeholder="Search Me..."/>
			<button className="go-button" onClick={ (event) => {

				var currentData = {title: this.state.input}

				this.props.updateMovieList(this.state.input)

				}
			}
				>GO</button>
		</div>
		)
	}
}

export default Search;


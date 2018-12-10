
var WatchedToggle = (props) => {
	if (props.movie.watched) {
		return (
			<button className="watched" onClick={(event) => 
				props.toggleWatched(props.index)}
				>Watched</button>
		)

	} else {

		return (

			<button className="not-watched" onClick={(event) => 
			props.toggleWatched(props.index)}
			>Watched</button>
		)
	}
}


export default WatchedToggle
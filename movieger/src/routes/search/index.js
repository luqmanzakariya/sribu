import { h, Component } from 'preact';
import style from './style';
import { connect } from 'preact-redux';
import {getMovieDetails} from '../../store/actions/index'
import Card from 'preact-material-components/Card';

class Profile extends Component {
	state = {
		movieId : this.props.id,
    movieDetails : []
	};

	componentDidMount(){
    this.props.fetchDetails(this.props.id)
  }

	render({ user }, { time, count }) {
		console.log(this.props)
		let {loading, details} = this.props
		details ? console.log(details) : console.log('belum')
		return (
			<div class={style.card}>
				{/* <h1>Profile:</h1>
				<p>This is the user profile for a user named .</p> */}
				{/* <Card>
					<div class={style.row}>
						<div >
          		<img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt="Movie" style="width:18rem"></img>
						</div>
						<div >
							<h1>{details.original_title}</h1>
							<p>{details.overview}</p>
						</div>
					</div>
				</Card> */}
				
					
					<Card>
						<div class={style.row}>
							<div class={style.col}>
								<img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt="Movie" style="width:18rem"></img>
							
							</div>
							
							<div class={style.content}>
								<h4 class={style.title}><b>{details.original_title}</b></h4>
								<p class={style.subtitle}>Description</p>
								<p class={style.overview}>{details.overview}</p>
								<p class={style.subtitle}>Website</p>
								<p class={style.overview}>{details.homepage}</p>
								<p class={style.recap}>Release: {details.release_date} | Vote: {details.vote_average} | Popularity: {details.popularity}</p>
							</div>
							
						</div>
					</Card>
					
					

					
				

		
			</div>
		);
	}
}

const mapStateToProps = (state) =>{
  return {
    // movies: state.movies.movies,
    loading: state.loading.isLoading,
    details: state.movies.details
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDetails: (params) => {dispatch(getMovieDetails(params))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
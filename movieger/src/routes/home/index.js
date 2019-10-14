import { h, Component, Image } from 'preact';
import { connect } from 'preact-redux';
import { getPopularMovie, loadingTrue, loadingFalse } from '../../store/actions/index'
import style from './style';

import axios from 'axios'
import Card from './card'

class Home extends Component {
	// state = {
	// 	movies: [],
	// 	test: 'ini dari test'
	// };

	componentDidMount() {
		// axios({
		// 	url: `https://api.themoviedb.org/3/movie/popular?api_key=28540aa21a6ba6b0686abb4c8a82f1b5&page=${1}`,
		// 	method: `get`,
		// })
		// 	.then(({data})=>{
		// 		console.log(data)
		// 		this.setState({ movies: data });
		// 		// this.state.movies = data
		// 	})
		// 	.catch((err)=>{
		// 		console.log(err)
		// 	})
		this.props.fetchMovie(1)
	}

	render() {
		let {movies, loading} = this.props

		return (
			<div class={style.home}>
				<div class={style.row}>
					{/* <h1>Movieger</h1>
					<p>The best place for movie mania!</p> */}
				</div>
				<div class={style.row}>
					
						{/* { 
							this.state.movies.results ?  
								this.state.movies.results.map( (movie, index) => (
									<Card movie={movie} key={index}></Card>
								)) 
							
							: console.log('belum')
						} */}

						{ 
							movies ?  
								movies.map( (movie, index) => (
									<Card movie={movie} key={index}></Card>
								)) 
							
							: console.log('belum')
						}
								
				</div>

		</div>
		);
	}
}

const mapStateToProps = (state) =>{
  return {
    movies: state.movies.movies,
    loading: state.loading.isLoading
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMovie: (val) => {dispatch(getPopularMovie(val))},
  hideLoading: () => {dispatch(loadingFalse())},
  showLoading: () => {dispatch(loadingTrue())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// const Home = () => (
// 	<div class={style.home}>
// 		<h1>Home</h1>
// 		<p>This is the Home component.</p>
// 	</div>
// );

// export default Home;

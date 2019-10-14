import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { connect } from 'preact-redux';
import {searchMovieTitle, loginTrue, loginFalse} from '../../store/actions/index'
// const Header = () => (
// 	<header class={style.header}>
// 		<h1>Preact App</h1>
// 		<nav>
// 			<Link activeClassName={style.active} href="/">Home</Link>
// 			<Link activeClassName={style.active} href="/search">Search</Link>
// 			<Link activeClassName={style.active} href="/profile/john">John</Link>
// 			<input type="text" placeholder="search movie"></input>
// 		</nav>
// 	</header>
// );

class Header extends Component {
	state = {
    search : ''
	}

	setSearch = (e)=> {
		console.log(e.target.value)
    this.props.searchMovie(e.target.value)
  }
	
	render() {
		return (
			<header class={style.header}>
			{/* <h1>Preact App</h1> */}
			<Link activeClassName={style.active} href={`/`}>
				<img
					src="../../assets/icons/movieger.png"
					width="130"
					height="45"
					className="logoHeader d-inline-block align-top"
					alt="React Bootstrap logo"
					style="margin-left: 50px"
					class={style.logo}
					// onClick={this.handleClick}
				/>
			</Link>
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
				{/* <Link activeClassName={style.active} href="/search">Search</Link>
				<Link activeClassName={style.active} href="/profile/john">John</Link> */}
				<input onChange={this.setSearch} type="text" placeholder="Search movie title..." style="margin-right: 50px"></input>
			</nav>
		</header>
		)
	}
}

const mapStateToProps = (state) =>{
  return {
    movies: state.movies,
    isLogin: state.isLogin.isLogin
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchMovie: (e) => {dispatch(searchMovieTitle(e))},
  loginTrue: () => {dispatch(loginTrue())},
  loginFalse: () => {dispatch(loginFalse())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

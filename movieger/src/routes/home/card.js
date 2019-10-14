import { h, Component, Image } from 'preact';
import style from './style';
import { Link } from 'preact-router/match';

import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';


export default class MovieList extends Component {
  handleClick = (id) => {
    console.log('masuk', id)
  }

  render(){
    const {movie} = this.props
    
    // console.log(movie.id)

    return (
      <div class={style.card} onClick={() => {this.handleClick(movie.id)}}>
        {/* <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie" style="width:30%; height: 30%"></img> */}

        <Link activeClassName={style.active} href={`/search/${movie.id}`}>
          <Card>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie" style="width:18rem"></img>
          </Card>
        </Link>

        {/* <div class={style.row}>
          <div class={style.col}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie" style="width:30%; height: 30%"></img>
            
          
          </div>
          <div class={style.col}>
            <h4><b>{movie.original_title}</b></h4>
            <p>Vote: {movie.vote_average}</p>
          </div>
        </div> */}

        {/* <div>
          <h4><b>{movie.original_title}</b></h4>
          <p>Vote: {movie.vote_average}</p>
        </div> */}
      </div>
    )
  }

}
import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    let res = await Axios.get(`http://localhost:5000/movies`);

    this.setState({
      movies: res.data.movies,
    });
  }

  showMovies = () => {
    return this.state.movies.map((eachMovie) => {
      return (
        <li key={eachMovie._id}>
          <h1>{eachMovie.title}</h1>
          <h2>{eachMovie.director}</h2>
          <Link to={`/movies/${eachMovie._id}`}>
            <img src={eachMovie.image} />
          </Link>
          {/* <p>{eachMovie.description}</p> */}
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        Movies Component
        {this.showMovies()}
      </div>
    );
  }
}

export default Movies;
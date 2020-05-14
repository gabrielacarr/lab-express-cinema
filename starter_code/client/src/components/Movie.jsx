import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class Movie extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    const res = await Axios.get(
      `http://localhost:5000/movies/${this.props.match.params.id}`
    );
    this.setState({
      movie: res.data,
    });
  }
  render() {
    const { title, director, stars, image, description } = this.state.movie;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{director}</h2>
        <ul>{stars && stars.map((star) => <li key={star}>{star}</li>)}</ul>
        <img src={image} alt={title} />
        <p>{description}</p>
        <br />
        <Link to="/movies">
          <p>Go Back</p>
        </Link>
      </div>
    );
  }
}
export default Movie;
/** 
 *  title: "The Strangers: Prey at Night",
    director: "Johannes Roberts",
    stars: ["Christina Hendricks", "Bailee Madison", "Martin Henderson"],
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    description:
      "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
    showtimes: ["
 */
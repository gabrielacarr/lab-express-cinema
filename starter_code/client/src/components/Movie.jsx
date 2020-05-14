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

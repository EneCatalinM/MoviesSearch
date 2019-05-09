import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Nav from "./components/Nav";
import { API_KEY } from "./components/ApiKey";
import Movie from "./components/Movie";
import Error from "./components/Error";
class App extends Component {
  //state component
  state = {
    movies: []
  };
  //fetch the API and take the data
  getMovies = async e => {
    e.preventDefault();
    const movieName = e.target.elements.movieName.value;
    const api_call = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}&plot=full`
    );
    const data = await api_call.json();
    console.log(data);
    // if (data.Response === "False") {
    //   return <Error />;
    // }
    this.setState({ movies: data.Search });
  };
  render() {
    //if movies is empty that means it does not exist such a film so will throw an error
    //if movie contains data will show on the screen
    if (this.state.movies) {
      return (
        <div className="App ">
          <Nav />
          <Form getMovies={this.getMovies} />
          <Movie movies={this.state.movies} />
        </div>
      );
    } else {
      return (
        <div className="App ">
          <Nav />
          <Form getMovies={this.getMovies} />
          <Error />
        </div>
      );
    }
  }
}
export default App;

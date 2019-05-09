import React from "react";
//this is the form for input and search button
const Form = props => (
  <form className="container text-center" onSubmit={props.getMovies}>
    <input type="text" name="movieName" className="form__input" />
    <button className="btn btn-outline-success">Search</button>
  </form>
);

export default Form;

import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {
    // I took the movie list and background of the movie.the beackground picture does not want to show up 
    // when i  load it. can you please let me know the right way to upload a link or image.
    // I chose batman he is my favorite superhero movie.
  render() {
    let batmanOne = {
      title: "Batman Begins",
      year: "2005",
      poster:"https://www.imdb.com/title/tt0372784/mediaviewer/rm2827249920?ref_=tt_ov_i",
      rating: "PG-13",
      genre: "Action, Adventure",
      description:
        "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
    };

    let batmanTwo = {
      title: "The Dark Knight",
      year: "2008",
      poster:"https://www.imdb.com/title/tt0468569/mediaviewer/rm4023877632?ref_=tt_ov_i",
      rating: "PG-13",
      genre: "Action,Crime,Drama",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    };

    let batmanThree = {
      title: "The Dark Knigth Rises",
      year: "2012",
      poster:"https://www.imdb.com/title/tt1345836/mediaviewer/rm834516224?ref_=tt_ov_i",
      rating: "PG-13",
      genre: "Action, Adventure",
      description:
        " Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
    };
    return (
      <div>
        <div className="container">
          <h1>
            The Batman Movies
            
          </h1>
          <div>
            <Movie {...batmanOne} />
            <br />
            <Movie {...batmanTwo} />
            <br />
            <Movie {...batmanThree} />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
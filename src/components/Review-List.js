import React from "react";
import ReviewForm from "./Review-Form";

export default class ReviewList extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header user text-white">User Review</div>
        <div className="card-body">
          <ReviewForm />
        </div>
      </div>
    );
  }
}
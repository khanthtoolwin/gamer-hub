import React from "react";
import "./GameDetail.css";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import ReviewCard from "../../Components/ReviewCard/ReviewCard";

import { BsCalendarDateFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";

const GameDetail = () => {
  const [data, setData] = React.useState(null);
  const [reviews, setReviews] = React.useState([]);
  const params = useParams();
  React.useEffect(() => {
    fetch(`http://localhost:5171/games/${params.id}`)
      .then((res) => res.json())
      .then((game) => setData(game))
      .catch((e) => console.log(e.message));
  });
  React.useEffect(() => {
    fetch("http://localhost:5171/reviews")
      .then((res) => res.json())
      .then((reviewData) => setReviews(reviewData))
      .catch((e) => console.log(e.message));
  });

  return (
    <>
      {data && (
        <div className="container">
          <div className="hero-section">
            <div className="cover-image">
              <img src={data.coverImage} />
            </div>
            <div className="game-details">
              <p className="title">{data.title}</p>

              <ul className="genre">
                {data.genre.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
              <section className="released-year">
                <BsCalendarDateFill
                  style={{
                    fontSize: 24,
                    color: "#c9c9c9",
                  }}
                />
                <p>Released In - {data.releaseYear}</p>
              </section>
              <div className="available-platforms">
                <IoGameController style={{ fontSize: 24 }} />
                <span>Available on: </span>
                {data.platforms.map((platform, index) => {
                  return (
                    <div key={index} className="platform">
                      {platform}
                    </div>
                  );
                })}
              </div>
              <div className="ratings">
                <div className="rating-item">
                  <h4>avg rating</h4>
                  <p>{data.averageRating}</p>
                </div>
                <div className="rating-item">
                  <h4>reviews</h4>
                  <p>67</p>
                </div>
                <div className="rating-item">
                  <h4>recommended</h4>
                  <p>94%</p>
                </div>
              </div>

              <Link to="/add-review">
                <FaPencilAlt style={{ fontSize: 12, marginRight: 8 }} />
                Write a review
              </Link>
            </div>
          </div>
          <hr />
          <div className="description">
            <h3>Description</h3>
            <p>{data.description}</p>
          </div>
          <hr />
          <div className="reviews">
            <h3>Reviews Section</h3>
            {reviews &&
              reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GameDetail;

import React from "react";
import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";
import { ImCheckmark } from "react-icons/im";
const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <div>
          <h4>{review.author}</h4>
          <small>
            {review.hoursPlayed} hours played ·{" "}
            {new Date(review.createdAt).toLocaleDateString()}
          </small>
        </div>
        <div>
          <h5>Rating: {review.rating}/5</h5>
        </div>
      </div>
      <div className="review-body">
        <h4>{review.title}</h4>
        <small>{review.body}</small>
        <div className="pros-cons">
          <div>
            <FaThumbsUp style={{ color: "#32c91e", marginRight: 4 }} />
            <b style={{ color: "#32c91e" }}>Pros</b>
            <ul>
              {review.pros.map((pro, i) => (
                <li key={i}>{pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <FaThumbsDown style={{ color: "#c41f1f", marginRight: 4 }} />
            <b style={{ color: "#c41f1f" }}>Cons</b>
            <ul>
              {review.cons.map((con, i) => (
                <li key={i}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            color: "#32c91e",
          }}
        >
          {review.recommended && (
            <>
              <ImCheckmark />
              <h4 style={{ margin: 0 }}>Recommended</h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

import React from "react";
import "./ReviewForm.css";
const ReviewForm = () => {
  return (
    <div className="form-container">
      <form>
        <div className="form-control-grid">
          <div>
            <label>Username</label>
            <input type="text" />
          </div>
          <div>
            <label>Hours played</label>
            <input type="number" />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="">Review Headline</label>
          <input type="text" placeholder="Summarise your take in one line" />
        </div>
        <div className="form-control">
          <label htmlFor="">Full Review</label>
          <textarea cols="30" rows="6" placeholder="Be specific and honest" />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;

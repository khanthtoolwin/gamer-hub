import React from "react";
import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";
import { ImCheckmark } from "react-icons/im";
const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col gap-5 rounded-lg border border-slate-700 p-4">
      <div className="flex justify-between text-xs text-slate-300">
        <div className="flex flex-col gap-0.5">
          <h4>{review.author}</h4>
          <p>
            {review.hoursPlayed} hours played ·{" "}
            {new Date(review.createdAt).toLocaleDateString()}
          </p>
        </div>
        <h5>Rating: {review.rating}/5</h5>
      </div>

      <div className="text-sm">
        <h4 className="font-semibold">{review.title}</h4>
        <p className="mb-5 text-slate-400">{review.body}</p>

        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-1">
            <div className="flex items-start gap-1 text-green-400">
              <FaThumbsUp />
              <p>Pros</p>
            </div>
            <ul className="mx-5 list-disc">
              {review.pros.map((pro, i) => (
                <li key={i}>{pro}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-red-500">
              <FaThumbsDown />
              <p>Cons</p>
            </div>
            <ul className="mx-5 list-disc">
              {review.cons.map((con, i) => (
                <li key={i}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 flex items-start gap-1 text-green-500">
          {review.recommended && (
            <>
              <ImCheckmark />
              <h4>Recommended</h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

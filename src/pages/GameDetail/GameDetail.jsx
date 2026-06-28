import React from "react";

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
    fetch(`http://localhost:5171/reviews?gameId=${params.id}`)
      .then((res) => res.json())
      .then((reviewData) => setReviews(reviewData))
      .catch((e) => console.log(e.message));
  }, [params.id]);

  return (
    <>
      {data && (
        <div className="mx-auto min-h-screen max-w-7xl rounded-md border border-slate-800 bg-[#0a0a12] p-6 text-slate-100">
          {/* Hero Section Container */}
          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-white/5 bg-[#0f0f1a] p-6 shadow-2xl md:grid-cols-[400px_1fr]">
            {/* Left grid side */}
            <div className="group relative aspect-3/4 overflow-hidden rounded-xl shadow-lg shadow-black/50 md:aspect-auto">
              <img
                src={data.coverImage}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={data.title}
              />
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium text-white">
                  View Full Screen
                </span>
              </div>
            </div>

            {/* Right Side: Game Details */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h1 className="mb-3 bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-3xl font-black tracking-tight text-transparent uppercase italic md:text-4xl">
                  {data.title}
                </h1>

                {/* Genres */}
                <ul className="mb-6 flex list-none flex-wrap gap-2 p-0">
                  {data.genre.map((item, index) => (
                    <li
                      key={index}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-blue-400 uppercase"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  {/* Release Year */}
                  <section className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/2 px-4 py-2.5 shadow-md">
                    <BsCalendarDateFill className="text-xl text-indigo-400" />
                    <p className="text-sm font-semibold text-slate-300">
                      Released In &mdash;{" "}
                      <span className="text-white">{data.releaseYear}</span>
                    </p>
                  </section>

                  {/* Platforms */}
                  <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-300">
                    <div className="flex items-center gap-1.5 rounded-xl border border-white/5 bg-white/2 px-3 py-2">
                      <IoGameController className="text-xl text-indigo-400" />
                      <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                        Platforms:
                      </span>
                    </div>
                    {data.platforms.map((platform, index) => (
                      <span
                        key={index}
                        className="rounded-lg border border-slate-700/50 bg-slate-800/80 px-3 py-1.5 text-xs font-bold text-slate-200 shadow-sm"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* avgRating, reviews.length & recommended */}
                <div className="my-6 grid grid-cols-3 gap-4 rounded-xl border border-white/5 bg-white/1 p-4 backdrop-blur-sm">
                  <div className="text-center">
                    <h4 className="mb-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                      Avg Rating
                    </h4>
                    <p className="text-2xl font-black tracking-tight text-amber-400 md:text-3xl">
                      {data.averageRating}
                    </p>
                  </div>
                  <div className="border-x border-white/5 text-center">
                    <h4 className="mb-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                      Reviews
                    </h4>
                    <p className="text-2xl font-black tracking-tight text-indigo-400 md:text-3xl">
                      {reviews.length}
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="mb-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                      Recommend
                    </h4>
                    <p className="text-2xl font-black tracking-tight text-emerald-400 md:text-3xl">
                      94%
                    </p>
                  </div>
                </div>
              </div>

              {/* Create Review btn */}
              <Link
                to={`/games/${data.id}/add-review`}
                state={{ title: data.title, coverImg: data.coverImage }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white no-underline shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:from-indigo-500 hover:to-violet-500 hover:shadow-indigo-500/30 active:scale-[0.98]"
              >
                <FaPencilAlt className="text-xs" />
                Write a review
              </Link>
            </div>
          </div>

          {/* Description */}
          <div className="my-8 border-t border-white/5 pt-6">
            <h3 className="mb-3 text-xs font-bold tracking-wide text-indigo-400 uppercase">
              Description
            </h3>
            <p className="text-justify text-[15px] leading-relaxed text-slate-400">
              {data.description}
            </p>
          </div>

          {/* Reviews */}
          <div className="my-8 border-t border-white/5 pt-6">
            <h3 className="mb-4 text-xs font-bold tracking-wide text-indigo-400 uppercase">
              User Reviews ({reviews.length})
            </h3>
            <div className="space-y-4">
              {reviews && reviews.length > 0 ? (
                reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))
              ) : (
                <p className="text-sm text-slate-500 italic">
                  No reviews yet. Be the first to write one!
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameDetail;

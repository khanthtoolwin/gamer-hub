import { IoMdRemoveCircle } from "react-icons/io";
import { PiThumbsUp, PiThumbsDown } from "react-icons/pi";
import { TiStar, TiTick } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const ReviewForm = () => {
  const { id } = useParams();

  const location = useLocation();
  const gameTitle = location.state?.title || "this game";
  const gameCoverImg = location.state?.coverImg;

  const form = useForm({
    defaultValues: {
      author: "",
      rating: 1,
      title: "",
      body: "",
      pros: [{ value: "" }],
      cons: [{ value: "" }],
      hoursPlayed: 0,
      recommended: true,
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const {
    fields: proFields,
    append: appendPro,
    remove: removePro,
  } = useFieldArray({
    name: "pros",
    control,
  });
  const {
    fields: conFields,
    append: appendCon,
    remove: removeCon,
  } = useFieldArray({
    name: "cons",
    control,
  });

  React.useEffect(() => {
    fetch;
  });

  const onSubmit = (data) => {
    const payload = {
      ...data,
      gameId: parseInt(id), // store the review to specific game
      pros: data.pros.map((p) => p.value),
      cons: data.cons.map((c) => c.value),
      createdAt: new Date().toISOString(),
    };
    fetch("http://localhost:5171/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  };
  return (
    <>
      <div className="mx-auto mb-5 flex max-w-140 items-center gap-4">
        <img
          src={gameCoverImg}
          alt="Cover Image"
          className="h-30 w-25 rounded border-2 border-slate-400 object-cover"
        />
        <div className="flex flex-col items-start">
          <h3 className="text-center text-3xl text-indigo-400">{gameTitle}</h3>
          <span>Share your thoughts on this game</span>
        </div>
      </div>
      <hr className="mx-auto my-5 max-w-160 text-indigo-400" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex max-w-140 flex-col gap-y-3 rounded-lg border border-slate-300 p-7"
      >
        <h3 className="mb-0 flex items-start gap-1 text-indigo-500">
          <FaUser />
          Your Details
        </h3>

        <div className="grid grid-cols-2 gap-3.5 text-indigo-500">
          <div className="flex flex-col">
            <label htmlFor="author" className="text-sm opacity-85">
              Your Name
            </label>
            <input
              type="text"
              className="rounded border border-indigo-400 p-2 text-indigo-500"
              placeholder="John Doe"
              {...register("author", {
                required: "Author's name is required.",
              })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="hoursPlayed" className="text-sm opacity-85">
              Hours Played
            </label>
            <input
              type="number"
              name="hoursPlayed"
              id="hoursPlayed"
              className="rounded border border-indigo-400 p-2"
              {...register("hoursPlayed")}
            />
            <p className="text-[12px] font-semibold opacity-60">
              Shown alongside your review
            </p>
          </div>
        </div>

        <hr className="my-5 text-indigo-400" />

        <h3 className="mb-0 flex items-start gap-1 text-indigo-400">
          <TiStar className="text-lg" />
          Your Rating
        </h3>

        <div className="flex flex-col text-indigo-400">
          <label htmlFor="rating" className="text-sm opacity-85">
            Overall Score
          </label>
          <select
            className="rounded border border-indigo-400 p-2"
            {...register("rating")}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <hr className="my-5 text-indigo-400" />

        <h3 className="my-0 flex items-start gap-1 text-indigo-400">
          Your Review
        </h3>

        <div className="flex flex-col text-indigo-400">
          <label htmlFor="title" className="text-sm opacity-85">
            Review Headline
          </label>
          <input
            type="text"
            className="rounded border border-indigo-400 p-2"
            {...register("title", {
              required: "Title is required.",
            })}
          />
          <p className="text-[12px] font-semibold opacity-60">
            Summarise your take in one line.
          </p>
        </div>

        <div className="mt-3 flex flex-col text-indigo-400">
          <label htmlFor="body" className="text-sm opacity-85">
            Full Review
          </label>
          <textarea
            className="rounded border border-indigo-400 p-2 text-sm"
            {...register("body", {
              required: "Enter full review",
            })}
          />
          <p className="text-[12px] font-semibold opacity-60">
            Be specific and honest.
          </p>
        </div>

        <hr className="my-5 text-indigo-400" />

        <h3 className="my-0 flex items-start gap-1 text-indigo-400">
          <MdFormatListBulleted className="text-xl font-semibold" />
          Pros & Cons
        </h3>
        <div className="grid grid-cols-2 text-indigo-400">
          <div className="w-full">
            <label
              htmlFor="pros"
              className="flex items-center gap-1 text-green-400"
            >
              <PiThumbsUp /> Pros
            </label>
            {proFields.map((field, index) => (
              <div key={field.id}>
                <input
                  className="my-1 w-[80%] rounded border border-indigo-300 p-1"
                  {...register(`pros.${index}.value`, {
                    required: "Pros cannot be empty.",
                  })}
                  placeholder={`Pro ${index + 1}`}
                />
                {errors.pros?.[index]?.value && (
                  <p>{errors.pros[index].value.message}</p>
                )}
                {proFields.length > 1 && (
                  <button
                    type="button"
                    className="ml-1 cursor-pointer align-middle text-xl text-red-500 transition-all hover:text-2xl"
                    onClick={() => removePro(index)}
                  >
                    <IoMdRemoveCircle />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="mx-auto mt-1 w-fit cursor-pointer rounded bg-indigo-600 px-4 py-1 text-violet-200 hover:border hover:border-violet-600 hover:bg-indigo-800 hover:text-white"
              onClick={() => appendPro({ value: "" })}
            >
              + Add pro
            </button>
          </div>
          <div className="w-full">
            <label
              htmlFor="cons"
              className="flex items-center gap-1 text-red-600"
            >
              <PiThumbsDown />
              Cons
            </label>
            {conFields.map((field, index) => (
              <div key={field.id}>
                <input
                  className="my-1 w-[80%] rounded border border-indigo-300 p-1"
                  {...register(`cons.${index}.value`, {
                    required: "Cons cannot be empty.",
                  })}
                  placeholder={`Con ${index + 1}`}
                />
                {errors.cons?.[index]?.value && (
                  <p>{errors.cons[index].value.message}</p>
                )}
                {conFields.length > 1 && (
                  <button
                    type="button"
                    className="ml-1 cursor-pointer align-middle text-xl text-red-500 transition-all hover:text-2xl"
                    onClick={() => removeCon(index)}
                  >
                    <IoMdRemoveCircle />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="mx-auto mt-1 w-fit cursor-pointer rounded bg-indigo-600 px-4 py-1 text-violet-200 hover:border hover:border-white hover:bg-slate-800 hover:text-white"
              onClick={() => appendCon({ value: "" })}
            >
              + Add Con
            </button>
          </div>
        </div>
        <hr className="my-5 text-indigo-400" />

        <h3 className="my-0 flex items-start gap-1 text-indigo-400">
          <TiTick className="text-xl font-semibold" />
          Verdict
        </h3>
        <div className="mb-2 rounded-lg bg-indigo-700 px-3 py-2 text-white">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-0">
              <h4 className="font-semibold">Would you recommend this game?</h4>
              <small className="opacity-60">
                Your verdict shown prominently on the review
              </small>
            </div>
            <input
              type="checkbox"
              className="h-5 w-5 rounded accent-emerald-500"
              name="recommended"
              id="recommended"
              {...register("recommended")}
            />
          </div>
        </div>
        <button className="mx-auto w-fit cursor-pointer rounded bg-indigo-600 px-4 py-1 text-violet-200 hover:border hover:border-violet-600 hover:bg-indigo-800 hover:text-white">
          Submit Review
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default ReviewForm;

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link} from 'react-router-dom'

const Card = ({ data , mediaType}) => {
  function formatReleaseDate(dateString) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }

  return (
    <div className=" relative">
      <Link  to ={`/${data?.media_type ? data?.media_type : mediaType}/${data?.id}`} className="relative group cursor-pointer">
        <img
          src={data?.poster_path ? `https://image.tmdb.org/t/p/original${data?.poster_path}` : "/images/no-poster.png"}
          alt=""
          className="rounded-2xl group-hover:opacity-50 transition-opacity w-[150px] md:w-[200px]  h-[200px] md:h-[300px]"
        />

        <div className="md:opacity-0 group-hover:opacity-100 flex flex-col items-start rounded-2xl justify-end md:gap-3 gap-1 absolute inset-0 bg-black bg-opacity-50 text-white md:p-4 p-2 transition-opacity  duration-[400ms] ease-in-out">
          <p className="md:text-xl font-medium ">
            {data.title ? data?.title : data?.name}
          </p>
          <div className="md:flex justify-between w-full items-center">
          <p className="font-medium text-sm">{formatReleaseDate(data?.release_date  ? data?.release_date : data?.first_air_date)}</p>
          <CircularProgressbar
            className="!w-10 bg-slate-50 top-52 rounded-[50%] p-1"
            value={data?.vote_average*10}
            text={(data?.vote_average)?.toFixed(1)}
            styles={buildStyles({
              textSize: "40px",
              textColor:"black",
              pathColor: `green`,
            })}
          />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

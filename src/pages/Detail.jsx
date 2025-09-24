import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaChevronDown, FaRegPlayCircle } from "react-icons/fa";
import SliderSection from "../components/Slider";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Comments from "../components/Comments";
import DetailSkeleton from "../components/DetailSkeleton";
import LoadingSkeleton from "../components/SliderSkeleton";

const Detail = () => {
  const [showReviews, setShowReviews] = useState(false);
  const { id,media_type } = useParams();
  const { data,loading: movieLoading } = useFetch(`/${media_type}/${id}`);
  const { data: similar, loading:similarLoading } = useFetch(`/${media_type}/${id}/similar`);
  const { data: recommendations, loading:recommendLoading } = useFetch(`/${media_type}/${id}/recommendations`);
  const { data: review } = useFetch(`/${media_type}/${id}/reviews`);
  const { data: videos } = useFetch(`/${media_type}/${id}/videos`);
  const { data: credits, loading:creaditLoading } = useFetch(`/${media_type}/${id}/credits`);
  

  const director = credits?.crew?.filter((f) => f.job === "Director");
  const writer = credits?.crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  function formatNumberAbbreviation(number) {
    const absNumber = Math.abs(number);

    if (absNumber >= 1e9) {
      return (number / 1e9)?.toFixed(2) + "B";
    } else if (absNumber >= 1e6) {
      return (number / 1e6)?.toFixed(2) + "M";
    } else if (absNumber >= 1e3) {
      return (number / 1e3)?.toFixed(2) + "K";
    } else {
      return number?.toFixed(2);
    }
  }
  function formatTime(durationInMinutes) {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;

    return `${hours}h ${minutes}min`;
  }
  function formatReleaseDate(dateString) {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  }
  console.log("vixdio",videos);
  return (
    <div className="px-5 md:px-20 py-5 text-white">
      {movieLoading ? (<DetailSkeleton/>): (
      <div className="flex-wrap md:flex-nowrap  flex items-center  justify-center md:justify-between md:gap-10 gap-5">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
            alt=""
            className="md:w-[350px] h-[300px] md:h-[500px] object-cover rounded-xl "
          />
        </div>
        <div className="md:w-[70%] ">
          <div className="flex flex-col gap-2">
            <h1 className="md:text-4xl text-2xl">{data?.title ? data?.title : data?.name}</h1>
            <h3 className=" text-slate-300 text-sm md:text-lg">{data?.tagline}</h3>

            <div className="flex gap-3">
              {data?.genres?.map((gen,i) => (
                <span className="md:px-4 px-2 py-1 bg-red-700 text-center text-white rounded-xl md:rounded-3xl text-sm md:text-lg" key={i}>
                  {gen?.name}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-5 md:my-3">
              {/* <CircularProgressbar
                className="!w-12 md:!w-20 bg-slate-500 rounded-[50%] p-2"
                value={data?.vote_average * 10}
                text={data?.vote_average?.toFixed(1)}
                styles={buildStyles({
                  textSize: "30px",
                  textColor: "white",
                  pathColor: `green`,
                  trailColor: "#9c98a6",
                })}
              /> */}

              <div className="flex flex-col items-center">
  <CircularProgressbar
    className="!w-12 md:!w-20 bg-slate-500 rounded-[50%] p-2"
    value={data?.vote_average * 10}
    text={data?.vote_average?.toFixed(1)}
    styles={buildStyles({
      textSize: "30px",
      textColor: "white",
      pathColor: "green",
      trailColor: "#9c98a6",
    })}
  />
  <span className="text-xs md:text-sm text-white mt-1">
    {data?.vote_count} votes
  </span>
</div>


              <div>
                <button className="bg-red-600  p-1 md:p-[10px] rounded-xl">
                  {" "}
                  <span className="flex items-center gap-3 text-xl font-medium text-white">
                    <FaRegPlayCircle className="w-8 h-8" />
                    Watch Now
                  </span>
                </button>
              </div>
            </div>
            <p className="text-[14px] md:text-[16px]">{data?.overview}</p>
          </div>
          <div className="flex gap-3 mb-2 mt-5 flex-wrap">
            <div>
              <span className="font-medium text-slate-400">Status :</span>
              <span> {data?.status}</span>
            </div>
            <div>
              {" "}
              <span className="font-medium  text-slate-400">
                Released Date :
              </span>
              <span> {formatReleaseDate(data?.release_date ?data?.release_date : data?.first_air_date)}</span>
            </div>
            {media_type ==="movie" && <div>
              <span className="font-medium text-slate-400">Runtime :</span>
              <span> {formatTime(data?.runtime)}</span>
            </div>}
            
          </div>
          {media_type ==="movie" && <div className="flex gap-5 flex-wrap">
          <div>
              <span className="font-medium text-slate-400">Budget :</span>
              <span> ${formatNumberAbbreviation(data?.budget)} </span>
            </div>
            <div>
              <span className="font-medium text-slate-400">Revenue :</span>
              <span> ${formatNumberAbbreviation(data?.revenue)} </span>
            </div>
          </div>}
          <div className="mb-2 mt-2">
            <span className="font-medium text-slate-400">Director :</span>{" "}
            {director?.map((d, i) => (
              <span key={i}>
                {d.name}
                {director.length - 1 !== i && ", "}
              </span>
            ))}
          </div>
          <div className="mt-2">
            <span className="font-medium text-slate-400">Writer :</span>{" "}
            {writer?.map((d, i) => (
              <span key={i}>
                {d.name}
                {writer.length - 1 !== i && ", "}
              </span>
            ))}
          </div>
          {/* <hr className="mb-5 mt-2" /> */}
        </div>
      </div>)}
      <div className="md:mt-10 mt-6">
        <h1 className="text-3xl  my-3 font-medium">Cast</h1>

        {creaditLoading ? (<div className="flex justify-between ">
         <div className="flex flex-col gap-4 justify-center ">
         <div className="!w-[100px] !h-[100px] md:!w-[150px] md:!h-[150px] hidden md:block rounded-[50%] bg-slate-600"></div>
          <p className="h-[30px] bg-slate-600"></p>
         </div>
         <div className="flex flex-col gap-4 justify-center ">
         <div className="!w-[100px] !h-[100px] md:!w-[150px] md:!h-[150px] hidden md:block rounded-[50%] bg-slate-600"></div>
          <p className="h-[30px] bg-slate-600"></p>
         </div>
         <div className="flex flex-col gap-4 justify-center ">
         <div className="!w-[100px] !h-[100px] md:!w-[150px] md:!h-[150px] rounded-[50%] bg-slate-600"></div>
          <p className="h-[30px] bg-slate-600"></p>
         </div>
         <div className="flex flex-col gap-4 justify-center ">
         <div className="!w-[100px] !h-[100px] md:!w-[150px] md:!h-[150px] rounded-[50%] bg-slate-600"></div>
          <p className="h-[30px] bg-slate-600"></p>
         </div>
         <div className="flex flex-col gap-4 justify-center ">
         <div className="!w-[100px] !h-[100px] md:!w-[150px] md:!h-[150px] rounded-[50%] bg-slate-600"></div>
          <p className="h-[30px] bg-slate-600"></p>
         </div>
          

        </div>): (<div className="text-center ">
          <SliderSection cast={credits?.cast} />
        </div>)}
      </div>
      <div className="md:mt-14 mt-6">
  <h1 className="md:text-3xl text-xl font-medium my-3">Videos</h1>
  <div className="flex justify-between flex-wrap gap-4">
    {videos?.results?.slice(0, 4).map((video, idx) => (
      <div key={idx}>
        <iframe
          src={`https://www.youtube.com/embed/${video.key}?autoplay=0&loop=0`}
          frameBorder="0"
          allowFullScreen
          title={video.name}
          width="250px"
          height="150px"
          className="rounded-xl"
        />
        <p className="text-sm mt-1 font-medium truncate w-[250px]">{video.name}</p>
      </div>
    ))}
  </div>
</div>

      {/* <div className="md:mt-14 mt-6">
        <h1 className="md:text-3xl text-xl  font-medium my-3">Videos</h1>
        <div className="flex justify-between flex-wrap">
          <div>
            <iframe
              src="https://www.youtube.com/embed/BX9Oe
            7zgwjA?autoplay=1&loop=1&playlist
            =BX9Oe7zgwjA"
              frameBorder={0}
              allow
              fullScreen
              title="YouTube Video"
              width="250px"
              height="150px"
              className="rounded-xl"
            />
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/BX9Oe
            7zgwjA?autoplay=1&loop=1&playlist
            =BX9Oe7zgwjA"
              frameBorder={0}
              allow
              fullScreen
              title="YouTube Video"
              width="250px"
              height="150px"
              className="rounded-xl"
            />
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/BX9Oe
            7zgwjA?autoplay=1&loop=1&playlist
            =BX9Oe7zgwjA"
              frameBorder={0}
              allow
              fullScreen
              title="YouTube Video"
              width="250px"
              height="150px"
              className="rounded-xl"
            />
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/BX9Oe
            7zgwjA?autoplay=1&loop=1&playlist
            =BX9Oe7zgwjA"
              frameBorder={0}
              allow
              fullScreen
              title="YouTube Video"
              width="250px"
              height="150px"
              className="rounded-xl"
            />
          </div>
        </div>
      </div> */}
      <div className="md:mt-14 mt-6">
        <div className=" bg-slate-700 rounded-xl p-2 pl-4">
          <div className="flex justify-between items-center">
            <p className="font-medium md:py-5  md:text-xl">
              {" "}
              Reviews ({review?.results?.length})
            </p>
            <p className="md:px-5 cursor-pointer">
              <FaChevronDown
                className="text-white md:text-xl "
                onClick={() => setShowReviews(!showReviews)}
              />
            </p>
          </div>
          {showReviews ? (
            <>
              {review?.results?.map((rev,i) => (
                <Comments data={rev} key={i}/>
              ))}
              <span className="text-slate-400 cursor-pointer" onClick={()=>setShowReviews(false)}>
                Hide Comments
              </span>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      
     <div className="mt-14 mt-6">
        <p className="text-2xl text-white my-4 uppercase">Recommendations</p>
        <div className="flex flex-wrap justify-between gap-10">
            {recommendLoading ? <LoadingSkeleton/> : (<div className="flex flex-wrap justify-between gap-10">
          {recommendations?.results?.length > 0 &&
            recommendations?.results?.map((item,i) => <Card data={item} key={i}/>)}
        </div>)}
        </div>
      </div> 
      <div className="md:mt-14 mt-6">
        <p className="md:text-2xl text-white my-4 uppercase">Similar Movies</p>
        {similarLoading ? <LoadingSkeleton/> : (<div className="flex flex-wrap justify-between gap-10">
          {similar?.results?.length > 0 &&
            similar?.results?.map((item,i) => <Card data={item} key={i}/>)}
        </div>)}
      </div>
    </div>
  );
};

export default Detail;

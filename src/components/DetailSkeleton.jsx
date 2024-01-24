import React from "react";

const DetailSkeleton = () => {
  return (
    <div>
      <div className="flex items-center justify-center md:justify-between gap-10 flex-wrap md:flex-nowrap">
        <div className="md:w-[350px] w-[200px] h-[300px] md:h-[500px] bg-slate-600 rounded-xl "></div>
        <div className="md:w-[70%] w-full">
          <div className="flex flex-col gap-2">
            <p className=" bg-slate-600  h-[50px] rounded"></p>
            <p className=" bg-slate-600  h-[30px] w-[200px] rounded"></p>

            <div className="flex gap-3">
              <span className="px-4 py-1 text-center text-white h-[30px] rounded bg-slate-600 w-full"></span>
            </div>

            <p className="h-[300px] rounded-xl bg-slate-600"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;

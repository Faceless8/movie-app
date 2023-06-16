import { memo } from "react";
import { m } from "framer-motion";

import Image from "../../../common/Image";
import { fadeDown, staggerContainer } from "../../../utils/motion";

const Casts = ({ casts }: { casts: any }) => {
  const topCasts = casts.slice(0, 4);
  return (
    <m.div
      variants={staggerContainer(0.2, 1)}
      initial="hidden"
      animate="show"
      className="flex flex-wrap md:gap-4 sm:gap-[14px] gap-2  sm:-mt-2 xs:-mt-[6px] -mt-1"
    >
      {topCasts.map((cast: any) => {
        const { id, profile_path: profilePath, name } = cast;
        return (
          <m.figure
            variants={fadeDown}
            key={id}
            className="flex flex-col justify-start gap-2"
          >
            <Image
              width={window.innerWidth >= 768 ? 64 : 40}
              height={window.innerWidth >= 768 ? 96 : 54}
              src={`https://image.tmdb.org/t/p/original/${profilePath}`}
              alt={name}
              className=" object-cover rounded-md shadow-md transition-all duration-300"
            />

            <h4 className="text-gray-300 md:text-[12px] sm:text-[10.75px] text-[10px] md:max-w-[64px] text-center font-semibold sm:-mt-0 leading-snug max-w-[40px]">
              {name}
            </h4>
          </m.figure>
        );
      })}
    </m.div>
  );
};

export default memo(Casts, (prevProps, newProps) => {
  return prevProps.casts[0].id === newProps.casts[0].id;
});

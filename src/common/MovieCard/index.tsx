import { memo } from "react";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

import Image from "../Image";

const MovieCard = ({
  movie,
  category,
}: {
  movie: any;
  category: string;
}) => {
  const { poster_path, original_title: title, name, id } = movie;
  return (
    <>
      <Link
        to={`/${category}/${id}`}
        className="dark:bg-[#1f1f1f] bg-[#f5f5f5] rounded-lg relative group w-[170px] select-none xs:h-[250px] h-[216px]"
      >
        <Image
          height={window.innerWidth > 380 ? 250 : 216}
          width={170}
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={movie.original_title}
          className={` object-cover rounded-lg drop-shadow-md shadow-md group-hover:shadow-none group-hover:drop-shadow-none transition-all duration-300 ease-in-out`}
          zoomInEffect
        />

        <div className="absolute top-0 left-0 w-[170px]  h-full group-hover:opacity-100 opacity-0 bg-[rgba(0,0,0,0.6)] transition-all duration-300 rounded-lg flex items-center justify-center">
          <div className="xs:text-[48px] text-[42px] text-[#ff0000] scale-[0.4] group-hover:scale-100 transition-all duration-300 ">
            <FaYoutube />
          </div>
        </div>
      </Link>

      <h4 className="dark:text-gray-300 text-center sm:text-base xs:text-[14.75px] text-[14px] font-medium ">
        {(title?.length > 50 ? title.split(":")[0] : title) || name}
      </h4>
    </>
  );
};

export default memo(MovieCard, (prevProps, newProps) => {
  return prevProps.movie.id === newProps.movie.id;
});

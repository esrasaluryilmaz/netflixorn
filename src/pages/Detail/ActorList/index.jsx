import React, { useEffect, useState } from "react";
import api from "../../../utils";
import Error from "../../../components/Error";
import imageUrl from "../../../constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const ActorList = ({ id }) => {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    api
      .get(`movie/${id}/credits`)
      .then((res) => {
        setActors(res.data?.cast);
      })
      .catch((err) => setError(err.message));
  }, []);

  const textFormat = (name) => name.slice(0, 15) + "...";

  return (
    <div>
      {error ? (
        <Error info={error} />
      ) : actors.lenght === 0 ? (
        <h1></h1>
      ) : (
        <Splide
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            pagination: false,
            perPage: 5,
            gap: "20px",
            autoScroll: {
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {actors.map((item, key) => {
            const url = item.profile_path
              ? imageUrl + item.profile_path
              : item.gender === 1
              ? "/woman.jpg"
              : item.gender === 2
              ? "/man.jpg"
              : "/default.webp";
            return (
              <SplideSlide key={key}>
                <div className=" w-[160px] h-full  flex flex-col gap-1 ">
                  <img
                    className="h-full object-cover"
                    src={url}
                    alt="actor-photo
    "
                  />

                  <h2 className="font-semibold text-center mt-2">
                    {textFormat(item.name)}
                  </h2>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      )}
    </div>
  );
};

export default ActorList;

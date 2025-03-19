import millify from "millify";
import List from "../List";

const Content = ({ movie }) => {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
      <div>
        {/* Categories */}
        <List title="Kategoriler" arr={movie.genres} />

        {/* Languages */}
        <List title="Diller" arr={movie.spoken_languages} />

        {/* companies */}
        <List title="Yapimci sirketler" arr={movie.production_companies} />

        {/* countries */}
        <List title="Yapimci ulkeler" arr={movie.production_countries} />
      </div>
      <p>{movie.overview}</p>
      <p>
        <span>Butce:</span>
        <span className="text-green-500 font-semibold ms-1">
          {movie.budget === 0 ? "Bilinmiyor" : millify(movie.budget)}
        </span>
      </p>
      <p>
        <span>Hasilat:</span>
        <span className="text-green-500 font-semibold ms-1">
          {movie.revenue === 0 ? "Bilinmiyor" : millify(movie.revenue)}
        </span>
      </p>

      <div></div>
    </div>
  );
};

export default Content;

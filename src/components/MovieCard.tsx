import { Clock, Star } from "react-feather";
import { IMovieCard } from "../interfaces/MovieCard";

import "../styles/movie-card.scss";

export function MovieCard({ title, poster, rating, runtime }: IMovieCard) {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />

      <div>
        <div className="movie-info">
          <span>{title}</span>
          <div className="meta">
            <div>
              <Star /> {rating}
            </div>

            <div>
              <Clock /> {runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

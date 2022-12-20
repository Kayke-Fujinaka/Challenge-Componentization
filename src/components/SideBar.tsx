import { useEffect, useState } from "react";
import { IGenreResponse } from "../interfaces/GenreResponse";
import { api } from "../services/api";
import { Category } from "./Category";

export interface ISideBar {
  selectedGenreId: number;
  handleClickCategory: (id: number) => void;
}

export function SideBar({ selectedGenreId, handleClickCategory }: ISideBar) {
  const [genres, setGenres] = useState<IGenreResponse[]>([]);

  useEffect(() => {
    api
      .get<IGenreResponse[]>("genres")
      .then((response) => setGenres(response.data));
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="categorys-container">
        {genres.map((genre) => (
          <Category
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickCategory(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}

import { useEffect, useState } from "react";

import { api } from "./services/api";

import "./styles/global.scss";

import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { IGenreResponse } from "./interfaces/GenreResponse";
import "./styles/content.scss";
import "./styles/sidebar.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<IGenreResponse>(
    {} as IGenreResponse
  );

  useEffect(() => {
    api.get<IGenreResponse>(`genres/${selectedGenreId}`).then((response) => {
      setSelectedGenre(response.data);
    });
  }, [setSelectedGenreId]);

  const handleClickCategory = (id: number) => setSelectedGenreId(id);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        handleClickCategory={handleClickCategory}
      />
      <Content
        selectedGenre={selectedGenre}
        selectedGenreId={selectedGenreId}
      />
    </div>
  );
}

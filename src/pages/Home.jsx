import React from "react";
import GameList from "../Components/GameList/GameList";
const Home = () => {
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5171/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <>
      <GameList games={games} />
    </>
  );
};

export default Home;

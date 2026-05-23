import "./styles.css";
import GameCard from "./GameCard";
const GameList = ({ games }) => {
  return (
    <div className="game-list">
      {games &&
        games.map((game) => {
          return <GameCard game={game} key={game.id} />;
        })}
    </div>
  );
};

export default GameList;

import { Link } from "react-router-dom";
const GameCard = ({ game }) => {
  return (
    <div className="card">
      <div className="game-cover">
        <img src={game.coverImage} alt={game.title} />
        <Link to={`/games/${game.id}`}>
          <h2>{game.title}</h2>
        </Link>
      </div>
      <ul className="genre">
        {game.genre.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <section className="platform-section">
        <strong>Available on:</strong>
        {game.platforms.map((platform, index) => {
          return (
            <ul key={index}>
              <li>{platform}</li>
            </ul>
          );
        })}
      </section>
    </div>
  );
};

export default GameCard;

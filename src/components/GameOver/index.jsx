import './styles.css';

const GameOver = () => {
  return (
    <div className="game-over">
      <img src="game-over.png" alt="" />
      <audio autoPlay>
        <source src="you-died.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default GameOver
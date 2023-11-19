import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './components/playerList';

function App() {
  const [playerList, setPlayerList] = useState([{}]);
  const [playerName, setPlayerName] = useState('');
  const [playerAge, setPlayerAge] = useState('');
  const [playerTeam, setPlayerTeam] = useState('');
  const [playerId, setPlayerId] = useState('');
  const [buttonText, setButtonText] = useState('Cadastrar');

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/players")
      .then(response => {
        setPlayerList(response.data)
      }).catch(
        (error) => {console.log(error)}
      )
  });

  const createOrUpdatePlayer = () => {
    const playerToCreateOrUpdate = {
      "player_name": playerName,
      "player_age": playerAge,
      "player_team": playerTeam
    }

    if(playerId !== ''){
      putPlayer(playerToCreateOrUpdate)
    } else {
      postPlayer(playerToCreateOrUpdate)
    }
  }

  const postPlayer = (player) => {
    axios.post("http://127.0.0.1:8000/players", player)
      .catch((error) => {
        console.log(error)
      })
  }

  const putPlayer = (player) => {
    axios.put(`http://127.0.0.1:8000/players/${playerId}`, player)
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="container">
      <div 
        className="mt-3 justify-content-center align-items-center mx-auto" 
        style={{ width: "70vw", backgroundColor: "#ffffff"}}
      >
        <h2 className="text-center text-white bg-success card mb-1">Gerenciador de jogadores</h2>
        <h6 className="card text-center text-white bg-success mb-2 pb-1">Informações</h6>
        <div className="card-body text-center">
          <h5 className="card text-center text-white bg-dark pb-1">Cadastro de jogdores</h5>
          <span className="card-text">
            <input 
              value={playerName}
              onChange={ event => setPlayerName(event.target.value) }
              className="mb-2 form-control"
              placeholder="Nome do jogador"
            />
            <input 
              value={playerAge}
              onChange={ event => setPlayerAge(event.target.value) }
              className="mb-2 form-control"
              placeholder="Idade do jogador"
            />
            <input 
              value={playerTeam}
              onChange={ event => setPlayerTeam(event.target.value) }
              className="mb-2 form-control"
              placeholder="Time do jogador"
            />
            <button onClick={createOrUpdatePlayer} className="btn btn-outline-success mb-4">
              {buttonText}
            </button>
          </span>
          <h5 className="card text-center text-white bg-dark pb-1">Jogadores cadastrados no sistema</h5>
          <div>
            <PlayerList 
              playerList={playerList}
              setPlayerId={setPlayerId}
              setPlayerName={setPlayerName}
              setPlayerAge={setPlayerAge}
              setPlayerTeam={setPlayerTeam}
              setButtonText={setButtonText}
            />
          </div>
        </div>
        <h6 className="card text-center text-light bg-success py-1">&copy; Matheus Leal</h6>
      </div>
    </div>
  );
}

export default App;

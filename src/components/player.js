import React from "react";
import axios from "axios";


function Player(props){
    const deletePlayer = (playerId) => {
        axios.delete(`http://127.0.0.1:8000/players/${playerId}`)
            .then(
                response => {
                    alert("Jogador removido com sucesso!")
                }
            )
    }

    return (
        <div>
            <p>
                <span>
                    {props.player.name} - {props.player.age} - {props.player.team}
                </span>
                <button onClick={ ()=> deletePlayer(props.player.id) } className="btn btn-danger">
                    <span className="badge rounded-pill bg-danger">X</span>
                </button>
            </p>
        </div>
    )
}


export default Player;
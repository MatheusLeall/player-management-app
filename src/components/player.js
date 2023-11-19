import React from "react";
import axios from "axios";


function Player(props){
    const deletePlayer = (playerId) => {
        axios.delete(`http://127.0.0.1:8000/players/${playerId}`)
    }

    const updatePlayer = (player) => {
        props.setPlayerId(player.id)
        props.setPlayerName(player.name)
        props.setPlayerAge(player.age)
        props.setPlayerTeam(player.team)
        props.setButtonText(player.setButtonText)
        props.setButtonText("Atualizar")
    }

    return (
        <div className="card m-2">
            <p>
                <span className="p-5">
                    {props.player.name} - {props.player.age} - {props.player.team}
                </span>
                <button onClick={ ()=> updatePlayer(props.player) } className="btn btn-sm">
                    <span className="badge rounded-pill bg-primary">Editar</span>
                </button>
                <button onClick={ ()=> deletePlayer(props.player.id) } className="btn btn-sm">
                    <span className="badge rounded-pill bg-danger">X</span>
                </button>
            </p>
        </div>
    )
}


export default Player;
import React from "react";
import Player from "./player";

function PlayerList(props){
    return (
        <div>
            <ul>
                {
                    props.playerList.map(
                        (player, index) => {
                            return (
                                <Player 
                                    player={player}
                                    key={index}
                                    setPlayerId={props.setPlayerId}
                                    setPlayerName={props.setPlayerName}
                                    setPlayerAge={props.setPlayerAge}
                                    setPlayerTeam={props.setPlayerTeam}
                                    setButtonText={props.setButtonText}
                                />
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default PlayerList;
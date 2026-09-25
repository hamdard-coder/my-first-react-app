import React from "react";
import players from "./data";
import "./style.css";

export default function FootballBestPlayers() {
  return (
    <>
      <section>
        <header>
          <h1>Best 20 Football Players</h1>
        </header>
        <div className="container">
          {players.map((player) => {
            return (
              // cards
              <div className="card" key={player.id}>
                <img src={player.image} alt={player.name} />
                {/* card body*/}
                <div className="card-body">
                  <h3>{player.name}</h3>
                  <p>
                    {"Contry: "}
                    {player.country}
                  </p>
                  <p>
                    {"Goals: "}
                    {player.goals}
                  </p>
                  <p>
                    {"Ranking: "}
                    {player.ranking}
                  </p>
                  <p>
                    {"Total Goals: "}
                    {player.totalGames}
                  </p>
                  <p>
                    {"National Games: "}
                    {player.nationalGames}
                  </p>
                  <p>
                    {"Club Games: "}
                    {player.clubGames}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

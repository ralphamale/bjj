/**
 * Updates winning and losing competitors elo rating
 * @param {PlayerElo} winner - elo object for winning competitor
 * @param {PlayerElo} loser - elo object for losing competitor
 */
export function updateElo(winner, loser) {
  try {
    winner.wins++;
    loser.loses++;
    winner.elo = calculateElo(winner, loser);
    loser.elo = calculateElo(loser, winner);
  } catch (e) {
    console.error(e);
  }
}

function calculateElo(a, b) {
  return (b.elo + 400 * (a.wins - a.loses)) / (a.wins + a.loses);
}

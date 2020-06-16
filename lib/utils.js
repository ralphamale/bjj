/**
 * Calculates the difference between two ratings.
 * The difference is capped at +400 and -400.
 * @param {number} playerRating Rating of player one.
 * @param {number} opponentRating Rating of player two.
 * @return Difference between playerRating and opponentRating.
 */
function ratingDifference(playerRating, opponentRating) {
  return Math.max(Math.min(playerRating - opponentRating, 400), -400);
}

/**
 * Calculates the expected outcome of a game between two players of the
 * ratings playerRating and opponentRating.
 *
 * Formular: E = 1 / 1 + 10^((OR - PR)/400)
 * E: Expected value
 * PR: Player Rating
 * OR: Opponent Rating
 *
 * @param {number} playerRating Rating of player one.
 * @param {number} opponentRating Rating of player two.
 * @return The expected outcome for player one.
 */
function expected(playerRating, opponentRating) {
  return (
    1 / (1 + Math.pow(10, ratingDifference(opponentRating, playerRating) / 400))
  );
}

/**
 * Updates the new ratings based on the given ratings and a flag
 * indicating if player one has won.
 * @param {PlayerElo} winner - elo object for winning competitor
 * @param {PlayerElo} loser - elo object for losing competitor
 * @param {bool} playerWin Flag indicating if player one has won.
 * @param {number} k K Factor. By default 24 per Jeff Sonas's recomendation.
 * @return New rating of the player and his opponent.
 */
export function updateElo(winner, loser, playerWin = true, k = 24) {
  const winnerExpected = expected(winner.elo, loser.elo);
  const ratingChange = parseInt(k * (!!playerWin - winnerExpected), 10);
  winner.wins++;
  loser.loses--;
  winner.elo += ratingChange;
  loser.elo -= ratingChange;
}

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
 * K Factor. By default 24 per Jeff Sonas's recomendation.
 * based on USCF staggering
 *  blackbelts start at 2100 by default since it is the start of pro competition
 *  there is no record of amateur fights
  if (playerRating < 2100) return 32;
  else if (playerRating > 2400) return 16;
  return 24;
 */

/**
 * Calculate's players appropriate k factor
 *  based on FIDE's tiered ranges
 *  incorporates games played and current rating
 * @param {PlayerELO} player - player object
 */
function kFactor(player) {
  if (player.wins + player.loses < 30 && player.elo < 2300) return 40;
  else if (player.elo > 2400) return 10;
  return 20;
}

/**
 * Updates the new ratings based on the given ratings and a flag
 * indicating if player one has won.
 * @param {PlayerElo} winner - elo object for winning competitor
 * @param {PlayerElo} loser - elo object for losing competitor
 * @param {bool} playerWin Flag indicating if player one has won.
 * @return New rating of the player and his opponent.
 */
export default function updateElo(winner, loser, playerWin = true) {
  const winnerExpected = expected(winner.elo, loser.elo);
  const winnerChange = parseInt(
    kFactor(winner.elo) * (!!playerWin - winnerExpected),
    10
  );
  const loserChange = parseInt(
    kFactor(loser.elo) * (!!!playerWin - winnerExpected),
    10
  );
  winner.wins++;
  loser.loses--;
  winner.elo += winnerChange;
  loser.elo -= loserChange;
}

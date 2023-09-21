const determineMinBet = (highBet, playerChipsStack, playerBet) => {
  const playerTotalChips = playerChipsStack + playerBet;
  if (playerTotalChips < highBet) {
    return playerTotalChips;
  } else {
    return highBet;
  }
};
export { determineMinBet };
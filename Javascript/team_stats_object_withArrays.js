const team = {
  _players: [
    {firstName: 'Pete', lastName: 'Wheeler', age: 44},
    {firstName: 'David', lastName: 'Miller', age: 32},
    {firstName: 'Mike', lastName: 'Webster', age: 45}
    ],
  _games: [
    {opponent: 'Titans', teamPoints: 92, opponentPoints: 88},
    {opponent:'Eagles', teamPoints: 78, opponentPoints: 81},
    {opponent: 'Sharks', teamPoints: 95, opponentPoints: 90}
    ],
  get player () {
    return this._players;
  },
  get games () {
    return this._games;
  },
  addPlayer (newFirstName, newLastName, newAge) {
    const player = {
      firstName : newFirstName,
      LastName: newlastName,
      age: newAge
    };
    this._players.push(player);
  },
  addGame (newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    }
    this._games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

console.log(team.player);
console.log(team.games);


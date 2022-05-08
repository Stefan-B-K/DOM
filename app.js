const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 105,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 127,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 126,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 85,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 92,
    isWinner: false
  },
  awayTeam: {
    team: 'Houston',
    points: 95,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 94,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 98,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 115,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 86,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 101,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 92,
    isWinner: false
  }
}
]

function gameTable(gameData, teamView) {
  const ulTable = document.createElement('ul')
  for (let game of gameData) {
    ulTable.append(scoreLine(game, teamView))
  }
  return ulTable
}

function scoreLine({ homeTeam, awayTeam }, teamView) {
  const scoreLine = document.createElement('li')
  scoreLine.innerText = `${homeTeam.team} @ ${awayTeam.team}`
    if (homeTeam.points > awayTeam.points) {
      scoreLine.innerHTML += ` <b>${homeTeam.points}</b> @ ${awayTeam.points}`
    } else {
      scoreLine.innerHTML += ` ${homeTeam.points} @ <b>${awayTeam.points}</b>`
    }
    const team = homeTeam.team === teamView ? homeTeam : awayTeam
    scoreLine.classList.add(team.isWinner ? 'win' : 'loss')
    return scoreLine
}

document.body.prepend(gameTable(warriorsGames, 'Houston'))
document.body.prepend(gameTable(warriorsGames, 'Golden State'))
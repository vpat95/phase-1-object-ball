function gameObject(){
    return {
        home:{
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }

        },
        away:{
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
            

        }

    };
};


//helpers
const teams = Object.values(gameObject())

function teamsObject(){
    return Object.assign({}, homeTeam(), awayTeam())
}

function players() {
    return Object.assign({}, homeTeam().players, awayTeam().players)
};

function homeTeam(){
    return gameObject().home
}

function homeTeamPlayers(){
    return homeTeam().players
}

function awayTeam(){
    return gameObject().away
}

function awayTeamPlayers(){
    return awayTeam().players
}

//functions

function numPointsScored(playerInput) {
    return players()[playerInput].points
} 

function shoeSize(playerInput){
    return players()[playerInput].shoe
}

function teamColors(teamInput) {
    return teams.find(obj => obj.teamName === teamInput).colors
}

function teamNames(){
    return teams.map(team => team.teamName)
}

function playerNumbers(teamInput){
    teamPlayers = teams.find(team => team.teamName === teamInput).players
    return Object.values(teamPlayers).map(player => player.number)
}

function playerStats(playerInput){
    return players()[playerInput]
}

function bigShoeRebounds() {
    //largest shoe size
    let biggestShoe = 0
    let biggestShoePlayer = {}
    const playersArray = Object.entries(players())
 
    for (let player of playersArray) {
        if (player[1].shoe > biggestShoe) {
            biggestShoe = player[1].shoe
            biggestShoePlayer = player[1]
        }
    }
    return biggestShoePlayer.rebounds

}

//Bonus

function mostPointsScored(){
    let mostPoints = 0
    let playerName = ""
    const playersArray = Object.entries(players())
 
    for (let player of playersArray) {
        if (player[1].points > mostPoints) {
            mostPoints = player[1].shoe
            playerName = player[0]
        }
    }
    return playerName
}

function winningTeam(){

    const awayPoints = Object.values(awayTeamPlayers()).reduce(function (accumulator, element){
        return element.points += accumulator
    }, 0)
    const homePoints = Object.values(homeTeamPlayers()).reduce(function (accumulator, element){
        return element.points += accumulator
    }, 0)

    if (awayPoints > homePoints){
        return awayTeam().teamName
    }
    else if (homePoints > awayPoints){
        return homeTeam().teamName
    } else {
        return "tie"
    }
}

function playerWithLongestName() {
    const playersString = Object.keys(players())

    const longest = playersString.reduce(function (player, largest) {
        return player.length > largest.length ? player : largest
    }, '');

    return longest
}

//Super Bonus

function doesLongNameStealATon(){
    let mostSteals = 0
    let playerName = ""
    const playersArray = Object.entries(players())

    for (let player of playersArray) {
        if (player[1].steals > mostSteals) {
            mostSteals = player[1].steals
            playerName = player[0]
        }
    }
    return (playerName === playerWithLongestName()) ? true:false
}
define({ "api": [
  {
    "type": "get",
    "url": "/scoreboard",
    "title": "Get Scoreboard",
    "version": "1.0.0",
    "name": "GetScoreboard",
    "group": "Scoreboard",
    "description": "<p>Get current Scoreboard data from the database.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:1337/scoreboard",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transId",
            "description": "<p>This is the current transaction id used to query the RTD_Information table for the latest information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transIndex",
            "description": "<p>This is the index of the data record in this current transaction id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "dataType",
            "description": "<p>There are three data types. Describes the data available in the columns.<br/>0 = Data contained is Game<br/>1 = Data contained is Team<br/>2 = Data contained is Player.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gameType",
            "description": "<p>This is the type of game being played.<br/>0 = Solo<br/>1 = Team</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gameNumber",
            "description": "<p>Game number of this game.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gameName",
            "description": "<p>Description of the game.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gameTime",
            "description": "<p>If game in progress this is the count down time in seconds. When a game isnt running this value will be 0. Also this is used to determine if a game has been started stopped.<br/>If game time transitions from zero to greater then zero then a game has started.<br/>If game time transitions from a number greater than zero to zero then the game has finished.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gameDuration",
            "description": "<p>This is the total duration of the game time in seconds.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gameScoreboardType",
            "description": "<p>This is a text variable of the scoreboard to use.<br/>e.g. &quot;STANDARD_SOLO&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gameDataOne",
            "description": "<p>Specific game data for game if required by scoreboard.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gameDataTwo",
            "description": "<p>Specific game data for game if required by scoreboard.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gameDataThree",
            "description": "<p>Specific game data for game if required by scoreboard.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gameDataFour",
            "description": "<p>Specific game data for game if required by scoreboard.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gameDataFive",
            "description": "<p>Specific game data for game if required by scoreboard.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teamId",
            "description": "<p>Team ID for this data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teamRank",
            "description": "<p>Team rank in the game.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teamName",
            "description": "<p>Team name in the game.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teamScore",
            "description": "<p>Team score in the game.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teamPlayers",
            "description": "<p>Number of players in this team.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teamDataOne",
            "description": "<p>Specific team data for game if required by scoreboard.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teamDataTwo",
            "description": "<p>Specific team data for game if required by scoreboard.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teamDataThree",
            "description": "<p>Specific team data for game if required by scoreboard.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teamDataFour",
            "description": "<p>Specific team data for game if required by scoreboard.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teamDataFive",
            "description": "<p>Specific team data for game if required by scoreboard.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerId",
            "description": "<p>Player ID for this data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerRank",
            "description": "<p>Player rank in this game.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerTeamId",
            "description": "<p>Player team id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "playerAlias",
            "description": "<p>Player Alias.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerScore",
            "description": "<p>Player current score.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerTagsOn",
            "description": "<p>Number of times a player has tagged another player.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerTagsBy",
            "description": "<p>Number of times a player has been tagged by other players.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerShots",
            "description": "<p>Number of shots fired by player.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerPower",
            "description": "<p>Current power of player.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerHealth",
            "description": "<p>Current health of player.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "playerAccuracy",
            "description": "<p>Current Accuracy of player.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerBaseHits",
            "description": "<p>Number of times a player has hit a base.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerBaseDestroys",
            "description": "<p>Number of times a player has destroyed a base.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerWarnTerm",
            "description": "<p>Number of times a player has warning terminations.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerFullTerm",
            "description": "<p>Number of times a player has full terminations.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerElim",
            "description": "<p>Player eliminated.<br/>0 = Not eliminated<br/>1 = Eliminated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerArenaLoc",
            "description": "<p>Current location in arena.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerState",
            "description": "<p>Current player state.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerTargetHits",
            "description": "<p>Number of target hits player has done.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerExp",
            "description": "<p>Player current expericence points for this game.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerDataOne",
            "description": "<p>Specific player data for game if required by scoreboard.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerDataTwo",
            "description": "<p>Specific player data for game if required by scoreboard.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerDataThree",
            "description": "<p>Specific player data for game if required by scoreboard.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerDataFour",
            "description": "<p>Specific player data for game if required by scoreboard.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "playerDataFive",
            "description": "<p>Specific player data for game if required by scoreboard.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"transId\": 1823,\n    \"transIndex\": 1,\n    \"dataType\": 0,\n    \"gameType\": 1,\n    \"gameNumber\": 11,\n    \"gameName\": \"DEVELOPMENT\",\n    \"gameTime\": 474,\n    \"gameDuration\": 600,\n    \"gameScoreboardType\": \"STANDARD\",\n    \"gameDataOne\": 0,\n    \"gameDataTwo\": 0,\n    \"gameDataThree\": 0,\n    \"gameDataFour\": 0,\n    \"gameDataFive\": 0,\n    \"teamId\": 0,\n    \"teamRank\": 0,\n    \"teamName\": \"\",\n    \"teamScore\": 0,\n    \"teamPlayers\": 0,\n    \"teamDataOne\": 0,\n    \"teamDataTwo\": 0,\n    \"teamDataThree\": 0,\n    \"teamDataFour\": 0,\n    \"teamDataFive\": 0,\n    \"playerId\": 0,\n    \"playerRank\": 0,\n    \"playerTeamId\": 0,\n    \"playerAlias\": \"\",\n    \"playerScore\": 0,\n    \"playerTagsOn\": 0,\n    \"playerTagsBy\": 0,\n    \"playerShots\": 0,\n    \"playerPower\": 0,\n    \"playerHealth\": 0,\n    \"playerAccuracy\": \"0.00\",\n    \"playerBaseHits\": 0,\n    \"playerBaseDestroys\": 0,\n    \"playerWarnTerm\": 0,\n    \"playerFullTerm\": 0,\n    \"playerElim\": 0,\n    \"playerArenaLoc\": 0,\n    \"playerState\": 0,\n    \"playerTargetHits\": 0,\n    \"playerExp\": 0,\n    \"playerDataOne\": 0,\n    \"playerDataTwo\": 0,\n    \"playerDataThree\": 0,\n    \"playerDataFour\": 0,\n    \"playerDataFive\": 0\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/App/Controllers/ScoreboardController.php",
    "groupTitle": "Scoreboard"
  }
] });

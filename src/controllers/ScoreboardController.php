<?php
/**
 * Scoreboard Controller
 * @author Jake Ortega
 * @date July 7, 2016
 */

namespace App\Controller;

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

class ScoreboardController {
	
	/**
	 * @api {get} /scoreboard Get Scoreboard
	 * @apiVersion 1.0.0
	 * @apiName GetScoreboard
	 * @apiGroup Scoreboard
	 *
	 * @apiDescription Get current Scoreboard data from the database.
	 *
	 * @apiExample Example usage:
	 * curl -i http://localhost:1337/scoreboard
	 *
	 * @apiSuccess {Number} transId This is the current transaction id used to query the RTD_Information table for the latest information.
	 * @apiSuccess {Number} transIndex This is the index of the data record in this current transaction id.
	 * @apiSuccess {Number} dataType There are three data types. Describes the data available in the columns.<br/>0 = Data contained is Game<br/>1 = Data contained is Team<br/>2 = Data contained is Player.
	 * @apiSuccess {Number} gameType This is the type of game being played.<br/>0 = Solo<br/>1 = Team
	 * @apiSuccess {Number} gameNumber Game number of this game.
	 * @apiSuccess {String} gameName Description of the game.
	 * @apiSuccess {Number} gameTime If game in progress this is the count down time in seconds. When a game isnt running this value will be 0. Also this is used to determine if a game has been started stopped.<br/>If game time transitions from zero to greater then zero then a game has started.<br/>If game time transitions from a number greater than zero to zero then the game has finished.
	 * @apiSuccess {Number} gameDuration This is the total duration of the game time in seconds.
	 * @apiSuccess {String} gameScoreboardType This is a text variable of the scoreboard to use.<br/>e.g. "STANDARD_SOLO".
	 * @apiSuccess {Number} gameDataOne Specific game data for game if required by scoreboard.
	 * @apiSuccess {Number} gameDataTwo Specific game data for game if required by scoreboard.
	 * @apiSuccess {Number} gameDataThree Specific game data for game if required by scoreboard.
	 * @apiSuccess {Number} gameDataFour Specific game data for game if required by scoreboard.
	 * @apiSuccess {Number} gameDataFive Specific game data for game if required by scoreboard.
	 * @apiSuccess {Number} teamId Team ID for this data.
	 * @apiSuccess {Number} teamRank Team rank in the game.
	 * @apiSuccess {String} teamName Team name in the game.
	 * @apiSuccess {Number} teamScore Team score in the game.
	 * @apiSuccess {Number} teamPlayers Number of players in this team.
	 * @apiSuccess {Number} teamDataOne Specific team data for game if required by scoreboard.
	 * @apiSuccess {Number} teamDataTwo Specific team data for game if required by scoreboard.
	 * @apiSuccess {Number} teamDataThree Specific team data for game if required by scoreboard.
	 * @apiSuccess {Number} teamDataFour Specific team data for game if required by scoreboard.
	 * @apiSuccess {Number} teamDataFive Specific team data for game if required by scoreboard.
	 * @apiSuccess {Number} playerId Player ID for this data.
	 * @apiSuccess {Number} playerRank Player rank in this game.
	 * @apiSuccess {Number} playerTeamId Player team id.
	 * @apiSuccess {String} playerAlias Player Alias.
	 * @apiSuccess {Number} playerScore Player current score.
	 * @apiSuccess {Number} playerTagsOn Number of times a player has tagged another player.
	 * @apiSuccess {Number} playerTagsBy Number of times a player has been tagged by other players.
	 * @apiSuccess {Number} playerShots Number of shots fired by player.
	 * @apiSuccess {Number} playerPower Current power of player.
	 * @apiSuccess {Number} playerHealth Current health of player.
	 * @apiSuccess {String} playerAccuracy Current Accuracy of player.
	 * @apiSuccess {Number} playerBaseHits Number of times a player has hit a base.
	 * @apiSuccess {Number} playerBaseDestroys Number of times a player has destroyed a base.
	 * @apiSuccess {Number} playerWarnTerm Number of times a player has warning terminations.
	 * @apiSuccess {Number} playerFullTerm Number of times a player has full terminations.
	 * @apiSuccess {Number} playerElim Player eliminated.<br/>0 = Not eliminated<br/>1 = Eliminated.
	 * @apiSuccess {Number} playerArenaLoc Current location in arena.
	 * @apiSuccess {Number} playerState Current player state.
	 * @apiSuccess {Number} playerTargetHits Number of target hits player has done.
	 * @apiSuccess {Number} playerExp Player current expericence points for this game.
	 * @apiSuccess {Number} playerDataOne Specific player data for game if required by scoreboard.
	 * @apiSuccess {Number} playerDataTwo Specific player data for game if required by scoreboard.
	 * @apiSuccess {Number} playerDataThree Specific player data for game if required by scoreboard.
	 * @apiSuccess {Number} playerDataFour Specific player data for game if required by scoreboard.
	 * @apiSuccess {Number} playerDataFive Specific player data for game if required by scoreboard.
	 *
	 * @apiSuccessExample {json} Success-Response:
	 *  HTTP/1.1 200 OK
	 *  [
	 *    {
	 *      "transId": 1823,
	 *      "transIndex": 1,
	 *      "dataType": 0,
	 *      "gameType": 1,
	 *      "gameNumber": 11,
	 *      "gameName": "DEVELOPMENT",
	 *      "gameTime": 474,
	 *      "gameDuration": 600,
	 *      "gameScoreboardType": "STANDARD",
	 *      "gameDataOne": 0,
	 *      "gameDataTwo": 0,
	 *      "gameDataThree": 0,
	 *      "gameDataFour": 0,
	 *      "gameDataFive": 0,
	 *      "teamId": 0,
	 *      "teamRank": 0,
	 *      "teamName": "",
	 *      "teamScore": 0,
	 *      "teamPlayers": 0,
	 *      "teamDataOne": 0,
	 *      "teamDataTwo": 0,
	 *      "teamDataThree": 0,
	 *      "teamDataFour": 0,
	 *      "teamDataFive": 0,
	 *      "playerId": 0,
	 *      "playerRank": 0,
	 *      "playerTeamId": 0,
	 *      "playerAlias": "",
	 *      "playerScore": 0,
	 *      "playerTagsOn": 0,
	 *      "playerTagsBy": 0,
	 *      "playerShots": 0,
	 *      "playerPower": 0,
	 *      "playerHealth": 0,
	 *      "playerAccuracy": "0.00",
	 *      "playerBaseHits": 0,
	 *      "playerBaseDestroys": 0,
	 *      "playerWarnTerm": 0,
	 *      "playerFullTerm": 0,
	 *      "playerElim": 0,
	 *      "playerArenaLoc": 0,
	 *      "playerState": 0,
	 *      "playerTargetHits": 0,
	 *      "playerExp": 0,
	 *      "playerDataOne": 0,
	 *      "playerDataTwo": 0,
	 *      "playerDataThree": 0,
	 *      "playerDataFour": 0,
	 *      "playerDataFive": 0
	 *    },
	 *    ...
	 *  ]
	 */
	public function get(Request $req, Response $res, array $args) 
	{
		return $res->withJson(true);
	}
}
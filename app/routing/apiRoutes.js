const path = require('path');
const friends = require('../data/friends.js');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        // get all the enteries
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        const newfriend = req.body;

        //var userScores = req.body.scores;
        const match = 0;
        // match friend logic
        //console.log(friends.scores);
        //console.log(newfriend);
        newfriend.scores = newfriend.scores.map(parseFloat);

        const friendsScores = friends.map(function (friend) {
            return friend.scores;
        })

        const scoreDifferencesArray = [];

        friendsScores.forEach(function (friendScores) {
            console.log(friendScores);
            const differences = [];
            friendScores.forEach(function (score, index) {
                const difference = newfriend.scores[index] - score;
                differences.push(Math.abs(difference));
            })

            console.log(differences);
            differenceSum = differences.reduce(function (sum, score) {
                return sum + score;
            })
            scoreDifferencesArray.push(differenceSum);
            console.log(scoreDifferencesArray);
        });

        //after all friends are compared, find the match
        for (var i = 0; i < scoreDifferencesArray.length; i++) {
            if (scoreDifferencesArray[i] <= scoreDifferencesArray[match]) {
                match = i;
            }
        }

        //return Match data
        var friendfound = friendList[match];
        res.json(friendfound);

        friends.push(newfriend);
        //return res.json(newfriend);
    });
};

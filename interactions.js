var Twitter = require('twitter');
var config = require('./config');
var client = new Twitter(config.twitter);

var exports = module.exports;

exports.searchTweets = function (params, callback) {
    client
        .get('search/tweets', params, function (err, data, response) {
            if (err) {
                console.log(err);
            } else {
                callback(data);
            }
        });
}

exports.favoriteTweet = function (id) {
    client
        .post('favorites/create', id, function (err, response) {
            if (err) {
                console.log(err);
            } else {
                let username = response.user.screen_name;
                let tweetId = response.id_str;
                console.log('Favorited tweet: ', `https://twitter.com/${username}/status/${tweetId}`);
            }
        });
}
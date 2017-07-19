var prompt = require('prompt');
var config = require('./config');
var interactions = require('./interactions');

prompt.start();

prompt.get(config.promptSchema, function (err, result) {
    if (err) {
        console.log(err);
    } else {

        let params = {
            q: result.search,
            count: result.count || 5,
            result_type: 'recent',
            lang: 'en'
        }

        interactions.searchTweets(params, function (data) {
            data
                .statuses
                .forEach(function (element, index, array) {
                    interactions.favoriteTweet({id: element.id_str});
                }, this);
        });
    }
});
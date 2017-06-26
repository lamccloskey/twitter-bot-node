require('dotenv').config();

var exports = module.exports;

exports.twitter = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
}

exports.promptSchema = {
    properties: {
        search: {
            message: 'What would you like to search? (i.e. #java #startup)',
            required: true
        },
        count: {
            message: 'How many tweets would you like to favorite? (defaults to 5)',
            required: false
        }
    }
}
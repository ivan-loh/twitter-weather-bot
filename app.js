var Forecast = require('forecast.io');
var Twit     = require('twit');
var config   = require('./config.json');




/**
 * Weather Stuff
 **/
var forecast     = new Forecast({ APIKey: config.forecast_key, requestTimeout: 2000 });

function isRaining(icon) {
  // possible values:
  //   clear-day, clear-night, rain, 
  //   snow, sleet, wind, 
  //   fog, cloudy, partly-cloudy-day, 
  //   partly-cloudy-night, hail, thunderstorm, or tornado
  return ( icon === 'rain' || icon === 'hail' || icon === 'thunderstorm' || icon === 'tornado' );
}

function getWeather(pos, callback) {
  var opts = { exclude: 'hourly,daily,flags,alerts', units: 'si' };
  forecast.get(pos.latitude,pos.longitude, opts,
    function (err, res, data) {
      if (err)
        return getWeather(pos, callback);

      if (isRaining(data.currently.icon))
        callback(data);
    }
  );
}




/**
 * Twitter Client
 **/
var T = new Twit({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token: config.access_token,
  access_token_secret: config.access_token_secret
});

var message = { user_id: config.screen_name, text: config.text };
function notify() {
  T.post('direct_messages/new', message, function (err, reply) {
    if (err)
      return notify();
  });
}




/**
 * Pulse Check
 **/
(function check(){
  try {
    getWeather(config.location, notify);
  } catch (err) {
    console.log(err);
  }
  setTimeout(check, config.interval);
})();

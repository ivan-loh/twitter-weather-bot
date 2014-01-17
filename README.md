# Twitter Weather Bot
This bot twitter DMs you when it's going to rain.

1. Fill in the details at config.json
2. Run the app in the [background](https://github.com/nodejitsu/forever) on your server.

```javascript
{

  "t": "Twitter Api Keys, the user to send to, and the actual message goes here",
  "consumer_secret": "...",
  "access_token": "...",
  "access_token_secret": "...",
  "screen_name": "...",
  "text": "It's going to rain!",


  "f" : "Forecast.io Api Key and Location settiongs goes here", 
  "forecast_key": "...",
  "location": { "latitude": "3.1048", "longitude": "101.6920" },


   "s": "This is the check interval in miliseconds",
   "interval": 1200000
}
```

## twitter api key
Create your custom api key from twitter at https://dev.twitter.com/apps/new

## forecast.io api key
Create your developer account for forecast.io at https://developer.forecast.io/
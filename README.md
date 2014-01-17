# Twitter Weather Bot
This bot twitter DMs you when it's going to rain.

1. Fill in the config at config.json

```javascript
{

  "consumer_key": "...",
  "consumer_secret": "...",
  "access_token": "...",
  "access_token_secret": "...",
  "screen_name": "...",
  "text": "It's going to rain!",

  "forecast_key": "...",
  "location": { "latitude": "3.1048", "longitude": "101.6920" },

   "interval": 1200000
}
```

2. run the app in the background.

## twitter api key
Create your custom api key from twitter at https://dev.twitter.com/apps/new

## forecast.io api key
Create your developer account for forecast.io at https://developer.forecast.io/
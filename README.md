# hackandfly-back
Hack &amp; Fly - back end

## Run the app
```
npm start
```
This app is also available at : http://hack-and-fly.herokuapp.com/

## MODEL

### Player
- login : String
- password : String
- score : Integer

## API

### Player

*GET /players*<br>
Get all players

*GET /players/:id*<br>
Get player by id

*POST /players*<br>
Create a new player, required parameters :
- login
- password

*POST /players/authenticate*<br>
Authenticate a player based on the given login and password

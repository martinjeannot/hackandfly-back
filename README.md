# hackandfly-back
Hack &amp; Fly - back end

## Run the app
```
npm start
```
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

const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());

app.get("/players", (req, res) => {
  db.query(`
    SELECT p.player_name, p.position, p.jersey_number, p.roster_role,
           t.name AS team_name,
           s.sport_name
    FROM players p
    JOIN teams t ON p.team_id = t.team_id
    JOIN sports s ON p.sport_id = s.sport_id
  `, (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
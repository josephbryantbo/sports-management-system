const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json()); // IMPORTANT

/* =========================
   PLAYERS (GET)
========================= */
app.get("/players", (req, res) => {
  db.query(`
    SELECT p.player_id, p.player_name, p.position, p.jersey_number, p.roster_role,
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

/* =========================
   PLAYERS (POST - ADD)
========================= */
app.post("/players", (req, res) => {
  const { player_name, position, jersey_number, roster_role, team_id, sport_id } = req.body;

  db.query(
    "INSERT INTO players (player_name, position, jersey_number, roster_role, team_id, sport_id) VALUES (?, ?, ?, ?, ?, ?)",
    [player_name, position, jersey_number, roster_role, team_id, sport_id],
    (err, result) => {
      if (err) return res.send(err);
      res.json({ message: "Player added successfully" });
    }
  );
});

/* =========================
   TEAMS
========================= */
app.get("/teams", (req, res) => {
  db.query(`
    SELECT t.team_id, t.name, t.city,
           COUNT(p.player_id) AS total_players
    FROM teams t
    LEFT JOIN players p ON t.team_id = p.team_id
    GROUP BY t.team_id
  `, (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

/* =========================
   LEAGUES
========================= */
app.get("/leagues", (req, res) => {
  db.query("SELECT * FROM leagues", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

/* =========================
   SCHEDULE (DYNAMIC)
========================= */
app.get("/schedule", (req, res) => {
  const games = [
    { date: "2024-11-01", sport: "Basketball", match: "Kean vs Rutgers", location: "Union, NJ" },
    { date: "2024-11-05", sport: "Soccer", match: "Kean vs NJIT", location: "Newark, NJ" },
    { date: "2024-11-10", sport: "Hockey", match: "Kean vs Princeton", location: "Princeton, NJ" },
    { date: "2024-11-15", sport: "Football", match: "Kean vs Montclair", location: "Montclair, NJ" }
  ];

  res.json(games);
});

/* =========================
   START SERVER
========================= */
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

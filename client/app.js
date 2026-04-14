const role = localStorage.getItem("role") || "visitor";

/* DASHBOARD */
if (document.getElementById("dashboard")) {
  fetch("http://localhost:3000/players")
    .then(res => res.json())
    .then(data => {
      document.getElementById("dashboard").innerHTML = `
        <div class="card">Total Players: ${data.length}</div>
        <div class="card">Teams: 4</div>
        <div class="card">Sports: 4</div>
        <div class="card">Role: ${role}</div>
      `;
    });
}
/* PLAYERS */
if (document.getElementById("playersTable")) {
  fetch("http://localhost:3000/players")
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("playersTable");

      data.forEach(p => {
        table.innerHTML += `
        <tr>
          <td>${p.player_name}</td>
          <td>${p.sport_name}</td>
          <td>${p.team_name}</td>
          <td>${p.position}</td>
          <td>${p.jersey_number}</td>
          <td>${p.roster_role}</td>
        </tr>`;
      });
    });

  if (role === "admin") {
    document.getElementById("addPlayerBtn").style.display = "block";
  }
}

/* TEAMS */
if (document.getElementById("teamsTable")) {
  fetch("http://localhost:3000/teams")
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("teamsTable");

      data.forEach(t => {
        table.innerHTML += `
        <tr>
          <td>${t.name}</td>
          <td>${t.sport_name}</td>
          <td>${t.coach_name}</td>
          <td>${t.city}</td>
          <td>${t.total_players}</td>
        </tr>`;
      });
    });
}

/* LEAGUES */
if (document.getElementById("leaguesTable")) {
  fetch("http://localhost:3000/leagues")
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("leaguesTable");

      data.forEach(l => {
        table.innerHTML += `
        <tr>
          <td>${l.league_name}</td>
          <td>${l.sport_name}</td>
          <td>${l.season}</td>
          <td>${l.status}</td>
        </tr>`;
      });
    });
}

/* SCHEDULE (STATIC FOR NOW) */
if (document.getElementById("scheduleTable")) {
  const games = [
    { date: "2024-11-01", sport: "Basketball", match: "Kean vs Rutgers", location: "Union, NJ" },
    { date: "2024-11-05", sport: "Soccer", match: "Kean vs NJIT", location: "Newark, NJ" },
    { date: "2024-11-10", sport: "Hockey", match: "Kean vs Princeton", location: "Princeton, NJ" },
    { date: "2024-11-15", sport: "Football", match: "Kean vs Montclair", location: "Montclair, NJ" }
  ];

  const table = document.getElementById("scheduleTable");

  games.forEach(g => {
    table.innerHTML += `
      <tr>
        <td>${g.date}</td>
        <td>${g.sport}</td>
        <td>${g.match}</td>
        <td>${g.location}</td>
      </tr>
    `;
  });
}
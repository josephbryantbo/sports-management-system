const role = localStorage.getItem("role") || "visitor";

/* =========================
   DASHBOARD
========================= */
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

/* =========================
   PLAYERS
========================= */
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

    document.getElementById("addPlayerBtn").onclick = () => {
      document.getElementById("playerForm").style.display = "block";
    };
  }
}

/* ADD PLAYER FUNCTION */
function addPlayer() {
  const player = {
    player_name: document.getElementById("player_name").value,
    position: document.getElementById("position").value,
    jersey_number: document.getElementById("jersey_number").value,
    roster_role: document.getElementById("roster_role").value,
    team_id: document.getElementById("team_id").value,
    sport_id: document.getElementById("sport_id").value
  };

  fetch("http://localhost:3000/players", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(player)
  })
    .then(res => res.json())
    .then(() => {
      alert("Player added!");
      location.reload();
    });
}

/* =========================
   TEAMS
========================= */
if (document.getElementById("teamsTable")) {
  fetch("http://localhost:3000/teams")
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("teamsTable");

      data.forEach(t => {
        table.innerHTML += `
        <tr>
          <td>${t.name}</td>
          <td>-</td>
          <td>-</td>
          <td>${t.city}</td>
          <td>${t.total_players}</td>
        </tr>`;
      });
    });
}

/* =========================
   LEAGUES
========================= */
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

/* =========================
   SCHEDULE (NOW DYNAMIC)
========================= */
if (document.getElementById("scheduleTable")) {
  fetch("http://localhost:3000/schedule")
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("scheduleTable");

      data.forEach(g => {
        table.innerHTML += `
          <tr>
            <td>${g.date}</td>
            <td>${g.sport}</td>
            <td>${g.match}</td>
            <td>${g.location}</td>
          </tr>
        `;
      });
    });
}

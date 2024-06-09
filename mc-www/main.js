// Click-to-copy functionality
document.querySelectorAll("code").forEach((codeBlock) => {
	codeBlock.addEventListener("click", () => {
		navigator.clipboard
			.writeText(codeBlock.innerText)
			.then(() => {
				alert("Kopiert til utklippstavle!");
			})
			.catch((err) => {
				console.error("Klarte ikke kopiere teksten: ", err);
			});
	});
});
const serverAddress = "play.cer06.no";

// Fetch server data from the MCSrvStat API
fetch(`https://api.mcsrvstat.us/3/${serverAddress}`)
	.then((response) => response.json())
	.then((data) => {
		if (data.online) {
			console.log("Server data:", data);
			let playerListHTML = "";
			if (data.players.online > 0 && data.players.list) {
				playerListHTML = "<div class='playerList'><ul class='player-list' style='display: none;'>";
				data.players.list.forEach((player) => {
					playerListHTML += `<li>${player.name}</li>`;
				});
				playerListHTML += "<br></ul></div>";
			} else {
				playerListHTML = "<p>0 folk på</p>";
			}
			document.getElementById("server").innerHTML = `
                            <h2>Minecraft Info</h2>
                            <div class="server-info">
                            <p>${data.version}</p>
                            <p>${data.motd.html.join("<br>")}</p>
                            <p>${data.players.online} / ${data.players.max} spillere</p>
                            <button id="toggleButton">Vis spillere</button>
                            ${playerListHTML}
                            </div>
                        `;
			document.getElementById("toggleButton").addEventListener("click", () => {
				const playerList = document.querySelector(".player-list");
				if (playerList.style.display === "none") {
					playerList.style.display = "block";
					document.getElementById("toggleButton").textContent = "Skjul spillere";
				} else {
					playerList.style.display = "none";
					document.getElementById("toggleButton").textContent = "Vis spillere";
				}
			});
		} else {
			document.getElementById("server").innerHTML = "<p>Serveren er offline.</p>";
		}
	})

	.catch((error) => {
		console.error("Error fetching server data:", error);
		document.getElementById("server").innerHTML = "<p>Error fetching server data</p>";
	});

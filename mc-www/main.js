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
                .then(response => response.json())
                .then(data => {
                    if (data.online) {
                        console.log("Server data:", data);
                        document.getElementById("server").innerHTML = `
                            <h2>Minecraft Info</h2>
                            <div class="server-info">
                            <p>${data.players.online} / ${data.players.max}</p>
                            ${data.players.list != "" ? "Mer enn 0" : "0 folk på"}
                            <p>${data.motd.html.join("<br>")}</p>
                            <p>${data.version}</p>
                            </div>
                        `;
                    } else {
                        document.getElementById("server").innerHTML = "<p>Server is currently offline</p>";
                    }
                })
                .catch(error => {
                    console.error("Error fetching server data:", error);
                    document.getElementById("server").innerHTML = "<p>Error fetching server data</p>";
                });
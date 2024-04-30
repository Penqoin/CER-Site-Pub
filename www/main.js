//local ip addresse, kjekt for å koble opp til server senere
let ip_pos = document.getElementById('ip');
if (ip_pos != null) {
    ip_pos.innerHTML = window.location.hostname;
}

//Klokken
tid = new Date();
let clock_pos = document.getElementById('clock');
if (clock_pos != null) {
    var timer = setInterval(function() {
        clock_pos.innerHTML = tid.toLocaleTimeString()  ;
        tid.setSeconds(tid.getSeconds() + 1);
    }, 1000);
}

//if url is /index, go to /
if (window.location.pathname == "/index") {
    window.location.pathname = "/";
}
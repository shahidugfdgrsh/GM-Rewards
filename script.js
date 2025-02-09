function login() {
    let username = document.getElementById("username").value;
    if (username) {
        localStorage.setItem("gm_username", username);
        localStorage.setItem("gm_points", 0);
        document.getElementById("login-container").style.display = "none";
        document.getElementById("game-container").style.display = "block";
        document.getElementById("user-name").innerText = username;
        document.getElementById("points").innerText = 0;
    } else {
        alert("Please enter a username.");
    }
}

function startMinigames() {
    alert("Minigames Coming Soon! This is just a prank.");
}

function redeemPage() {
    alert("Redemption Page Coming Soon!");
}

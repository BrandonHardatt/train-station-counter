//A simple app to counting app

var count = 0;

function updateCountText() {
    var counter = document.getElementById("count-el");
    counter.textContent = count;
}

function increment() {
    count += 1;
    updateCountText();
}

function decrement() {
    if (count > 0) {
        count -= 1;
        updateCountText();
    }
}

function resetCount() {
    count = 0;
    updateCountText();
}

function save() {
    var history = document.getElementById("log-history");
    var time = getCurrentTime();
    history.innerText += "Time: " + time + " People: " + count + "\n";
    resetCount();
}

function clearHistory() {
    var history = document.getElementById("log-history");
    history.textContent = "";
}

function getCurrentTime() {
    var today = new Date();
    var hours = today.getHours();
    if (hours > 12) {
        hours -= 12;
    }
    var time = hours + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
}


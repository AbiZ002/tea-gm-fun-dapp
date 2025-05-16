
let gmCount = 0;
let streakCount = 0;
let nextTeaTime = new Date().getTime() + 86400000; // 24 hours from now

function updateCountdown() {
    let now = new Date().getTime();
    let timeRemaining = nextTeaTime - now;
    
    if (timeRemaining <= 0) {
        nextTeaTime = new Date().getTime() + 86400000; // Reset for the next day
    }

    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    document.getElementById('next-tea-time').innerHTML = hours + ":" + minutes + ":" + seconds;
}

function dailyCheckIn() {
    gmCount++;
    streakCount++;
    document.getElementById('gm-count').innerText = gmCount;
    document.getElementById('streak-count').innerText = streakCount;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// For now, we'll simulate a daily check-in
setInterval(dailyCheckIn, 86400000);  // Every 24 hours
    
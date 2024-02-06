let noClicks = 0;

document.getElementById('noBtn').addEventListener('click', function() {
    if (noClicks < 5) {
        var button = document.getElementById('noBtn');
        var buttonWidth = button.offsetWidth;
        var buttonHeight = button.offsetHeight;
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        var maxX = screenWidth - buttonWidth;
        var maxY = screenHeight - buttonHeight;
        var randomX = Math.floor(Math.random() * maxX);
        var randomY = Math.floor(Math.random() * maxY);
        button.style.position = 'absolute';
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
        noClicks++;
    } else {
        document.getElementById('valentineImg').style.display = 'none';
        document.getElementById('valentineVideo').style.display = 'block';
        document.getElementById('noBtn').style.display = 'none';
        document.getElementById('yesBtn').textContent = 'Yes or else 😇';
    }
});

document.getElementById('yesBtn').addEventListener('click', function() {
    if (noClicks == 0) {
        document.getElementById('question').textContent = "Yay! You're my Valentine! 💖";
        document.getElementById('valentineImg').src = '2.png';
        document.getElementById('yesBtn').style.display = 'none';
        document.getElementById('noBtn').style.display = 'none';
    } else {
        document.getElementById('question').textContent = "Yay! You're my Valentine! 💖";
        document.getElementById('valentineImg').style.display = 'block';
        document.getElementById('valentineVideo').style.display = 'none';
        document.getElementById('valentineImg').src = '2.png';
        document.getElementById('noBtn').style.display = 'none';
        document.getElementById('yesBtn').style.display = 'none';
    }
});

document.getElementById('noBtn').addEventListener('click', function() {
    var button = document.getElementById('noBtn');
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});

document.getElementById('yesBtn').addEventListener('click', function() {
    alert('Yay! Happy Valentine\'s Day! 💖');
});

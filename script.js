document.getElementById('noBtn').addEventListener('click', function() {
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
});

document.getElementById('yesBtn').addEventListener('click', function() {
    alert('Yay! Happy Valentine\'s Day! 💖');
});

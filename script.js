document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('clicker-button');
    const counterDisplay = document.getElementById('counter');
    let dashCoins = parseInt(localStorage.getItem('dashCoins')) || 0;

    const updateCounter = () => {
        counterDisplay.textContent = dashCoins;
        localStorage.setItem('dashCoins', dashCoins);
    };

    button.addEventListener('click', (event) => {
        dashCoins++;
        updateCounter();
        playSound();
        showClickEffect(event.pageX, event.pageY);
    });

    const showClickEffect = (x, y) => {
        const effect = document.createElement('div');
        effect.textContent = '+1';
        effect.style.position = 'absolute';
        effect.style.left = `${x}px`;
        effect.style.top = `${y}px`;
        effect.style.color = '#ffffff';
        effect.style.fontSize = '3em';
        effect.style.opacity = 1;
        effect.style.pointerEvents = 'none';
        effect.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(effect);

        setTimeout(() => {
            effect.style.transition = 'opacity 1s, transform 1s';
            effect.style.opacity = 0;
            effect.style.transform = 'translate(-50%, -100%)';
        }, 50);

        setTimeout(() => {
            document.body.removeChild(effect);
        }, 1050);
    };

    const playSound = () => {
        const sound = new Audio('click.wav');
        sound.play();
    };

    updateCounter();
});

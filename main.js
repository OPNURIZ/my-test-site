
const voidButton = document.getElementById('void-button');
const voidInput = document.getElementById('void-input');
const echoChamber = document.getElementById('echo-chamber');

voidButton.addEventListener('click', () => {
    const message = voidInput.value;
    if (message.trim() !== '') {
        const echo = document.createElement('div');
        echo.classList.add('echo');
        echo.textContent = message;
        echoChamber.appendChild(echo);

        voidInput.value = '';

        setTimeout(() => {
            echo.remove();
        }, 5000);
    }
});

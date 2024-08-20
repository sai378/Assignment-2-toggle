let isToggled = false;

function toggle() {
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    const button = document.getElementById('toggleButton');

    if (!isToggled) {
        container.style.backgroundColor = '#e74c3c';
        text.textContent = 'Toggled Text';
        button.textContent = 'Reset';
    } else {
        container.style.backgroundColor = '#3498db';
        text.textContent = 'Initial Text';
        button.textContent = 'Press Me';
    }

    isToggled = !isToggled;
}

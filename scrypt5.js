const click = document.getElementById('click');
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    click.addEventListener('mousemove', () => {
        click.style.backgroundColor = getRandomColor();
    });
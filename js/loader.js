const colors = ['#0278ED', '#FF5437', '#FF9209', '#E738CE', '#00C6DF', '#B25DF8'];

export function loadCardColors() {
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        const color = colors[index % colors.length];
        card.querySelector('.logo-container').style.backgroundColor = color;
        card.querySelector('.title').style.color = color;
    });
}
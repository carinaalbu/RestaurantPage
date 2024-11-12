export default function loadMenu() {
    const content = document.createElement('div');
    content.innerHTML = `
        <h2>Our Menu</h2>
        <ul>
            <li>Pizza - $10</li>
            <li>Burger - $8</li>
            <li>Pasta - $12</li>
        </ul>
    `;
    return content;
}

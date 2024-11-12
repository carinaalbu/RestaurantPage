export default function loadContact() {
    const content = document.createElement('div');
    content.innerHTML = `
        <h2>Contact Us</h2>
        <p>Email: info@restaurant.com</p>
        <p>Phone: +123 456 7890</p>
    `;
    return content;
}

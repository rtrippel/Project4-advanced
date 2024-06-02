document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('section-container');

    for (let i = 1; i <= 6; i++) {
        const elementHTML = `
            <div class="element-menu">
                <img alt="menu-${i}" src="Starterkit/images/menu-${i}.png">
                <h4>tasty and healthy</h4>
                <div>
                    <h3>$15.99</h3>
                    <p>20.99</p>
                </div>
                <span><a href="#">add to cart</a></span>
            </div>
        `;
        container.innerHTML += elementHTML;
    }
});
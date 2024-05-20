class header extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <header>
        <nav class="header-name">
        <div class="logo" href="#" tabindex="0" alt="logo">
            <i class="fa-solid fa-utensils"></i>
            <div class="name">Restaurant Apps</div>
        </div>
        <a id="hamburger" aria-label="navigation-menu" href="">☰</a>
        <ul class="nav" id="navigation">
            <li><a href="#/home">Home</a></li>
            <li><a href="#/favorite" class="fav-nav">Favorite</a></li>
            <li><a href="https://github.com/Rauf74">About Us</a></li>
        </ul>
    </nav>
    </header>
`;
    }
}

customElements.define('header-component', header);

class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <!-- Jumbotron -->
        <div class="hero" alt="Gambar Makanan">
          <div class="hero-inner">
            <h1 class="hero-title" tabindex="0">Restaurant Apps</h1>
            <p class="hero-subtitle" tabindex="0">Apps that can find you a recommended restaurants.</p>
          </div>
        </div>
        `;
    }
}

customElements.define('hero-component', Hero);

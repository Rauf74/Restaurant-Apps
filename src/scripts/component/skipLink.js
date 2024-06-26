class skipLink extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
        <a class="skip-link">Skip to content?</a>
        `;
    }
}

customElements.define('skip-link', skipLink);

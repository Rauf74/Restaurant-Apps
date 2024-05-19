class footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <!-- Footer -->
        <footer>
        <footer id="footer" tabindex="0">
          <p tabindex="0">Copyright &copy;2024 ABDUR RAUF AL FARRAS</p>
          <p tabindex="0">Contact Me :</p>
          <ul>
            <li><a href="https://github.com/Rauf74"><i class="fa-brands fa-github fa-2x"></i></a></li>
            <li><a href="https://www.linkedin.com/in/abdurrauf74/"><i class="fa-brands fa-linkedin fa-2x"></i></a></li>
            <li><a href="http://www.instagram.com/rauffabd_"><i class="fa-brands fa-instagram fa-2x"></i></a></li>
          </ul>
        </footer>
        </footer>
        <!-- End Footer -->
        `;
    }
}

customElements.define("footer-component", footer);

import { createSkeletonRestaurantTemplate } from "../views/templates/template-creator.js";
class mainContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="content">
        <div class="card">
          <h1 tabindex="0" class="card-title">Explore Restaurant</h1>
          <div class="list" id="grid">
          ${createSkeletonRestaurantTemplate(15)}
          </div>
        </div>
      </section>
        `;
    }
}

customElements.define("main-content", mainContent);

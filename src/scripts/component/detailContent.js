import { createSkeletonRestaurantDetail } from '../views/templates/template-creator.js';

class detailContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
            <div class="detail-container">
                ${createSkeletonRestaurantDetail()}
            </div>
        `;
    }
}

customElements.define('detail-content', detailContent);

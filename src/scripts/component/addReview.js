const cardReview = (reviewData) => `
    <div class="review-item">
        <div class="reviewer-item">
            <i class="fa-solid fa-circle-user"></i>
            <div class="reviewer">
                <p>${reviewData.name}</p>
                <p>${reviewData.date}</p>
            </div>
        </div>
        <div class="description-review">
            <p>${reviewData.review}</p>
        </div>
    </div>
`;

export default cardReview;

const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("ratingText")
let selectedRating = 0;

stars.forEach((star)=>{
    star.addEventListener("mouseover", function () {
        highlightStars(this.getAttribute("data-value"));
    });

    star.addEventListener("mouseout", function () {
        highlightStars(selectedRating);
    });

    star.addEventListener("click", function () {
        selectedRating = this.getAttribute("data-value");
        ratingText.textContent = `Selected Rating: ${selectedRating}`;
    });
})

function highlightStars(rating){
    stars.forEach((star) => {
        if (star.getAttribute("data-value") <= rating) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}
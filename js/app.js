const mobileNav = document.querySelector("#mobileNav");
const closeNavBtn = document.querySelector("#closeNavBtn");
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const categoryBtns = document.querySelector("#categoryBtns");

// event listeners
categoryBtns.addEventListener("click", evt => {
    const targetElem = evt.target;
    if(targetElem.matches("button")){
        // close any opened lists
        document.querySelectorAll("[data-categories]").forEach(list => {
            list.classList.remove("open");
        });
        const btnCategory = targetElem.dataset.category;
        const categoryList = mobileNav.querySelector(`[data-categories=${btnCategory}]`);
        categoryList.classList.add("open");
    }
})
hamburgerBtn.addEventListener("click", () => mobileNav.classList.add("show"));
closeNavBtn.addEventListener("click", () => mobileNav.classList.remove("show"));
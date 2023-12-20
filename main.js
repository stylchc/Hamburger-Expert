// Code voor tabs in infoperhamburger
const tabs = document.querySelectorAll(".tabs-container .tab");
const contents = document.querySelectorAll(".tabs-container .tab-content");
    // haalt active class weg
    const removeActiveClass = () => {
        tabs.forEach((t) => {
            t.classList.remove("active");
        });

        contents.forEach(c => {
            c.classList.remove("active");
        });
    };
    // voegt active class toe
    tabs.forEach((t, i) => {
        t.addEventListener("click", () => {
            removeActiveClass();
            contents[i].classList.add("active");
            t.classList.add("active");
        });
    });
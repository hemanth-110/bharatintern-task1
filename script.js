const languageDropdown = document.querySelectorAll(".language");
const faqListItem = document.querySelectorAll("#faq-list ul li");

languageDropdown.forEach((item) => {
    item.addEventListener("click", (e) => {
        item.querySelectorAll(".language-dropdown").forEach((i) => {
            i.classList.toggle("show");
        })
    })
})

faqListItem.forEach((item) => {
    item.addEventListener("click", (e) => {
        item.classList.toggle("show");
    })
})
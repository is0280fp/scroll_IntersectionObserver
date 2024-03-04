const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
}
const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("SectionIsActive")
        }
    });
}
const observer = new IntersectionObserver(callback, options)

const sections = document.querySelectorAll(".sec-other")
sections.forEach ((target) =>{
    observer.observe(target)
})





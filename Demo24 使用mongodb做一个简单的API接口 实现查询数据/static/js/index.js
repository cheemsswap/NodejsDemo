let root = document.querySelector("#root");
let n = 0;
setInterval(() => {
    root.children[n % 5].classList.toggle("active")
    root.children[(n + 1) % 5].classList.toggle("active")
    root.children[(n + 1) % 5].classList.toggle("begin")
    root.children[(n + 2) % 5].classList.toggle("begin")
    n++
}, 3000)

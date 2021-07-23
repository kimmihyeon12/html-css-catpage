const subNav = document.querySelector(".sub-nav-wrap");

document.addEventListener("scroll", () => {
    const scrollTop = document.scrollingElement.scrollTop;
    if(scrollTop > 60){
        console.log("60보다 높음");
        subNav.style.position = "fixed";
    }else {
        subNav.style.position = "static";
    }
})
const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const itemnumber = movielists[i].querySelectorAll("img").length;
    let clickcount = 0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth / 270);
        clickcount++
        if (itemnumber - (4 + clickcount) + (4 - ratio) >= 0) {
            
            movielists[i].style.transform = `translateX(${movielists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        }
        else{
            movielists[i].style.transform ="translateX(0)";
            clickcount = 0;

        }
    });
    console.log(movielists[i].querySelectorAll("img").length);
});


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.nav-container,.sidebar,.left-menu-icon,.toggle");
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})
